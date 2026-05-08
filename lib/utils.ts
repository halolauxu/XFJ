import { clsx, type ClassValue } from "clsx";
import { EXAM_DATE } from "@/data/subjects";

export function cn(...inputs: ClassValue[]) {
  return clsx(...inputs);
}

export function todayKey(d: Date = new Date()): string {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}

export function daysUntilExam(today: Date = new Date()): number {
  const exam = new Date(EXAM_DATE + "T00:00:00");
  const t = new Date(todayKey(today) + "T00:00:00");
  const diff = Math.round((exam.getTime() - t.getTime()) / (1000 * 60 * 60 * 24));
  return Math.max(0, diff);
}

export function isoNow(): string {
  return new Date().toISOString();
}

export function genId(): string {
  return Math.random().toString(36).slice(2, 10) + Date.now().toString(36).slice(-4);
}
