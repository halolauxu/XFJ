"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BarChart3, FileText, Home, Map } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV = [
  { href: "/", label: "首页", icon: Home },
  { href: "/zhongkao-32-report", label: "3+2报告", icon: FileText },
  { href: "/subjects", label: "分科技巧", icon: Map },
  { href: "/progress", label: "进度", icon: BarChart3 },
];

export function Nav() {
  const pathname = usePathname();
  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);
  return (
    <>
      {/* 桌面顶部导航 */}
      <header className="hidden md:block sticky top-0 z-30 bg-paper/85 backdrop-blur border-b border-ink-100">
        <div className="mx-auto max-w-5xl flex items-center justify-between px-6 py-3">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-card bg-gradient-to-br from-primary-300 to-leaf-500 grid place-items-center text-white font-num font-semibold text-sm">
              烽
            </div>
            <span className="text-ink-900 font-semibold">烽峻提分技巧库</span>
          </Link>
          <nav className="flex items-center gap-2">
            {NAV.map((item) => {
              const Icon = item.icon;
              const active = isActive(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "flex items-center gap-1.5 px-3 py-1.5 rounded-chip text-sm tap-shrink",
                    active
                      ? "bg-primary-100 text-primary-700"
                      : "text-ink-500 hover:text-ink-900 hover:bg-ink-100"
                  )}
                >
                  <Icon size={16} />
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>
      </header>

      {/* 移动端底部导航 */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-30 bg-paper/95 backdrop-blur border-t border-ink-100 safe-bottom">
        <div className="grid grid-cols-4 px-1 pt-1">
          {NAV.map((item) => {
            const Icon = item.icon;
            const active = isActive(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex flex-col items-center justify-center gap-0.5 py-1.5 rounded-chip tap-shrink",
                  active ? "text-primary-600" : "text-ink-500"
                )}
              >
                <Icon size={20} strokeWidth={active ? 2.4 : 1.8} />
                <span className="text-[11px]">{item.label}</span>
              </Link>
            );
          })}
        </div>
      </nav>
    </>
  );
}
