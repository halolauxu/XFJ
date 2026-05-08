export type SubjectKey =
  | "chemistry"
  | "politicsHistory"
  | "english"
  | "chinese"
  | "math"
  | "physics";

export type LockedSubjectKey = "bioGeo" | "pe";
export type AllSubjectKey = SubjectKey | LockedSubjectKey;

export const SUBJECT_NAMES: Record<SubjectKey, string> = {
  chemistry: "化学",
  politicsHistory: "道法 + 历史",
  english: "英语",
  chinese: "语文",
  math: "数学",
  physics: "物理",
};

export interface SubjectMeta {
  key: SubjectKey;
  name: string;
  shortName: string;
  current: number;
  conservative: number;
  optimistic: number;
  fullScore: number;
  conservativeGain: number;
  oneLine: string;
  dontDo: string[];
  /** 这个学科目前只关注的几件事（保留字段，技巧页用） */
  todayOnly?: string[];
  examTactics: string[];
  color: string;
}

export interface LockedSubjectMeta {
  key: LockedSubjectKey;
  name: string;
  current: number | null;
  fullScore: number;
  note: string;
  conservative?: number;
  optimistic?: number;
}

// ============== 技巧库（产品核心实体）==============

export type SourceCitationKind = "real" | "placeholder";

export interface SourceCitation {
  /** real = 已有真题溯源；placeholder = 待补 */
  kind: SourceCitationKind;
  /** 年份（real 必填） */
  year?: number;
  /** 来源地区/卷别 */
  region?: string;
  /** 卷别：中考真题/一模/二模/名师押题 */
  paper?: string;
  /** 题号：Q1 / 第 16 题第 2 小问 */
  qno?: string;
  /** 简短描述（命中考点） */
  topic?: string;
  /** 来源 URL */
  url?: string;
  /** 待补时的备注 */
  note?: string;
}

/** 训练题来源类型 — 强制三选一 */
export type TrainingQuestionSource = "real" | "adapted" | "predicted";

export interface TrainingQuestion {
  id: string;
  /** real = 历年真题（必须有 citation）；adapted = 真题改编（必须有 basedOn）；predicted = AI 预测题 */
  source: TrainingQuestionSource;
  /** 当 source=real 必填 */
  citation?: SourceCitation;
  /** 当 source=adapted 必填 */
  basedOn?: SourceCitation;
  stem: string;
  stemImageDesc?: string;
  options?: { key: string; text: string }[];
  answer: string;
  /** AI 预测题必填（≤ 1 句） */
  whyFitsStudent?: string;
  hint1?: string;
  hint2?: string;
  /** AI 预测题必填 */
  trap?: string;
  /** 解析（为什么对） */
  whyCorrect?: string;
  /** 错项原因（选择题） */
  whyWrong?: Record<string, string>;
}

/** 卡点类型 */
export type BlockerType =
  | "cant_read"
  | "no_start"
  | "cant_memorize"
  | "too_many_wrong"
  | "annoyed"
  | "too_hard";

export const BLOCKER_LABEL: Record<BlockerType, string> = {
  cant_read: "看不懂题",
  no_start: "不知道第一步",
  cant_memorize: "背不下来",
  too_many_wrong: "做错太多",
  annoyed: "太烦了，不想做",
  too_hard: "太难了，想跳过",
};

/** 掌握度 3 态 */
export type MasteryStatus = "unstarted" | "learning" | "mastered";

export const MASTERY_LABEL: Record<MasteryStatus, string> = {
  unstarted: "未学",
  learning: "入门",
  mastered: "掌握",
};

/** 一个技巧卡 — 9 段结构 */
export interface Technique {
  id: string;
  subject: SubjectKey;
  /** 标题 */
  title: string;
  /** 对应中考题型 */
  examType: string;
  /** 预计可提分 */
  estGain: string;
  /** P0 = 必抢，P1 = 性价比高，P2 = 有余力再上 */
  priority: 0 | 1 | 2;

  /** 段 1：技巧一句话（≤ 30 字） */
  oneLiner: string;
  /** 段 2：真题溯源（≥ 1 条；若全为 placeholder，UI 标"待补"） */
  sourceTrace: SourceCitation[];
  /** 段 3：为什么适合烽峻（必须引用学生当前分数） */
  whyFits: string;
  /** 段 4：技巧步骤（3-5 步） */
  steps: string[];
  /** 段 5：一道示例题（最简单的那种） */
  example: TrainingQuestion;
  /** 段 6：训练题（分 real/adapted/predicted） */
  trainingQuestions: TrainingQuestion[];
  /** 段 7：掌握测试 */
  masteryTest: {
    description: string;
    passThreshold: string;
    /** 测试题数（由 trainingQuestions 中标 isMasteryTest=true 的题组成） */
    testQuestionIds?: string[];
  };
  /** 段 8：卡住了怎么办 — 针对该技巧的 stuck 提示（不同卡点对应不同响应） */
  stuckResponses: Partial<Record<BlockerType, string>>;
  /** 段 9：DeepSeek 教练 system prompt 增量（注入到全局 prompt 之后） */
  coachPrompt: string;

  /** 训练待补标记 — true 表示训练题区块仅有占位，等真题扫描件补充 */
  trainingPending?: boolean;
  /** 训练待补的具体说明 */
  trainingPendingNote?: string;
}

export interface TechniqueAttempt {
  techniqueId: string;
  /** 训练题 + 测试题的得分记录 */
  questionResults: Record<string, "correct" | "wrong" | "revealed">;
  /** 是否做过示例题 */
  exampleDone: boolean;
  /** 是否查看过技巧步骤 */
  stepsRead: boolean;
  /** 掌握测试通过率 */
  masteryRate?: number;
  /** 当前掌握度 */
  status: MasteryStatus;
  firstAttemptAt: string;
  lastUpdatedAt: string;
}
