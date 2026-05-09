"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";
import { DEFAULT_CURRENT, EXAM_DATE, TARGET_SCORE } from "@/data/subjects";

interface StudentState {
  currentScore: number;
  targetScore: number;
  examDate: string;
  setCurrentScore: (n: number) => void;
}

export const useStudent = create<StudentState>()(
  persist(
    (set) => ({
      currentScore: DEFAULT_CURRENT,
      targetScore: TARGET_SCORE,
      examDate: EXAM_DATE,
      setCurrentScore: (n: number) => set({ currentScore: Math.max(0, Math.min(790, n)) }),
    }),
    {
      name: "score-map-410:student",
      // v2: 地生 58→68、体育确认 60、保守目标 410→430、当前估算 335→360
      version: 2,
      migrate: (persistedState, fromVersion) => {
        if (fromVersion < 2) {
          // 旧 localStorage 数据强制刷新到最新口径
          return {
            ...(persistedState as Partial<StudentState>),
            currentScore: DEFAULT_CURRENT,
            targetScore: TARGET_SCORE,
            examDate: EXAM_DATE,
          } as StudentState;
        }
        return persistedState as StudentState;
      },
    }
  )
);
