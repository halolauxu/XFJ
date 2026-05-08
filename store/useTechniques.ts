"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";
import { MasteryStatus } from "@/lib/types";
import { isoNow } from "@/lib/utils";

/**
 * 技巧掌握度 store。
 * 只记 3 态：未学 / 入门 / 掌握。
 * 训练题答题结果在 questionResults 里（用于推断"入门"状态）。
 */
export interface TechniqueState {
  /** 是否查看过技巧步骤 */
  stepsRead: boolean;
  /** 训练题做题结果 */
  questionResults: Record<string, "correct" | "wrong" | "revealed">;
  /** 当前掌握度 */
  status: MasteryStatus;
  /** 首次接触时间 */
  firstAttemptAt?: string;
  lastUpdatedAt: string;
}

interface TechniquesStore {
  states: Record<string, TechniqueState>;
  /** 标技巧步骤"已读" */
  markStepsRead: (techniqueId: string) => void;
  /** 记录训练题作答 */
  recordQuestionResult: (
    techniqueId: string,
    questionId: string,
    result: "correct" | "wrong" | "revealed"
  ) => void;
  /** 直接设掌握度（用户手动标） */
  setStatus: (techniqueId: string, status: MasteryStatus) => void;
  /** 重置该技巧 */
  reset: (techniqueId: string) => void;
  /** 取掌握度 */
  getStatus: (techniqueId: string) => MasteryStatus;
}

function inferStatus(state: TechniqueState): MasteryStatus {
  // 用户手动设置的掌握状态优先（不会被自动推断覆盖）
  // 实际由 setStatus 直接写入
  // 自动推断逻辑：
  // - 没看过步骤 + 没做过题 = unstarted
  // - 看过步骤 OR 做过题 = learning
  // - 训练题正确率 ≥ 80% = mastered
  const total = Object.keys(state.questionResults).length;
  if (total === 0 && !state.stepsRead) return "unstarted";
  if (total === 0) return "learning";
  const correct = Object.values(state.questionResults).filter(
    (r) => r === "correct"
  ).length;
  const rate = correct / total;
  if (rate >= 0.8) return "mastered";
  return "learning";
}

export const useTechniques = create<TechniquesStore>()(
  persist(
    (set, get) => ({
      states: {},

      markStepsRead: (techniqueId) =>
        set((s) => {
          const cur = s.states[techniqueId];
          const now = isoNow();
          const next: TechniqueState = {
            stepsRead: true,
            questionResults: cur?.questionResults ?? {},
            status: cur?.status ?? "learning",
            firstAttemptAt: cur?.firstAttemptAt ?? now,
            lastUpdatedAt: now,
          };
          next.status = inferStatus(next);
          return { states: { ...s.states, [techniqueId]: next } };
        }),

      recordQuestionResult: (techniqueId, questionId, result) =>
        set((s) => {
          const cur = s.states[techniqueId];
          const now = isoNow();
          const newResults = {
            ...(cur?.questionResults ?? {}),
            [questionId]: result,
          };
          const next: TechniqueState = {
            stepsRead: cur?.stepsRead ?? true,
            questionResults: newResults,
            status: cur?.status ?? "learning",
            firstAttemptAt: cur?.firstAttemptAt ?? now,
            lastUpdatedAt: now,
          };
          next.status = inferStatus(next);
          return { states: { ...s.states, [techniqueId]: next } };
        }),

      setStatus: (techniqueId, status) =>
        set((s) => {
          const cur = s.states[techniqueId];
          const now = isoNow();
          const next: TechniqueState = {
            stepsRead: cur?.stepsRead ?? false,
            questionResults: cur?.questionResults ?? {},
            status,
            firstAttemptAt: cur?.firstAttemptAt ?? now,
            lastUpdatedAt: now,
          };
          return { states: { ...s.states, [techniqueId]: next } };
        }),

      reset: (techniqueId) =>
        set((s) => {
          const next = { ...s.states };
          delete next[techniqueId];
          return { states: next };
        }),

      getStatus: (techniqueId) => {
        return get().states[techniqueId]?.status ?? "unstarted";
      },
    }),
    { name: "score-map-410:techniques" }
  )
);
