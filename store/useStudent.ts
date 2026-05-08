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
    { name: "score-map-410:student" }
  )
);
