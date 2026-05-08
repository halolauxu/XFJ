"use client";

import { MasteryStatus, MASTERY_LABEL } from "@/lib/types";
import { cn } from "@/lib/utils";

const STYLES: Record<MasteryStatus, string> = {
  unstarted: "bg-ink-100 text-ink-500 border-ink-200",
  learning: "bg-warm-100 text-warm-400 border-warm-200",
  mastered: "bg-leaf-400/15 text-leaf-600 border-leaf-400/40",
};

export function MasteryBadge({
  status,
  size = "sm",
}: {
  status: MasteryStatus;
  size?: "xs" | "sm" | "md";
}) {
  const sz = size === "xs" ? "text-[10px] px-1.5 py-0.5" : size === "md" ? "text-sm px-2.5 py-1" : "text-xs px-2 py-0.5";
  return (
    <span className={cn("inline-flex items-center rounded-full border font-medium", STYLES[status], sz)}>
      {MASTERY_LABEL[status]}
    </span>
  );
}
