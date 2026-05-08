"use client";

import { useState } from "react";
import {
  Lightbulb,
  Eye,
  Check,
  X,
  RotateCcw,
  Sparkles,
  Target,
  AlertCircle,
} from "lucide-react";
import { TrainingQuestion, TrainingQuestionSource } from "@/lib/types";
import { useTechniques } from "@/store/useTechniques";
import { useCoach } from "@/store/useCoach";
import { cn } from "@/lib/utils";

const SOURCE_LABEL: Record<TrainingQuestionSource, string> = {
  real: "历年真题",
  adapted: "真题改编",
  predicted: "AI 预测题",
};

const SOURCE_STYLE: Record<TrainingQuestionSource, string> = {
  real: "bg-leaf-400/15 text-leaf-600 border-leaf-400/40",
  adapted: "bg-primary-100 text-primary-700 border-primary-300/60",
  predicted: "bg-warm-200 text-warm-400 border-warm-300/60",
};

interface Props {
  techniqueId: string;
  question: TrainingQuestion;
  /** 是不是示例题（只读模式，不计入掌握度） */
  isExample?: boolean;
  /** 关联学科（用于教练上下文） */
  subjectKey?: string;
  /** 技巧名（用于教练上下文） */
  techniqueTitle?: string;
}

export function TrainingQuestionRunner({
  techniqueId,
  question: q,
  isExample = false,
  subjectKey,
  techniqueTitle,
}: Props) {
  const recordResult = useTechniques((s) => s.recordQuestionResult);
  const states = useTechniques((s) => s.states);
  const result = !isExample ? states[techniqueId]?.questionResults[q.id] : undefined;
  const openCoach = useCoach((s) => s.openWith);

  const [studentChoice, setStudentChoice] = useState<string | null>(
    result === "correct" || result === "wrong" ? null : null
  );
  const [hintLevel, setHintLevel] = useState(0);
  const [revealed, setRevealed] = useState(result === "revealed" || isExample);
  const [showWalkthrough, setShowWalkthrough] = useState(isExample);

  const isMC = !!q.options && q.options.length > 0;
  const isPredicted = q.source === "predicted";
  const correct = result === "correct";
  const wrong = result === "wrong";

  function handleChoice(key: string) {
    if (correct) return;
    setStudentChoice(key);
    const isCorrect = key.toUpperCase() === q.answer.toUpperCase();
    if (!isExample) {
      recordResult(techniqueId, q.id, isCorrect ? "correct" : "wrong");
    }
  }

  function handleReveal() {
    setRevealed(true);
    setShowWalkthrough(true);
    if (!isExample) {
      recordResult(techniqueId, q.id, "revealed");
    }
  }

  function bumpHint() {
    setHintLevel((n) => Math.min(2, n + 1));
  }

  // 题源校验：每道题必须有合法 source
  const hasValidSource =
    q.source === "real"
      ? !!q.citation
      : q.source === "adapted"
        ? !!q.basedOn
        : q.source === "predicted";

  return (
    <div
      className={cn(
        "rounded-card border-2 bg-paper-50 overflow-hidden",
        correct
          ? "border-leaf-400/60"
          : wrong
            ? "border-warm-300"
            : "border-ink-100"
      )}
    >
      {/* 题源标签强制 */}
      <div className="px-4 py-2.5 flex items-center justify-between gap-2 border-b border-ink-100/60 bg-ink-100/20">
        <span
          className={cn(
            "inline-flex items-center gap-1 text-xs font-medium px-2 py-0.5 rounded-full border",
            SOURCE_STYLE[q.source]
          )}
        >
          {q.source === "predicted" && <Sparkles size={10} />}
          {SOURCE_LABEL[q.source]}
          {!hasValidSource && (
            <span title="缺少必填溯源信息">
              <AlertCircle size={11} className="text-warm-400" />
            </span>
          )}
        </span>
        {q.source === "real" && q.citation && (
          <span className="text-[11px] text-ink-500">
            {q.citation.year} {q.citation.region} {q.citation.paper}
            {q.citation.qno ? " · " + q.citation.qno : ""}
          </span>
        )}
        {q.source === "adapted" && q.basedOn && (
          <span className="text-[11px] text-ink-500">
            改编自 {q.basedOn.year} {q.basedOn.region}
            {q.basedOn.qno ? " · " + q.basedOn.qno : ""}
          </span>
        )}
        {isPredicted && (
          <span className="text-[11px] text-warm-400 font-medium">
            ⚠ 非真题
          </span>
        )}
        {correct && !isExample && (
          <span className="text-xs text-leaf-600 font-medium inline-flex items-center gap-0.5">
            <Check size={12} /> 已会
          </span>
        )}
      </div>

      <div className="px-4 py-4 space-y-3">
        {/* 题干 */}
        <div>
          <div className="text-sm text-ink-900 leading-relaxed whitespace-pre-line">
            {q.stem}
          </div>
          {q.stemImageDesc && (
            <pre className="mt-2 text-xs text-ink-700 bg-ink-100/40 rounded-chip p-2 overflow-x-auto whitespace-pre">
              {q.stemImageDesc}
            </pre>
          )}
        </div>

        {/* AI 预测题：显示"为什么适合烽峻" */}
        {isPredicted && q.whyFitsStudent && !revealed && (
          <div className="text-xs text-warm-400 bg-warm-100 rounded-chip px-3 py-2 leading-relaxed border border-warm-200">
            <strong>为什么练这题：</strong> {q.whyFitsStudent}
          </div>
        )}

        {/* 选项 */}
        {isMC && q.options && (
          <div className="space-y-1.5">
            {q.options.map((opt) => {
              const isStudent = studentChoice === opt.key;
              const isAnswer = opt.key.toUpperCase() === q.answer.toUpperCase();
              const showRight = correct || revealed;
              const showWrong = isStudent && !isAnswer && !correct;
              return (
                <button
                  key={opt.key}
                  onClick={() => handleChoice(opt.key)}
                  disabled={correct || isExample}
                  className={cn(
                    "w-full text-left flex items-start gap-3 rounded-chip border px-3 py-2.5 text-sm leading-relaxed transition-all",
                    showRight && isAnswer
                      ? "border-leaf-500 bg-leaf-400/15 text-ink-900"
                      : showWrong
                        ? "border-warm-300 bg-warm-100 text-ink-700"
                        : isStudent
                          ? "border-primary-300 bg-primary-100/50 text-ink-900"
                          : "border-ink-100 bg-paper-50 text-ink-900 hover:border-ink-200",
                    !correct && !isExample && "tap-shrink"
                  )}
                >
                  <span
                    className={cn(
                      "font-num font-semibold w-5 h-5 rounded-full grid place-items-center text-xs shrink-0 mt-0.5",
                      showRight && isAnswer
                        ? "bg-leaf-500 text-white"
                        : showWrong
                          ? "bg-warm-300 text-ink-900"
                          : isStudent
                            ? "bg-primary-300 text-white"
                            : "bg-ink-100 text-ink-700"
                    )}
                  >
                    {opt.key}
                  </span>
                  <span className="flex-1">{opt.text}</span>
                  {showRight && isAnswer && (
                    <Check size={16} className="text-leaf-600 shrink-0 mt-0.5" />
                  )}
                  {showWrong && (
                    <X size={16} className="text-warm-400 shrink-0 mt-0.5" />
                  )}
                </button>
              );
            })}
          </div>
        )}

        {/* 填空 / 解答题 */}
        {!isMC && !revealed && (
          <div className="bg-warm-100/40 border border-warm-200 rounded-chip p-3 text-sm leading-relaxed">
            <div className="text-xs text-ink-500 mb-2">
              填空 / 解答题：先在草稿写步骤，写完点查看答案。
            </div>
            <button
              onClick={handleReveal}
              className="bg-warm-300 hover:bg-warm-400 text-ink-900 rounded-chip px-3 py-2 text-sm font-medium tap-shrink inline-flex items-center gap-1.5"
            >
              <Eye size={14} /> 我写完了，查看答案
            </button>
          </div>
        )}

        {/* 阶梯提示（卡住可看） */}
        {(q.hint1 || q.hint2) && !correct && !isExample && (
          <div className="bg-primary-50 border border-primary-100 rounded-chip p-3 space-y-2">
            <div className="flex items-center justify-between text-xs font-medium text-primary-700">
              <span className="inline-flex items-center gap-1.5">
                <Lightbulb size={12} /> 阶梯提示
              </span>
              <span className="text-ink-500 font-num">{hintLevel}/2</span>
            </div>
            {hintLevel >= 1 && q.hint1 && (
              <div className="text-sm text-ink-900 leading-relaxed">
                <span className="font-num text-primary-700 font-semibold mr-1">1.</span>
                {q.hint1}
              </div>
            )}
            {hintLevel >= 2 && q.hint2 && (
              <div className="text-sm text-ink-900 leading-relaxed">
                <span className="font-num text-primary-700 font-semibold mr-1">2.</span>
                {q.hint2}
              </div>
            )}
            {hintLevel < 2 && (q.hint1 || q.hint2) && (
              <button
                onClick={bumpHint}
                className="text-xs text-primary-700 hover:underline tap-shrink"
              >
                + 看下一步提示
              </button>
            )}
          </div>
        )}

        {/* 解析 */}
        {(correct || revealed) && (
          <div className="bg-leaf-400/10 border border-leaf-400/40 rounded-chip overflow-hidden">
            <button
              onClick={() => setShowWalkthrough((v) => !v)}
              className="w-full text-left px-3 py-2 flex items-center justify-between tap-shrink"
            >
              <span className="text-xs font-medium text-leaf-600 inline-flex items-center gap-1.5">
                <Target size={12} />
                {isMC ? "为什么是 " + q.answer : "参考答案 + 解析"}
              </span>
              <span className="text-xs text-leaf-600">
                {showWalkthrough ? "收起" : "展开"}
              </span>
            </button>
            {showWalkthrough && (
              <div className="px-3 pb-3 space-y-2 text-sm">
                {!isMC && (
                  <div className="bg-paper-50 rounded-chip p-2">
                    <div className="text-[11px] text-ink-500 mb-1">参考答案</div>
                    <div className="text-ink-900 whitespace-pre-line">
                      {q.answer}
                    </div>
                  </div>
                )}
                {q.whyCorrect && (
                  <div>
                    <div className="text-[11px] text-ink-500 mb-1">为什么对</div>
                    <div className="text-ink-900 leading-relaxed whitespace-pre-line">
                      {q.whyCorrect}
                    </div>
                  </div>
                )}
                {q.whyWrong &&
                  Object.entries(q.whyWrong).map(([k, v]) => (
                    <div key={k}>
                      <div className="text-[11px] text-ink-500 mb-1">为什么 {k} 错</div>
                      <div className="text-ink-700 leading-relaxed">{v}</div>
                    </div>
                  ))}
                {isPredicted && q.trap && (
                  <div className="bg-warm-100 rounded-chip p-2">
                    <div className="text-[11px] text-warm-400 mb-1">常见陷阱</div>
                    <div className="text-ink-700 leading-relaxed text-xs">
                      {q.trap}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        )}

        {/* 操作 */}
        {!isExample && (
          <div className="flex flex-wrap gap-2">
            {!isMC && !revealed && (
              <button
                onClick={handleReveal}
                className="bg-warm-300 text-ink-900 rounded-chip px-3 py-1.5 text-sm tap-shrink inline-flex items-center gap-1"
              >
                <Eye size={12} /> 查看答案
              </button>
            )}
            {(correct || wrong || revealed) && (
              <button
                onClick={() => {
                  if (!isExample) recordResult(techniqueId, q.id, "wrong");
                  setStudentChoice(null);
                  setHintLevel(0);
                  setRevealed(false);
                  setShowWalkthrough(false);
                }}
                className="bg-ink-100/60 text-ink-700 rounded-chip px-3 py-1.5 text-sm tap-shrink inline-flex items-center gap-1"
              >
                <RotateCcw size={12} /> 再做一次
              </button>
            )}
            <button
              onClick={() =>
                openCoach({
                  title: "教练 · " + (techniqueTitle ?? q.id),
                  techniqueId,
                  questionId: q.id,
                  subject: subjectKey as any,
                  initialPrompt: `烽峻在做这道题：\n${q.stem}\n${
                    q.options
                      ? q.options.map((o) => `${o.key}. ${o.text}`).join("\n")
                      : ""
                  }\n他${
                    wrong ? "选了 " + studentChoice + "（错的）" : "卡住了"
                  }。先反问一个让他思考一步的小问题，不要直接给答案。`,
                })
              }
              className="bg-warm-200 hover:bg-warm-300 text-ink-900 rounded-chip px-3 py-1.5 text-sm tap-shrink inline-flex items-center gap-1 ml-auto"
            >
              <Sparkles size={12} /> 叫教练
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
