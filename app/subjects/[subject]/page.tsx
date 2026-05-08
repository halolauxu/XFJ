"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { ArrowLeft, ChevronRight, X } from "lucide-react";
import { getSubject } from "@/data/subjects";
import { getTechniquesBySubject } from "@/data/techniques";
import { useTechniques } from "@/store/useTechniques";
import { useCoach } from "@/store/useCoach";
import { Card } from "@/components/Card";
import { MasteryBadge } from "@/components/MasteryBadge";
import { SubjectKey, MasteryStatus } from "@/lib/types";

const PRIORITY_LABEL: Record<0 | 1 | 2, string> = {
  0: "P0 必抢",
  1: "P1 高性价比",
  2: "P2 有余力再练",
};

export default function SubjectDetailPage() {
  const params = useParams();
  const key = params.subject as SubjectKey;
  const subject = getSubject(key);
  const techniques = getTechniquesBySubject(key);
  const techStates = useTechniques((s) => s.states);
  const openCoach = useCoach((s) => s.openWith);

  if (!subject) {
    return (
      <div className="space-y-4">
        <Link href="/" className="text-ink-500 hover:text-ink-900 inline-flex items-center gap-1">
          <ArrowLeft size={16} /> 返回首页
        </Link>
        <Card><p>没有这个学科。</p></Card>
      </div>
    );
  }

  const masteredCount = techniques.filter(
    (t) => techStates[t.id]?.status === "mastered"
  ).length;
  const learningCount = techniques.filter(
    (t) => techStates[t.id]?.status === "learning"
  ).length;

  // 按优先级分组
  const grouped = {
    p0: techniques.filter((t) => t.priority === 0),
    p1: techniques.filter((t) => t.priority === 1),
    p2: techniques.filter((t) => t.priority === 2),
  };

  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between">
        <Link href="/" className="text-ink-500 hover:text-ink-900 inline-flex items-center gap-1 tap-shrink text-sm">
          <ArrowLeft size={16} /> 首页
        </Link>
      </div>

      {/* 头部：科目目标 */}
      <div
        className="rounded-card p-5 md:p-6 border shadow-soft"
        style={{
          background: `linear-gradient(135deg, ${subject.color}1A, #FBFAF7)`,
          borderColor: `${subject.color}55`,
        }}
      >
        <div className="text-sm text-ink-500">
          满分 {subject.fullScore} · 现在 {subject.current}
        </div>
        <h1 className="text-2xl md:text-3xl font-semibold text-ink-900 leading-snug mt-1">
          {subject.name}{" "}
          <span className="font-num">
            {subject.current}→{subject.conservative}
          </span>
          ，先捡{" "}
          <span style={{ color: subject.color }}>{subject.conservativeGain}</span> 分
        </h1>
        <p className="text-sm text-ink-700 mt-2 leading-relaxed">{subject.oneLine}</p>
        <div className="mt-3 flex items-center gap-3 text-xs text-ink-500">
          <span>共 {techniques.length} 个技巧</span>
          {masteredCount > 0 && (
            <>
              <span>·</span>
              <span className="text-leaf-600 font-medium">已掌握 {masteredCount}</span>
            </>
          )}
          {learningCount > 0 && (
            <>
              <span>·</span>
              <span className="text-warm-400 font-medium">入门中 {learningCount}</span>
            </>
          )}
        </div>
      </div>

      {/* 不做什么 */}
      {subject.dontDo.length > 0 && (
        <Card>
          <h2 className="text-sm font-semibold text-ink-900 mb-2">这科不做</h2>
          <ul className="space-y-1.5">
            {subject.dontDo.map((d) => (
              <li key={d} className="flex items-start gap-2 text-sm text-ink-700">
                <X size={14} className="mt-0.5 text-ink-300 shrink-0" />
                <span>{d}</span>
              </li>
            ))}
          </ul>
        </Card>
      )}

      {/* 技巧列表 — 按 P0/P1/P2 分组 */}
      {(["p0", "p1", "p2"] as const).map((tier) => {
        const list = grouped[tier];
        if (list.length === 0) return null;
        const priority = tier === "p0" ? 0 : tier === "p1" ? 1 : 2;
        return (
          <div key={tier}>
            <div className="flex items-center justify-between mb-2">
              <h2 className="text-base font-semibold text-ink-900">
                {PRIORITY_LABEL[priority]} · {list.length} 个
              </h2>
            </div>
            <div className="space-y-2">
              {list.map((t) => {
                const status: MasteryStatus =
                  techStates[t.id]?.status ?? "unstarted";
                const isPending =
                  t.trainingPending && t.trainingQuestions.length === 0;
                return (
                  <Link
                    key={t.id}
                    href={`/techniques/${t.id}`}
                    className="group block rounded-card bg-paper-50 border border-ink-100/60 shadow-soft p-4 tap-shrink hover:shadow-lift transition-shadow"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 text-xs text-ink-500 mb-1.5 flex-wrap">
                          <span>{t.examType}</span>
                          <span>·</span>
                          <span
                            className="font-medium font-num"
                            style={{ color: subject.color }}
                          >
                            {t.estGain}
                          </span>
                          {isPending && (
                            <span className="text-warm-400 text-[11px]">
                              · 训练题待补
                            </span>
                          )}
                        </div>
                        <div className="text-base font-semibold text-ink-900 leading-snug">
                          {t.title}
                        </div>
                        <div className="text-xs text-ink-500 mt-1 leading-relaxed line-clamp-2">
                          {t.oneLiner}
                        </div>
                      </div>
                      <div className="flex flex-col items-end gap-1.5 shrink-0">
                        <MasteryBadge status={status} />
                        <ChevronRight
                          size={16}
                          className="text-ink-300 group-hover:text-ink-700 transition-colors"
                        />
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        );
      })}

      {/* 教练 */}
      <button
        onClick={() =>
          openCoach({
            title: "教练 · " + subject.name,
            subject: subject.key,
            initialPrompt: `烽峻在看 ${subject.name} 的技巧地图（共 ${techniques.length} 个技巧）。先问他：今天想攻哪个技巧？或者哪一类题最让他头疼？`,
          })
        }
        className="w-full bg-warm-200 hover:bg-warm-300 text-ink-900 rounded-card py-3 text-sm font-medium tap-shrink"
      >
        ✦ 这一科我不知道从哪开始 → 叫教练
      </button>
    </div>
  );
}
