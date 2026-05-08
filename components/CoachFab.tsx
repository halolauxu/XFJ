"use client";

import { useCoach } from "@/store/useCoach";
import { Sparkles } from "lucide-react";

export function CoachFab() {
  const open = useCoach((s) => s.open);
  const openWith = useCoach((s) => s.openWith);
  if (open) return null;
  return (
    <button
      onClick={() =>
        openWith({
          title: "提分教练",
          initialPrompt:
            "烽峻刚打开教练。先主动问他一个具体问题：他现在在哪一科卡住了？或者他想攻哪个具体题型？不要说'你想问什么'。",
        })
      }
      className="fixed right-4 bottom-20 md:bottom-6 z-40 inline-flex items-center gap-1.5 bg-primary-500 hover:bg-primary-600 text-white shadow-lift rounded-full pl-3 pr-4 py-2.5 tap-shrink"
      aria-label="叫教练"
    >
      <Sparkles size={16} strokeWidth={2.4} />
      <span className="text-sm font-medium">叫教练</span>
    </button>
  );
}
