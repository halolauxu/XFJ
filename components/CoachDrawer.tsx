"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import { X, Send, Loader2, BookOpen } from "lucide-react";
import { useCoach, CoachMessage } from "@/store/useCoach";
import { useStudent } from "@/store/useStudent";
import { useTechniques } from "@/store/useTechniques";
import { getTechnique, findTrainingQuestion } from "@/data/techniques";
import { getSubject } from "@/data/subjects";
import { isoNow } from "@/lib/utils";
import { MASTERY_LABEL } from "@/lib/types";

export function CoachDrawer() {
  const open = useCoach((s) => s.open);
  const close = useCoach((s) => s.close);
  const context = useCoach((s) => s.context);
  const conversations = useCoach((s) => s.conversations);
  const currentId = useCoach((s) => s.currentId);
  const appendMessage = useCoach((s) => s.appendMessage);
  const patchLastAssistant = useCoach((s) => s.patchLastAssistant);

  const { currentScore, targetScore } = useStudent();
  const techStates = useTechniques((s) => s.states);

  const [input, setInput] = useState("");
  const [pending, setPending] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const conv = conversations.find((c) => c.id === currentId);
  const messages = conv?.messages ?? [];

  function buildContextSummary() {
    const parts: string[] = [];
    parts.push(`烽峻当前估算分 ${currentScore}，目标 ${targetScore}。`);
    if (context.subject) {
      const s = getSubject(context.subject);
      if (s) {
        parts.push(
          `当前学科：${s.name}（${s.current} → 目标 ${s.conservative}，先捡 ${s.conservativeGain} 分）。`
        );
      }
    }
    if (context.techniqueId) {
      const t = getTechnique(context.techniqueId);
      if (t) {
        parts.push(`当前技巧：${t.title}（${t.examType}，预计 ${t.estGain}）。`);
        parts.push(`技巧一句话：${t.oneLiner}`);
        parts.push(`技巧步骤：${t.steps.join(" / ")}`);
        parts.push(`教练规则：${t.coachPrompt}`);
        const status = techStates[t.id]?.status ?? "unstarted";
        parts.push(`烽峻在这个技巧上的当前掌握度：${MASTERY_LABEL[status]}`);
      }
    }
    return parts.join("\n");
  }

  useEffect(() => {
    const el = scrollRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [messages.length, pending]);

  // 抽屉打开时锁住页面背后滚动，避免点输入框引起页面错位
  useEffect(() => {
    if (open) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [open]);

  // 当前上下文（技巧 + 当前题目）— 让用户在抽屉里也看得见在做什么
  const currentTechnique = context.techniqueId
    ? getTechnique(context.techniqueId)
    : undefined;
  const currentQuestionRef = context.questionId
    ? findTrainingQuestion(context.questionId)
    : null;

  // 抽屉打开 + 没消息 + 有 initialPrompt → 自动用 initialPrompt 作为第一条用户消息发送
  useEffect(() => {
    if (open && conv && conv.messages.length === 0 && context.initialPrompt) {
      void send(context.initialPrompt);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open, currentId]);

  async function send(text: string) {
    if (!text.trim() || pending) return;
    setError(null);
    const userMsg: CoachMessage = {
      role: "user",
      content: text.trim(),
      ts: isoNow(),
    };
    appendMessage(userMsg);
    setPending(true);
    try {
      const history = [...(conv?.messages ?? []), userMsg]
        .slice(-10)
        .map((m) => ({ role: m.role, content: m.content }));
      const res = await fetch("/api/coach/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          context: buildContextSummary(),
          messages: history,
        }),
      });
      if (!res.ok) {
        const t = await res.text();
        throw new Error(t || `HTTP ${res.status}`);
      }
      const reader = res.body?.getReader();
      if (!reader) throw new Error("流式响应读取失败");
      const decoder = new TextDecoder();
      let buffer = "";
      let sawContent = false;
      while (true) {
        const { value, done } = await reader.read();
        if (done) break;
        buffer += decoder.decode(value, { stream: true });
        let idx;
        while ((idx = buffer.indexOf("\n\n")) >= 0) {
          const chunk = buffer.slice(0, idx);
          buffer = buffer.slice(idx + 2);
          const lines = chunk.split("\n");
          for (const line of lines) {
            if (!line.startsWith("data:")) continue;
            const data = line.slice(5).trim();
            if (data === "[DONE]") continue;
            try {
              const json = JSON.parse(data);
              const delta = json?.choices?.[0]?.delta;
              const contentDelta: string = delta?.content ?? "";
              if (contentDelta) {
                sawContent = true;
                patchLastAssistant(contentDelta);
              }
            } catch {
              // ignore
            }
          }
        }
      }
      if (!sawContent) {
        patchLastAssistant("（教练这次没说出口。再问我一次？）");
      }
    } catch (err) {
      const msg = err instanceof Error ? err.message : "请求失败";
      setError(msg);
      if (msg.toLowerCase().includes("api") || msg.toLowerCase().includes("key")) {
        appendMessage({
          role: "assistant",
          content:
            "暂时连不上教练。先用一句话提示你：题目里 3 字以上的关键词圈出来给我看？",
          ts: isoNow(),
        });
      }
    } finally {
      setPending(false);
    }
  }

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    const text = input;
    setInput("");
    void send(text);
  }

  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex">
      <div
        className="absolute inset-0 bg-ink-900/30 drawer-overlay-open z-0"
        onClick={close}
      />
      <div className="relative z-10 ml-auto h-full w-full md:w-[420px] bg-paper-50 shadow-lift flex flex-col drawer-open">
        <header className="flex items-center justify-between px-4 py-3 border-b border-ink-100">
          <div>
            <h3 className="font-semibold text-ink-900">{context.title ?? "提分教练"}</h3>
            <p className="text-xs text-ink-500">
              不直接给答案，但会陪你一步一步走。
            </p>
          </div>
          <button onClick={close} className="p-2 -mr-2 text-ink-500 tap-shrink">
            <X size={18} />
          </button>
        </header>

        <div ref={scrollRef} className="flex-1 overflow-y-auto px-4 py-4 space-y-3">
          {/* 上下文卡片：永远显示当前在做的技巧 + 题目（如有），避免遮挡感 */}
          {(currentTechnique || currentQuestionRef) && (
            <div className="rounded-card bg-paper-100/70 border border-ink-100 p-3 space-y-2 text-xs">
              {currentTechnique && (
                <div className="flex items-start gap-2">
                  <BookOpen size={12} className="text-primary-600 mt-0.5 shrink-0" />
                  <div className="flex-1 min-w-0">
                    <div className="text-[10px] uppercase tracking-wider text-ink-500">
                      当前技巧
                    </div>
                    <div className="font-medium text-ink-900 leading-snug">
                      {currentTechnique.title}
                    </div>
                    <div className="text-[11px] text-ink-500 mt-0.5">
                      {currentTechnique.examType} · {currentTechnique.estGain}
                    </div>
                  </div>
                </div>
              )}
              {currentQuestionRef && (
                <div className="border-t border-ink-100 pt-2">
                  <div className="text-[10px] uppercase tracking-wider text-ink-500 mb-1">
                    当前题目
                  </div>
                  <div className="text-[13px] text-ink-900 leading-relaxed whitespace-pre-line">
                    {currentQuestionRef.question.stem}
                  </div>
                  {currentQuestionRef.question.options && (
                    <ol className="mt-1.5 space-y-0.5">
                      {currentQuestionRef.question.options.map((opt) => (
                        <li
                          key={opt.key}
                          className="text-[12px] text-ink-700 leading-relaxed"
                        >
                          <span className="font-num font-semibold mr-1.5 text-ink-500">
                            {opt.key}.
                          </span>
                          {opt.text}
                        </li>
                      ))}
                    </ol>
                  )}
                </div>
              )}
            </div>
          )}

          {messages.length === 0 && !pending && (
            <div className="text-sm text-ink-500 bg-warm-100 rounded-card p-3 leading-relaxed">
              告诉我你卡在哪。先把题里的几个关键词圈出来发给我。
            </div>
          )}
          {messages.map((m, i) => (
            <Bubble key={i} role={m.role} content={m.content} />
          ))}
          {pending && messages[messages.length - 1]?.role === "user" && (
            <div className="flex items-center gap-2 text-ink-500 text-sm">
              <Loader2 size={14} className="animate-spin" />
              教练在帮你想…（v4-pro 思考要几秒）
            </div>
          )}
          {error && (
            <div className="text-xs text-warm-400 bg-warm-100 rounded-chip px-3 py-2">
              {error}
            </div>
          )}
        </div>

        <form
          onSubmit={onSubmit}
          className="border-t border-ink-100 px-3 py-2 flex items-end gap-2 bg-paper-50"
        >
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                onSubmit(e as unknown as FormEvent);
              }
            }}
            rows={1}
            placeholder="说一下你卡在哪…"
            className="flex-1 resize-none bg-ink-100/40 rounded-chip px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-primary-300 max-h-32"
          />
          <button
            type="submit"
            disabled={!input.trim() || pending}
            className="bg-primary-500 hover:bg-primary-600 disabled:bg-ink-300 text-white rounded-chip h-10 w-10 grid place-items-center tap-shrink"
            aria-label="发送"
          >
            {pending ? (
              <Loader2 size={16} className="animate-spin" />
            ) : (
              <Send size={16} />
            )}
          </button>
        </form>
      </div>
    </div>
  );
}

function Bubble({ role, content }: { role: "user" | "assistant"; content: string }) {
  if (role === "user") {
    return (
      <div className="flex justify-end">
        <div className="bg-primary-100 text-ink-900 rounded-card rounded-tr-sm px-3 py-2 text-sm max-w-[85%] whitespace-pre-wrap leading-relaxed">
          {content}
        </div>
      </div>
    );
  }
  return (
    <div className="flex justify-start">
      <div className="bg-warm-100 text-ink-900 rounded-card rounded-tl-sm px-3 py-2 text-sm max-w-[85%] whitespace-pre-wrap leading-relaxed">
        {content || "…"}
      </div>
    </div>
  );
}
