"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";
import { SubjectKey } from "@/lib/types";
import { genId, isoNow } from "@/lib/utils";

export interface CoachMessage {
  role: "user" | "assistant";
  content: string;
  ts: string;
}

interface CoachContext {
  /** 关联的技巧 id（最常见） */
  techniqueId?: string;
  /** 关联的训练题 id */
  questionId?: string;
  /** 关联学科 */
  subject?: SubjectKey;
  /** 教练抽屉打开时的初始用户消息（自动发送） */
  initialPrompt?: string;
  /** 显示在抽屉标题 */
  title?: string;
}

export interface CoachConversation {
  id: string;
  context: { techniqueId?: string; questionId?: string; subject?: SubjectKey };
  messages: CoachMessage[];
}

interface CoachStore {
  open: boolean;
  context: CoachContext;
  conversations: CoachConversation[];
  currentId: string | null;
  openWith: (ctx: CoachContext) => void;
  close: () => void;
  appendMessage: (msg: CoachMessage) => void;
  patchLastAssistant: (delta: string) => void;
  reset: () => void;
}

const MAX_CONVERSATIONS = 50;

export const useCoach = create<CoachStore>()(
  persist(
    (set) => ({
      open: false,
      context: {},
      conversations: [],
      currentId: null,
      openWith: (ctx) =>
        set((s) => {
          const id = genId();
          const conv: CoachConversation = {
            id,
            context: {
              techniqueId: ctx.techniqueId,
              questionId: ctx.questionId,
              subject: ctx.subject,
            },
            messages: [],
          };
          const next = [conv, ...s.conversations].slice(0, MAX_CONVERSATIONS);
          return { open: true, context: ctx, conversations: next, currentId: id };
        }),
      close: () => set({ open: false }),
      appendMessage: (msg) =>
        set((s) => {
          if (!s.currentId) return s;
          const conversations = s.conversations.map((c) =>
            c.id === s.currentId
              ? { ...c, messages: [...c.messages, msg] }
              : c
          );
          return { conversations };
        }),
      patchLastAssistant: (delta) =>
        set((s) => {
          if (!s.currentId) return s;
          const conversations = s.conversations.map((c) => {
            if (c.id !== s.currentId) return c;
            const last = c.messages[c.messages.length - 1];
            if (!last || last.role !== "assistant") {
              return {
                ...c,
                messages: [
                  ...c.messages,
                  { role: "assistant" as const, content: delta, ts: isoNow() },
                ],
              };
            }
            return {
              ...c,
              messages: [
                ...c.messages.slice(0, -1),
                { ...last, content: last.content + delta },
              ],
            };
          });
          return { conversations };
        }),
      reset: () => set({ open: false, context: {}, currentId: null }),
    }),
    { name: "score-map-410:coach" }
  )
);
