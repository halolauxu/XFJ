import { cn } from "@/lib/utils";
import { ReactNode } from "react";

export function Card({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "rounded-card bg-paper-50 shadow-soft border border-ink-100/60 p-5",
        className
      )}
    >
      {children}
    </div>
  );
}

export function SectionTitle({ children, hint }: { children: ReactNode; hint?: ReactNode }) {
  return (
    <div className="flex items-baseline justify-between mb-3">
      <h2 className="text-base md:text-lg font-semibold text-ink-900">{children}</h2>
      {hint && <span className="text-sm text-ink-500">{hint}</span>}
    </div>
  );
}
