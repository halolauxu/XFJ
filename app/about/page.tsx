import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { Card, SectionTitle } from "@/components/Card";

export default function AboutPage() {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <Link
          href="/"
          className="text-ink-500 hover:text-ink-900 inline-flex items-center gap-1 tap-shrink"
        >
          <ArrowLeft size={16} /> 返回
        </Link>
      </div>

      <Card>
        <h1 className="text-lg font-semibold text-ink-900">内容溯源 & 边界说明</h1>
        <p className="text-sm text-ink-500 mt-1 leading-relaxed">
          这个网站的所有内容（保命卡、任务、学科地图、教练 prompt）都基于真实研究，
          不是泛通识。这一页讲清楚信息从哪来、什么是确定的、什么是估算、什么是待确认。
        </p>
      </Card>

      <Card>
        <SectionTitle>核心信息源</SectionTitle>
        <ul className="space-y-2 text-sm text-ink-700 leading-relaxed">
          <li>
            ① <strong>辽宁省 2024 起统一命题样卷</strong>（大连卷 = 辽宁省卷，与沈阳/抚顺等同源）
          </li>
          <li>② 2023、2024、2025 年大连 / 辽宁中考真题（七彩学科网、中考网、教习网公开）</li>
          <li>③ 大连各区一模二模卷（甘井子、西岗、中山等公开卷）</li>
          <li>④ 大连市教育局、辽宁省教育考试院公开文件</li>
          <li>⑤ 教研机构与名师公开解析（中考网、知乎专栏、本地宝、澎湃新闻）</li>
        </ul>
        <p className="text-xs text-ink-500 mt-3">
          完整研究报告（每科一份）放在项目仓库 <code className="bg-ink-100 px-1 rounded">/research</code> 目录。
        </p>
      </Card>

      <Card>
        <SectionTitle>已确认事实（基于公开资料交叉核对）</SectionTitle>
        <ul className="space-y-2 text-sm text-ink-700 leading-relaxed">
          <li>✓ 大连 2026 中考时间：6 月 21-23 日</li>
          <li>✓ 总分 790 分；化学 60 / 物理 90 / 道法历史 140 / 英语 120 / 语文 120 / 数学 120</li>
          <li>✓ 化学 + 物理合卷（6/22 上午 9:00-11:30 共 150 分钟）</li>
          <li>✓ 道法 + 历史合卷开卷（6/23 上午 9:00-11:30 共 150 分钟）</li>
          <li>✓ 各科卷面结构（题型 / 题数 / 分值）已按辽宁省样卷+真题确认</li>
          <li>✓ 化学实验操作 4 项目录：过滤浑浊水 / CO₂ 制取 / 配 5%NaCl / 酸碱性质</li>
          <li>✓ 大连英语教材 = <strong>外研版</strong>（与省内多数城市的人教版不同）</li>
          <li>
            ✓ 高频考点示例：化学'空气成分''CO₂ 制取''过滤'连续 5+ 年命中；道法'国家安全'
            '24 字核心价值观''16 字依法治国'近 3 年命中 3 次；语文'沉舟侧畔''何当共剪'2023 大连命中
          </li>
          <li>✓ 2024 大连英语作文真题：暑假飞机模型计划信</li>
          <li>✓ 语文作文 2024 起从 70 分降到 50 分</li>
        </ul>
      </Card>

      <Card>
        <SectionTitle>合理估算（不是官方公开统计）</SectionTitle>
        <ul className="space-y-2 text-sm text-ink-700 leading-relaxed">
          <li>○ 各章节具体分值占比（来自常见复习经验+样卷分布的合理推断）</li>
          <li>○ 近 3 年关键词命中次数（基于真题与备战题源解密资料的估测，不是官方逐年统计）</li>
          <li>○ 应用大题 11-14 题各自分值（按 40 分均分推断，真题印刷件未单列各小题分值）</li>
          <li>○ Top 12 物理高频考点（基于命题趋势+课标的合理推断，不是大连官方统计）</li>
          <li>○ 教材页码（部编版常用范围估值，**学生贴标签前必须自己核对**）</li>
        </ul>
        <p className="text-xs text-warm-400 mt-3">
          这些估算用于方向指导，不当作绝对权威。建议用最近 3 次月考、一模、二模做最终校准。
        </p>
      </Card>

      <Card>
        <SectionTitle>待确认（建议向班主任 / 教研室核对）</SectionTitle>
        <ul className="space-y-2 text-sm text-ink-700 leading-relaxed">
          <li>· 大连市是否单独发"实验操作考试评分细则"——未查到大连专属版，按辽宁省统一标准</li>
          <li>· 2026 卷是否在 2025 基础上再调整——目前政策文件未提结构变化，按 2025 延续</li>
          <li>· 大连物理实验操作完整项目目录——公开渠道部分可见，建议向学校索要纸质版</li>
          <li>· 2025 大连一模二模英语作文具体题目——多区一模存在但作文原题未找到电子版</li>
          <li>· 2026 是否新增题型（如整本书阅读、跨学科综合）——辽宁省考试院尚未公布 2026 考试说明</li>
          <li>· 听力 20 分的"3 节具体题数"——省样卷只给约 5+5+5，精确数以 2026 准考证背面或考试说明为准</li>
        </ul>
      </Card>

      <Card>
        <SectionTitle>使用建议</SectionTitle>
        <div className="text-sm text-ink-700 leading-relaxed space-y-2">
          <p>1. <strong>页码必自查</strong>：报告里给的页码是范围估值，学生贴标签前自己翻一次书核对。</p>
          <p>2. <strong>真题为准</strong>：2025 一模二模、近 3 年中考真题最权威，遇到冲突以真题为准。</p>
          <p>3. <strong>先抢基础</strong>：所有任务和保命卡都按"性价比最高"排序。学生 8/18/31 这种基础分，
            先把 P0 / P1 全做完再考虑往上爬。</p>
          <p>4. <strong>反馈循环</strong>：发现内容不对、和学校讲的不一样、或者真题里没考过——记下来，
            下次维护时改进。在 README 里附上反馈渠道。</p>
        </div>
      </Card>

      <Card>
        <SectionTitle>关于 AI 教练（DeepSeek）</SectionTitle>
        <div className="text-sm text-ink-700 leading-relaxed space-y-2">
          <p>教练的 system prompt 已经注入：大连卷结构、各科真题考点、学生当前分数、不直接给答案的铁律。</p>
          <p>
            <strong>它不会代写作文、不会直接给选项。</strong>它会先反问让学生思考一步。
            如果学生明显在想绕过去要答案（"直接告诉我答案 / 帮我写完作文" 等），
            后端会注入额外提醒强化铁律。
          </p>
          <p>
            <strong>API key 仅在后端环境变量。</strong>前端只见 <code className="bg-ink-100 px-1 rounded">/api/coach/chat</code>，
            不会暴露 key。
          </p>
        </div>
      </Card>

      <Card>
        <SectionTitle>反馈与改进</SectionTitle>
        <p className="text-sm text-ink-700 leading-relaxed">
          这个网站是为一个具体的孩子定做的。如果用过程中发现内容不对、和学校讲的不一样、
          想加题型——直接告诉开发者，下一版改。研究报告全部存在 <code className="bg-ink-100 px-1 rounded">/research</code> 目录里，
          溯源链路可查。
        </p>
      </Card>
    </div>
  );
}
