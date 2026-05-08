"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import {
  ArrowLeft,
  Check,
  ExternalLink,
  Sparkles,
  Target,
  AlertTriangle,
} from "lucide-react";
import { getTechnique } from "@/data/techniques";
import { getSubject } from "@/data/subjects";
import { useTechniques } from "@/store/useTechniques";
import { useCoach } from "@/store/useCoach";
import {
  BLOCKER_LABEL,
  BlockerType,
  MasteryStatus,
  SUBJECT_NAMES,
} from "@/lib/types";
import { Card } from "@/components/Card";
import { MasteryBadge } from "@/components/MasteryBadge";
import { TrainingQuestionRunner } from "@/components/TrainingQuestionRunner";
import { cn } from "@/lib/utils";

export default function TechniqueDetailPage() {
  const params = useParams();
  const id = params.id as string;
  const technique = getTechnique(id);
  const status = useTechniques((s) => s.states[id]?.status ?? "unstarted");
  const setStatus = useTechniques((s) => s.setStatus);
  const markStepsRead = useTechniques((s) => s.markStepsRead);
  const states = useTechniques((s) => s.states);
  const openCoach = useCoach((s) => s.openWith);
  const [activeBlocker, setActiveBlocker] = useState<BlockerType | null>(null);

  useEffect(() => {
    if (technique) markStepsRead(technique.id);
  }, [technique, markStepsRead]);

  if (!technique) {
    return (
      <div className="space-y-4">
        <Link href="/" className="text-ink-500 hover:text-ink-900 inline-flex items-center gap-1">
          <ArrowLeft size={16} /> 返回首页
        </Link>
        <Card>
          <p>技巧不存在或已下架。</p>
        </Card>
      </div>
    );
  }

  const subject = getSubject(technique.subject);

  // 训练题答题统计
  const attempts = states[technique.id]?.questionResults ?? {};
  const trainingResults = technique.trainingQuestions.map((q) => ({
    id: q.id,
    result: attempts[q.id],
  }));
  const correctCount = trainingResults.filter((r) => r.result === "correct").length;
  const totalAttempts = trainingResults.filter((r) => r.result !== undefined).length;
  const totalQuestions = technique.trainingQuestions.length;

  return (
    <div className="space-y-5">
      {/* 顶部导航 */}
      <div className="flex items-center justify-between">
        <Link
          href={`/subjects/${technique.subject}`}
          className="text-ink-500 hover:text-ink-900 inline-flex items-center gap-1 tap-shrink text-sm"
        >
          <ArrowLeft size={16} /> 返回{subject?.name}
        </Link>
        <MasteryBadge status={status} size="md" />
      </div>

      {/* ==== 头部：标题 + 题型 + 预计提分 + P 优先级 ==== */}
      <div
        className="rounded-card p-5 md:p-6 border shadow-soft"
        style={{
          background: `linear-gradient(135deg, ${subject?.color}1A, #FBFAF7)`,
          borderColor: `${subject?.color}55`,
        }}
      >
        <div className="flex items-center gap-2 mb-2">
          <span
            className="text-xs px-2 py-0.5 rounded-full font-medium"
            style={{ background: `${subject?.color}30`, color: subject?.color }}
          >
            {SUBJECT_NAMES[technique.subject]}
          </span>
          <span className="text-xs text-ink-500">{technique.examType}</span>
          <span className="ml-auto text-xs text-ink-500">
            P{technique.priority}{" "}
            {technique.priority === 0
              ? "必抢"
              : technique.priority === 1
                ? "高性价比"
                : "有余力再练"}
          </span>
        </div>
        <h1 className="text-xl md:text-2xl font-semibold text-ink-900 leading-snug">
          {technique.title}
        </h1>
        <div className="mt-2 flex items-baseline gap-2">
          <span
            className="font-num text-2xl font-semibold"
            style={{ color: subject?.color }}
          >
            {technique.estGain}
          </span>
        </div>
      </div>

      {/* ==== 段 1：技巧一句话 ==== */}
      <Card className="bg-warm-100/40 border-warm-200">
        <div className="text-xs text-warm-400 mb-1 font-medium">技巧一句话</div>
        <div className="text-base text-ink-900 leading-relaxed font-medium">
          {technique.oneLiner}
        </div>
      </Card>

      {/* ==== 段 2：真题溯源 ==== */}
      <Card>
        <div className="flex items-baseline justify-between mb-3">
          <h2 className="text-sm font-semibold text-ink-900 inline-flex items-center gap-1.5">
            <span className="text-primary-600">📎</span> 真题溯源
          </h2>
          <span className="text-xs text-ink-500">
            {technique.sourceTrace.filter((s) => s.kind === "real").length} 条已确认
            {technique.sourceTrace.some((s) => s.kind === "placeholder") && " · 部分待补"}
          </span>
        </div>
        <ul className="space-y-2">
          {technique.sourceTrace.map((s, i) => {
            if (s.kind === "placeholder") {
              return (
                <li
                  key={i}
                  className="flex items-start gap-2 bg-ink-100/30 rounded-chip px-3 py-2 text-xs text-ink-500"
                >
                  <AlertTriangle size={12} className="text-warm-400 mt-0.5 shrink-0" />
                  <span>
                    <strong className="text-warm-400 mr-1">待补</strong>
                    {s.note ?? "明天扫描件到位后补充"}
                  </span>
                </li>
              );
            }
            return (
              <li
                key={i}
                className="flex items-start gap-2 text-sm text-ink-900"
              >
                <span className="font-num text-xs font-semibold text-primary-700 mt-0.5 shrink-0">
                  ✓
                </span>
                <div className="flex-1 min-w-0">
                  <div>
                    <span className="font-medium">{s.year}</span> {s.region} {s.paper}
                    {s.qno && <span className="text-ink-500"> · {s.qno}</span>}
                    {s.topic && <span className="text-ink-500"> — {s.topic}</span>}
                  </div>
                  {s.url && (
                    <a
                      href={s.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-primary-600 hover:underline inline-flex items-center gap-0.5 mt-0.5"
                    >
                      原文链接 <ExternalLink size={10} />
                    </a>
                  )}
                  {s.note && (
                    <div className="text-xs text-ink-500 mt-0.5">{s.note}</div>
                  )}
                </div>
              </li>
            );
          })}
        </ul>
      </Card>

      {/* ==== 段 3：为什么适合烽峻 ==== */}
      <Card>
        <div className="text-xs text-ink-500 mb-1.5 font-medium">为什么适合烽峻</div>
        <div className="text-sm text-ink-900 leading-relaxed">
          {technique.whyFits}
        </div>
      </Card>

      {/* ==== 段 4：技巧步骤 ==== */}
      <Card>
        <h2 className="text-sm font-semibold text-ink-900 mb-3">技巧步骤</h2>
        <ol className="space-y-2">
          {technique.steps.map((step, i) => (
            <li key={i} className="flex gap-3 text-sm leading-relaxed">
              <span
                className="font-num text-xs font-semibold w-5 h-5 rounded-full grid place-items-center shrink-0 mt-0.5 text-white"
                style={{ background: subject?.color }}
              >
                {i + 1}
              </span>
              <span
                className="text-ink-900 whitespace-pre-line"
                dangerouslySetInnerHTML={{
                  __html: step
                    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
                    .replace(/\n/g, "<br/>"),
                }}
              />
            </li>
          ))}
        </ol>
      </Card>

      {/* ==== 段 5：示例题 ==== */}
      <div>
        <div className="flex items-baseline justify-between mb-2">
          <h2 className="text-sm font-semibold text-ink-900">示例题（先看）</h2>
          <span className="text-xs text-ink-500">不计入掌握度</span>
        </div>
        <TrainingQuestionRunner
          techniqueId={technique.id}
          question={technique.example}
          isExample
          subjectKey={technique.subject}
          techniqueTitle={technique.title}
        />
      </div>

      {/* ==== 段 6：训练题 ==== */}
      <div>
        <div className="flex items-baseline justify-between mb-2">
          <h2 className="text-sm font-semibold text-ink-900">训练题（自己做）</h2>
          {totalQuestions > 0 && (
            <span className="text-xs text-ink-500">
              答对 {correctCount}/{totalAttempts || 0}
            </span>
          )}
        </div>
        {technique.trainingQuestions.length === 0 ? (
          <Card className="bg-warm-100/30 border-warm-200">
            <div className="flex items-start gap-2 text-sm text-ink-700">
              <AlertTriangle size={16} className="text-warm-400 shrink-0 mt-0.5" />
              <div>
                <strong className="text-warm-400">训练题待补</strong>
                <p className="mt-1 text-ink-700 leading-relaxed">
                  {technique.trainingPendingNote ??
                    "明天扫描件到位后补充真题训练。"}
                </p>
                <p className="mt-2 text-xs text-ink-500">
                  这条原则不破：没真题就标"待补"，不用 AI 题伪装真题。
                </p>
              </div>
            </div>
          </Card>
        ) : (
          <div className="space-y-3">
            {technique.trainingQuestions.map((q) => (
              <TrainingQuestionRunner
                key={q.id}
                techniqueId={technique.id}
                question={q}
                subjectKey={technique.subject}
                techniqueTitle={technique.title}
              />
            ))}
          </div>
        )}
      </div>

      {/* ==== 段 7：掌握测试 ==== */}
      <Card className="border-leaf-400/40 bg-leaf-400/5">
        <h2 className="text-sm font-semibold text-ink-900 mb-2 inline-flex items-center gap-1.5">
          <Target size={14} className="text-leaf-600" />
          掌握测试
        </h2>
        <div className="text-sm text-ink-900 leading-relaxed">
          {technique.masteryTest.description}
        </div>
        <div className="mt-2 text-xs text-leaf-600 font-medium">
          通过标准：{technique.masteryTest.passThreshold}
        </div>
        <div className="mt-3 flex flex-wrap gap-2">
          <button
            onClick={() => setStatus(technique.id, "mastered")}
            className={cn(
              "text-xs rounded-full px-3 py-1.5 inline-flex items-center gap-1 tap-shrink",
              status === "mastered"
                ? "bg-leaf-500 text-white"
                : "bg-ink-100/60 text-ink-700"
            )}
          >
            <Check size={12} /> 我会了（标"掌握"）
          </button>
          <button
            onClick={() => setStatus(technique.id, "learning")}
            className={cn(
              "text-xs rounded-full px-3 py-1.5 tap-shrink",
              status === "learning"
                ? "bg-warm-300 text-ink-900"
                : "bg-ink-100/60 text-ink-700"
            )}
          >
            还在学（标"入门"）
          </button>
          <button
            onClick={() => setStatus(technique.id, "unstarted")}
            className="text-xs rounded-full px-3 py-1.5 bg-ink-100/60 text-ink-700 tap-shrink"
          >
            重新开始
          </button>
        </div>
      </Card>

      {/* ==== 段 8：卡住了怎么办 ==== */}
      {Object.keys(technique.stuckResponses).length > 0 && (
        <Card>
          <h2 className="text-sm font-semibold text-ink-900 mb-3">
            卡住了？选一个最像你现在的
          </h2>
          <div className="grid grid-cols-2 gap-2">
            {(Object.keys(technique.stuckResponses) as BlockerType[]).map(
              (key) => (
                <button
                  key={key}
                  onClick={() =>
                    setActiveBlocker(activeBlocker === key ? null : key)
                  }
                  className={cn(
                    "text-left text-sm rounded-chip px-3 py-2.5 tap-shrink transition-colors",
                    activeBlocker === key
                      ? "bg-warm-200 text-ink-900"
                      : "bg-ink-100/40 text-ink-700 hover:bg-ink-100"
                  )}
                >
                  {BLOCKER_LABEL[key]}
                </button>
              )
            )}
          </div>
          {activeBlocker && technique.stuckResponses[activeBlocker] && (
            <div className="mt-3 bg-warm-100 border border-warm-200 rounded-chip px-3 py-3">
              <div className="text-xs text-warm-400 mb-1 font-medium">
                这样处理：
              </div>
              <div className="text-sm text-ink-900 leading-relaxed">
                {technique.stuckResponses[activeBlocker]}
              </div>
              <button
                onClick={() =>
                  openCoach({
                    title: "教练 · " + technique.title,
                    techniqueId: technique.id,
                    subject: technique.subject,
                    initialPrompt: `烽峻在练「${technique.title}」，他卡在「${BLOCKER_LABEL[activeBlocker]}」。\n\n技巧上下文：${technique.coachPrompt}\n\n现在他需要你的帮助。先反问一个让他思考一步的小问题。`,
                  })
                }
                className="mt-2 inline-flex items-center gap-1 text-xs text-primary-600 hover:underline tap-shrink"
              >
                <Sparkles size={12} /> 还不行？叫教练
              </button>
            </div>
          )}
        </Card>
      )}

      {/* ==== 段 9：DeepSeek 教练入口（醒目） ==== */}
      <button
        onClick={() =>
          openCoach({
            title: "教练 · " + technique.title,
            techniqueId: technique.id,
            subject: technique.subject,
            initialPrompt: `烽峻在练「${technique.title}」（${technique.examType}）。\n\n技巧规则：${technique.coachPrompt}\n\n他点了你。先主动问他一个具体问题（不要说'你想问什么'）。`,
          })
        }
        className="w-full bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white rounded-card py-4 px-5 shadow-soft tap-shrink inline-flex items-center justify-center gap-2"
      >
        <Sparkles size={18} />
        <span className="font-medium">叫教练陪我练这个技巧</span>
      </button>
    </div>
  );
}
