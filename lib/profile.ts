/**
 * 烽峻的工具站。这是他一个人的私密空间，不出现"舅舅"或任何外部观察者叙事。
 * 称呼名字、给具体反馈、不硬夸、不打鸡血。
 */

export const STUDENT_NAME = "烽峻";

export function greeting(name: string = STUDENT_NAME): string {
  const h = new Date().getHours();
  if (h < 6) return `${name}，这么晚还醒着`;
  if (h < 11) return `早，${name}`;
  if (h < 13) return `中午好，${name}`;
  if (h < 18) return `下午好，${name}`;
  if (h < 22) return `晚上好，${name}`;
  return `${name}，早点休息`;
}
