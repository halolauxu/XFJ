import { readFile } from "node:fs/promises";
import path from "node:path";

const REPORT_FILE = "dalian-zhongkao-32-report-v4.html";

export const runtime = "nodejs";

export async function GET() {
  const reportPath = path.join(process.cwd(), "public", "reports", REPORT_FILE);
  const html = await readFile(reportPath, "utf8");

  return new Response(html, {
    headers: {
      "Content-Type": "text/html; charset=utf-8",
      "Cache-Control": "public, max-age=300, stale-while-revalidate=3600",
    },
  });
}
