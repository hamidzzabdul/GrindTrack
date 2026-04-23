import { LucideIcon, TrendingUp, TrendingDown } from "lucide-react";
import { cn } from "@/lib/utils/cn";
import { Panel } from "./panel";

type StatCardProps = {
  title: string;
  value: string;
  icon: LucideIcon;
  hint?: string;
  trend?: "up" | "down" | "neutral";
  className?: string;
};

export function StatCard({
  title,
  value,
  icon: Icon,
  hint,
  trend = "neutral",
  className,
}: StatCardProps) {
  return (
    <Panel
      className={cn(
        "group p-5 transition-all duration-200 hover:border-emerald-500/20 hover:bg-zinc-950",
        className,
      )}
    >
      <div className="flex items-start justify-between">
        <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/10 p-3 text-emerald-400">
          <Icon className="h-5 w-5" />
        </div>

        {trend === "up" ? (
          <div className="flex items-center gap-1 text-xs text-emerald-400">
            <TrendingUp className="h-3.5 w-3.5" />
            Up
          </div>
        ) : null}

        {trend === "down" ? (
          <div className="flex items-center gap-1 text-xs text-red-400">
            <TrendingDown className="h-3.5 w-3.5" />
            Down
          </div>
        ) : null}
      </div>

      <div className="mt-5">
        <p className="text-sm text-zinc-400">{title}</p>
        <h3 className="mt-2 text-3xl font-bold tracking-tight text-white">
          {value}
        </h3>
        {hint ? <p className="mt-2 text-xs text-zinc-500">{hint}</p> : null}
      </div>
    </Panel>
  );
}
