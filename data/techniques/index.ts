import { Technique, SubjectKey } from "@/lib/types";
import { CHEMISTRY_TECHNIQUES } from "./chemistry";
import { POLITICS_HISTORY_TECHNIQUES } from "./politicsHistory";
import { ENGLISH_TECHNIQUES } from "./english";
import { CHINESE_TECHNIQUES } from "./chinese";
import { MATH_TECHNIQUES } from "./math";
import { PHYSICS_TECHNIQUES } from "./physics";

export const TECHNIQUES: Technique[] = [
  ...CHEMISTRY_TECHNIQUES,
  ...POLITICS_HISTORY_TECHNIQUES,
  ...ENGLISH_TECHNIQUES,
  ...CHINESE_TECHNIQUES,
  ...MATH_TECHNIQUES,
  ...PHYSICS_TECHNIQUES,
];

export function getTechnique(id: string): Technique | undefined {
  return TECHNIQUES.find((t) => t.id === id);
}

export function getTechniquesBySubject(subject: SubjectKey): Technique[] {
  return TECHNIQUES.filter((t) => t.subject === subject).sort(
    (a, b) => a.priority - b.priority
  );
}

/**
 * 跨所有技巧查找训练题或示例题。
 * 用于教练抽屉显示当前题目上下文。
 */
export function findTrainingQuestion(qId: string) {
  for (const t of TECHNIQUES) {
    if (t.example.id === qId) return { technique: t, question: t.example };
    const q = t.trainingQuestions.find((q) => q.id === qId);
    if (q) return { technique: t, question: q };
  }
  return null;
}

export const TECHNIQUE_COUNT_BY_SUBJECT: Record<SubjectKey, number> = {
  chemistry: CHEMISTRY_TECHNIQUES.length,
  politicsHistory: POLITICS_HISTORY_TECHNIQUES.length,
  english: ENGLISH_TECHNIQUES.length,
  chinese: CHINESE_TECHNIQUES.length,
  math: MATH_TECHNIQUES.length,
  physics: PHYSICS_TECHNIQUES.length,
};
