"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ChevronRight, FileText, Info } from "lucide-react";
import { LOCKED_SUBJECTS, SUBJECTS, TARGET_SCORE } from "@/data/subjects";
import { TECHNIQUE_COUNT_BY_SUBJECT } from "@/data/techniques";
import { useStudent } from "@/store/useStudent";
import { useTechniques } from "@/store/useTechniques";
import { daysUntilExam } from "@/lib/utils";
import { Card } from "@/components/Card";

export default function HomePage() {
  const { currentScore, targetScore } = useStudent();
  const techStates = useTechniques((s) => s.states);
  const [days, setDays] = useState<number | null>(null);

  useEffect(() => {
    setDays(daysUntilExam());
  }, []);

  const remain = Math.max(0, targetScore - currentScore);

  // 计算合计
  const totalFull =
    SUBJECTS.reduce((s, x) => s + x.fullScore, 0) +
    LOCKED_SUBJECTS.reduce((s, x) => s + x.fullScore, 0);

  const totalCurrent =
    SUBJECTS.reduce((s, x) => s + x.current, 0) +
    LOCKED_SUBJECTS.reduce((s, x) => s + (x.current ?? 0), 0);

  const totalConservative =
    SUBJECTS.reduce((s, x) => s + x.conservative, 0) +
    LOCKED_SUBJECTS.reduce(
      (s, x) => s + (x.conservative ?? x.current ?? 0),
      0
    );

  const totalOptimistic =
    SUBJECTS.reduce((s, x) => s + x.optimistic, 0) +
    LOCKED_SUBJECTS.reduce(
      (s, x) => s + (x.optimistic ?? x.current ?? 0),
      0
    );

  const totalConsGain = totalConservative - totalCurrent;
  const totalOptGain = totalOptimistic - totalCurrent;

  return (
    <div className="space-y-5 pb-4">
      {/* 块 1：倒计时（最顶部）*/}
      <Card className="bg-warm-100/60 border-warm-200">
        <div className="flex items-center justify-between gap-3">
          <div>
            <div className="text-xs text-ink-500">距离中考</div>
            <div className="font-num text-3xl md:text-4xl font-semibold text-ink-900 mt-0.5 leading-none">
              {days !== null ? days : "—"}{" "}
              <span className="text-base md:text-lg font-medium text-ink-700">
                天
              </span>
            </div>
          </div>
          <div className="text-right text-xs md:text-sm text-ink-700 max-w-[220px] leading-relaxed">
            还有时间。不用学完所有内容，只盯最容易拿分的技巧。
          </div>
        </div>
      </Card>

      {/* 块 2：目标卡 + 分科明细表 */}
      <div className="rounded-card border border-primary-200 bg-gradient-to-br from-primary-50 to-leaf-400/10 p-5 md:p-6 shadow-soft">
        <div className="flex items-center gap-2 text-primary-700 text-xs font-medium mb-2">
          <span className="w-1.5 h-1.5 rounded-full bg-leaf-500" />
          烽峻提分技巧库
        </div>
        <h1 className="text-lg md:text-xl font-semibold text-ink-900 leading-snug">
          目标不是考 600，是把能拿的分捡回来。
        </h1>

        {/* 三大目标 */}
        <div className="mt-4 grid grid-cols-3 gap-2 text-center">
          <div className="rounded-chip bg-paper-50/70 py-2.5 px-2 border border-ink-100/50">
            <div className="text-[10px] md:text-[11px] text-ink-500 mb-0.5">
              当前估算
            </div>
            <div className="font-num text-xl md:text-2xl font-semibold text-ink-900">
              {currentScore}
            </div>
          </div>
          <div className="rounded-chip bg-primary-50/70 py-2.5 px-2 border border-primary-200">
            <div className="text-[10px] md:text-[11px] text-primary-700 mb-0.5">
              保守目标
            </div>
            <div className="font-num text-xl md:text-2xl font-semibold text-primary-600">
              {targetScore}
            </div>
          </div>
          <div className="rounded-chip bg-leaf-100/40 py-2.5 px-2 border border-leaf-300/50">
            <div className="text-[10px] md:text-[11px] text-leaf-600 mb-0.5">
              乐观目标
            </div>
            <div className="font-num text-xl md:text-2xl font-semibold text-leaf-600">
              {totalOptimistic}
            </div>
          </div>
        </div>

        <div className="mt-3 text-center text-xs md:text-sm text-ink-700">
          保守还差{" "}
          <span className="font-num font-semibold text-warm-400">{remain}</span>{" "}
          分 · 乐观可冲{" "}
          <span className="font-num font-semibold text-leaf-600">
            +{totalOptGain}
          </span>{" "}
          分
        </div>

        {/* 分科明细表 */}
        <div className="mt-5 overflow-x-auto -mx-2 md:mx-0">
          <table className="w-full text-xs md:text-sm border-separate border-spacing-y-1 min-w-[500px]">
            <thead>
              <tr className="text-[10px] md:text-[11px] text-ink-500">
                <th className="text-left font-normal pl-2 pb-1">科目</th>
                <th className="font-normal pb-1">满分</th>
                <th className="font-normal pb-1">现在</th>
                <th className="font-normal pb-1 text-primary-700">保守目标</th>
                <th className="font-normal pb-1 text-leaf-600">乐观目标</th>
                <th className="font-normal pb-1 text-primary-700">保守提分</th>
                <th className="font-normal pb-1 text-leaf-600">乐观提分</th>
              </tr>
            </thead>
            <tbody>
              {SUBJECTS.map((s) => {
                const optGain = s.optimistic - s.current;
                return (
                  <tr key={s.key} className="bg-paper-50/60">
                    <td
                      className="text-left py-1.5 pl-2 text-ink-900 font-medium rounded-l"
                      style={{ borderLeft: `3px solid ${s.color}` }}
                    >
                      {s.name}
                    </td>
                    <td className="text-center text-ink-500 font-num">
                      {s.fullScore}
                    </td>
                    <td className="text-center text-ink-700 font-num font-semibold">
                      {s.current}
                    </td>
                    <td className="text-center text-primary-600 font-num font-semibold">
                      {s.conservative}
                    </td>
                    <td className="text-center text-leaf-600 font-num">
                      {s.optimistic}
                    </td>
                    <td className="text-center text-primary-600 font-num font-medium">
                      +{s.conservativeGain}
                    </td>
                    <td className="text-center text-leaf-600 font-num font-medium rounded-r">
                      +{optGain}
                    </td>
                  </tr>
                );
              })}
              {LOCKED_SUBJECTS.map((s) => {
                const isLocked = s.key === "bioGeo";
                const cur = s.current;
                const cons = s.conservative;
                const opt = s.optimistic;
                return (
                  <tr key={s.key} className="bg-ink-100/30">
                    <td
                      className="text-left py-1.5 pl-2 text-ink-700 rounded-l"
                      style={{ borderLeft: "3px solid #C9CFD8" }}
                    >
                      {s.name}
                    </td>
                    <td className="text-center text-ink-500 font-num">
                      {s.fullScore}
                    </td>
                    <td className="text-center text-ink-700 font-num">
                      {cur ?? "—"}
                    </td>
                    <td className="text-center text-ink-500 font-num">
                      {cons ?? (isLocked ? cur : "—")}
                    </td>
                    <td className="text-center text-ink-500 font-num">
                      {opt ?? (isLocked ? cur : "—")}
                    </td>
                    <td className="text-center text-ink-500 text-[11px] md:text-xs">
                      {isLocked
                        ? "已考完"
                        : cons != null && cur != null
                        ? cons - cur === 0
                          ? "已满分"
                          : `+${cons - cur}`
                        : "待确认"}
                    </td>
                    <td className="text-center text-ink-500 text-[11px] md:text-xs rounded-r">
                      {isLocked
                        ? "已考完"
                        : opt != null && cur != null
                        ? opt - cur === 0
                          ? "已满分"
                          : `+${opt - cur}`
                        : "待确认"}
                    </td>
                  </tr>
                );
              })}
              {/* 合计 */}
              <tr className="bg-primary-50/50 border-t border-primary-200">
                <td
                  className="text-left py-1.5 pl-2 text-ink-900 font-semibold rounded-l"
                  style={{ borderLeft: "3px solid #5BC0BE" }}
                >
                  合计
                </td>
                <td className="text-center text-ink-700 font-num font-semibold">
                  {totalFull}
                </td>
                <td className="text-center text-ink-900 font-num font-semibold">
                  {totalCurrent}
                </td>
                <td className="text-center text-primary-700 font-num font-semibold">
                  {totalConservative}
                </td>
                <td className="text-center text-leaf-600 font-num font-semibold">
                  {totalOptimistic}
                </td>
                <td className="text-center text-primary-700 font-num font-semibold">
                  +{totalConsGain}
                </td>
                <td className="text-center text-leaf-600 font-num font-semibold rounded-r">
                  +{totalOptGain}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mt-2 text-[11px] text-ink-500 leading-relaxed">
          满分合计 {totalFull}（含地生体育）。当前估算可在「进度」页手动调整。
        </div>
      </div>

      {/* 块 3：3+2 升学报告入口 */}
      <Link
        href="/zhongkao-32-report"
        className="group block rounded-card bg-paper-50 border border-primary-200 shadow-soft p-5 tap-shrink hover:shadow-lift transition"
      >
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-start gap-3">
            <div className="mt-0.5 grid h-10 w-10 shrink-0 place-items-center rounded-card bg-primary-50 text-primary-700">
              <FileText size={20} />
            </div>
            <div>
              <div className="text-xs font-medium text-primary-700">
                完整升学报考规划
              </div>
              <h2 className="mt-1 text-base font-semibold text-ink-900">
                大连中考 3+2 升学报考规划方案
              </h2>
              <p className="mt-1 text-xs md:text-sm leading-relaxed text-ink-700">
                V4 · 2026 招生简章对齐版 · 含分数定位、专业清单、志愿组合与电话确认清单
              </p>
            </div>
          </div>
          <ChevronRight
            size={18}
            className="mt-1 shrink-0 text-ink-300 group-hover:text-primary-700 transition-colors"
          />
        </div>
      </Link>

      {/* 块 4：分科技巧入口 */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-base font-semibold text-ink-900">分科提分技巧</h2>
          <span className="text-xs text-ink-500">点进去看每科怎么捡分</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {SUBJECTS.map((s) => {
            const total = TECHNIQUE_COUNT_BY_SUBJECT[s.key];
            // 计算该科已掌握 / 入门数
            let mastered = 0;
            let learning = 0;
            for (const techId in techStates) {
              const state = techStates[techId];
              if (
                state?.status === "mastered" &&
                techId.startsWith(getPrefix(s.key))
              ) {
                mastered++;
              } else if (
                state?.status === "learning" &&
                techId.startsWith(getPrefix(s.key))
              ) {
                learning++;
              }
            }
            return (
              <Link
                key={s.key}
                href={`/subjects/${s.key}`}
                className="group rounded-card bg-paper-50 border border-ink-100/60 shadow-soft p-4 tap-shrink hover:shadow-lift transition"
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <span
                      className="inline-block w-1.5 h-6 rounded"
                      style={{ background: s.color }}
                    />
                    <span className="font-semibold text-ink-900">{s.name}</span>
                  </div>
                  <ChevronRight
                    size={16}
                    className="text-ink-300 group-hover:text-ink-700 transition-colors"
                  />
                </div>
                <div className="flex items-baseline gap-1.5 mb-1">
                  <span className="font-num text-lg font-semibold text-ink-900">
                    {s.current}
                  </span>
                  <span className="text-ink-500 text-sm">→</span>
                  <span
                    className="font-num text-lg font-semibold"
                    style={{ color: s.color }}
                  >
                    {s.conservative}
                  </span>
                  <span className="text-xs text-ink-500 ml-auto">
                    先捡 {s.conservativeGain} 分
                  </span>
                </div>
                <div className="text-xs text-ink-500 mt-1">
                  {total} 个技巧
                  {mastered > 0 && (
                    <span className="text-leaf-600 ml-2">已掌握 {mastered}</span>
                  )}
                  {learning > 0 && (
                    <span className="text-warm-400 ml-2">入门 {learning}</span>
                  )}
                </div>
              </Link>
            );
          })}
        </div>
      </div>

      {/* 块 5：地生 + 体育 状态条 */}
      <Card className="bg-ink-100/30 border-ink-100">
        <div className="text-xs text-ink-500 leading-relaxed">
          地理 + 生物 已考完（68/80）· 体育已满分（60/60）。这两科不在技巧库里。
        </div>
      </Card>

      {/* 内容溯源 */}
      <div className="pt-1 pb-2 text-center">
        <Link
          href="/about"
          className="inline-flex items-center gap-1 text-xs text-ink-500 hover:text-primary-600 tap-shrink"
        >
          <Info size={12} />
          内容基于辽宁省 2024 起统一命题样卷 + 2023-2025 真题 · 查看溯源
        </Link>
      </div>
    </div>
  );
}

function getPrefix(key: string): string {
  return (
    {
      chemistry: "chem-",
      politicsHistory: "ph-",
      english: "en-",
      chinese: "cn-",
      math: "math-",
      physics: "phy-",
    }[key] ?? ""
  );
}
