"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { ArrowLeft, Download, Upload, RotateCcw, Check } from "lucide-react";
import { useStudent } from "@/store/useStudent";
import { useTechniques } from "@/store/useTechniques";
import {
  TECHNIQUES,
  getTechniquesBySubject,
} from "@/data/techniques";
import { SUBJECTS } from "@/data/subjects";
import { Card } from "@/components/Card";
import { MasteryBadge } from "@/components/MasteryBadge";
import { SubjectKey, MasteryStatus } from "@/lib/types";

export default function ProgressPage() {
  const techStates = useTechniques((s) => s.states);
  const { currentScore, targetScore } = useStudent();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const stats = useMemo(() => {
    if (!mounted) return null;

    // 全部技巧总数 + 状态分类
    const total = TECHNIQUES.length;
    let mastered = 0;
    let learning = 0;
    let unstarted = 0;

    // 各科聚合
    const bySubject = SUBJECTS.map((s) => {
      const techs = getTechniquesBySubject(s.key);
      let mast = 0;
      let learn = 0;
      let estGain = 0;
      for (const t of techs) {
        const status: MasteryStatus =
          techStates[t.id]?.status ?? "unstarted";
        if (status === "mastered") {
          mast++;
          mastered++;
          // 估算已捡到的分（简化：每个 mastered 技巧贡献该技巧 estGain 范围的最低值）
          const m = t.estGain.match(/\+(\d+)/);
          if (m) estGain += parseInt(m[1], 10);
        } else if (status === "learning") {
          learn++;
          learning++;
          // 入门状态贡献一半
          const m = t.estGain.match(/\+(\d+)/);
          if (m) estGain += parseInt(m[1], 10) / 2;
        } else {
          unstarted++;
        }
      }
      return {
        ...s,
        techCount: techs.length,
        mastered: mast,
        learning: learn,
        estGain: Math.round(estGain),
      };
    });

    const totalEstGain = bySubject.reduce((sum, s) => sum + s.estGain, 0);

    return {
      total,
      mastered,
      learning,
      unstarted,
      bySubject,
      totalEstGain,
    };
  }, [mounted, techStates]);

  function exportJson() {
    const payload = {
      techniques: techStates,
      student: { currentScore, targetScore },
      exportedAt: new Date().toISOString(),
    };
    const blob = new Blob([JSON.stringify(payload, null, 2)], {
      type: "application/json",
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `score-map-410-${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    URL.revokeObjectURL(url);
  }

  function importJson(file: File) {
    const reader = new FileReader();
    reader.onload = () => {
      try {
        const data = JSON.parse(String(reader.result));
        if (data.techniques) {
          localStorage.setItem(
            "score-map-410:techniques",
            JSON.stringify({ state: { states: data.techniques }, version: 0 })
          );
        }
        if (data.student) {
          localStorage.setItem(
            "score-map-410:student",
            JSON.stringify({ state: data.student, version: 0 })
          );
        }
        location.reload();
      } catch {
        alert("导入失败：文件格式不对。");
      }
    };
    reader.readAsText(file);
  }

  return (
    <div className="space-y-4">
      <Link
        href="/"
        className="text-ink-500 hover:text-ink-900 inline-flex items-center gap-1 tap-shrink text-sm"
      >
        <ArrowLeft size={16} /> 首页
      </Link>

      <Card>
        <h1 className="text-lg font-semibold text-ink-900">进度</h1>
        <p className="text-sm text-ink-500 mt-1 leading-relaxed">
          只记技巧掌握度。掌握一个技巧，就更接近一段实分。
        </p>
      </Card>

      {stats && (
        <>
          {/* 总览：估算已捡到的分 */}
          <Card>
            <div className="text-xs text-ink-500">估算已捡到的分</div>
            <div className="mt-1 flex items-baseline gap-2">
              <span className="font-num text-3xl font-semibold text-leaf-600">
                +{stats.totalEstGain}
              </span>
              <span className="text-sm text-ink-500">/ 75 分目标差</span>
            </div>
            <p className="text-xs text-ink-500 mt-2 leading-relaxed">
              规则：每"掌握"1 个技巧 = 该技巧的 estGain 全部计入；每"入门"1 个 = 计入一半。考前真考分会偏离这个估算，但方向对。
            </p>
            <div className="mt-3 grid grid-cols-3 gap-3 text-center">
              <Stat value={String(stats.mastered)} label="已掌握" color="#4FB87B" />
              <Stat value={String(stats.learning)} label="入门中" color="#F4A261" />
              <Stat value={String(stats.unstarted)} label="未学" color="#A4ADB8" />
            </div>
          </Card>

          {/* 各科聚合 */}
          <div>
            <h2 className="text-base font-semibold text-ink-900 mb-2">各科技巧掌握</h2>
            <div className="space-y-2">
              {stats.bySubject.map((s) => (
                <Link
                  key={s.key}
                  href={`/subjects/${s.key}`}
                  className="block rounded-card bg-paper-50 border border-ink-100/60 shadow-soft p-3 tap-shrink hover:shadow-lift"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span
                        className="inline-block w-1.5 h-5 rounded"
                        style={{ background: s.color }}
                      />
                      <span className="font-medium text-ink-900">{s.name}</span>
                    </div>
                    <span className="font-num text-sm font-medium text-leaf-600">
                      +{s.estGain} / {s.conservativeGain}
                    </span>
                  </div>
                  <div className="mt-2 h-2 rounded-full bg-ink-100 overflow-hidden">
                    <div
                      className="h-full transition-all"
                      style={{
                        background: s.color,
                        width: `${Math.min(100, (s.estGain / s.conservativeGain) * 100)}%`,
                      }}
                    />
                  </div>
                  <div className="flex items-center gap-3 text-[11px] text-ink-500 mt-1.5">
                    <span>共 {s.techCount} 技巧</span>
                    {s.mastered > 0 && (
                      <span className="text-leaf-600">已掌握 {s.mastered}</span>
                    )}
                    {s.learning > 0 && (
                      <span className="text-warm-400">入门 {s.learning}</span>
                    )}
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* 备份 */}
          <Card>
            <h2 className="text-sm font-semibold text-ink-900 mb-2">备份</h2>
            <p className="text-xs text-ink-500 mb-3 leading-relaxed">
              所有数据保存在你这台浏览器里。换设备前可以导出。
            </p>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={exportJson}
                className="inline-flex items-center gap-1.5 bg-primary-500 text-white rounded-chip px-3 py-2 text-xs tap-shrink"
              >
                <Download size={12} /> 导出 JSON
              </button>
              <label className="inline-flex items-center gap-1.5 bg-ink-100/60 text-ink-700 rounded-chip px-3 py-2 text-xs tap-shrink cursor-pointer">
                <Upload size={12} /> 导入
                <input
                  type="file"
                  accept="application/json"
                  className="hidden"
                  onChange={(e) => {
                    const f = e.target.files?.[0];
                    if (f) importJson(f);
                  }}
                />
              </label>
            </div>
          </Card>
        </>
      )}
    </div>
  );
}

function Stat({ value, label, color }: { value: string; label: string; color: string }) {
  return (
    <div>
      <div className="font-num text-2xl font-semibold" style={{ color }}>
        {value}
      </div>
      <div className="text-[11px] text-ink-500 mt-1">{label}</div>
    </div>
  );
}
