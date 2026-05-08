import Link from "next/link";
import { ArrowLeft, ChevronRight } from "lucide-react";
import { LOCKED_SUBJECTS, SUBJECTS } from "@/data/subjects";
import { TECHNIQUE_COUNT_BY_SUBJECT } from "@/data/techniques";
import { Card } from "@/components/Card";

export default function SubjectsIndexPage() {
  return (
    <div className="space-y-4">
      <Link
        href="/"
        className="text-ink-500 hover:text-ink-900 inline-flex items-center gap-1 tap-shrink text-sm"
      >
        <ArrowLeft size={16} /> 首页
      </Link>

      <Card>
        <h1 className="text-lg font-semibold text-ink-900">分科提分技巧</h1>
        <p className="text-sm text-ink-500 mt-1 leading-relaxed">
          每科一组技巧。每个技巧都从历年真题溯源，配 9 段结构（一句话 / 真题来源 / 适合原因 / 步骤 / 示例 / 训练 / 测试 / 卡住怎么办 / 教练）。
        </p>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {SUBJECTS.map((s) => (
          <Link
            key={s.key}
            href={`/subjects/${s.key}`}
            className="group rounded-card bg-paper-50 border border-ink-100/60 shadow-soft p-4 tap-shrink hover:shadow-lift transition"
          >
            <div className="flex items-center justify-between mb-1.5">
              <div className="flex items-center gap-2">
                <span
                  className="inline-block w-1.5 h-6 rounded"
                  style={{ background: s.color }}
                />
                <span className="font-semibold text-ink-900">{s.name}</span>
              </div>
              <ChevronRight size={16} className="text-ink-300 group-hover:text-ink-700" />
            </div>
            <div className="flex items-baseline gap-1.5 mt-1">
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
                先捡 {s.conservativeGain} 分 · {TECHNIQUE_COUNT_BY_SUBJECT[s.key]} 个技巧
              </span>
            </div>
            <p className="text-xs text-ink-500 mt-1.5 leading-relaxed line-clamp-2">
              {s.oneLine}
            </p>
          </Link>
        ))}

        {LOCKED_SUBJECTS.map((s) => (
          <div
            key={s.key}
            className="rounded-card bg-ink-100/40 border border-ink-100/60 p-4"
          >
            <div className="flex items-center justify-between">
              <span className="font-semibold text-ink-700">{s.name}</span>
              <span className="text-xs text-ink-500">
                {s.key === "bioGeo" ? "已考完" : "待确认"}
              </span>
            </div>
            <p className="text-xs text-ink-500 mt-1.5 leading-relaxed">{s.note}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
