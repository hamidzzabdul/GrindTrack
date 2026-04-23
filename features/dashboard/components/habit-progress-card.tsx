import { cn } from "@/lib/utils/cn";

type HabitProgressCardProps = {
  label: string;
  current: number;
  target: number;
  unit: string;
  accent?: "green" | "neutral";
};

export function HabitProgressCard({
  label,
  current,
  target,
  unit,
  accent = "green",
}: HabitProgressCardProps) {
  const safeTarget = target <= 0 ? 1 : target;
  const percentage = Math.min(Math.round((current / safeTarget) * 100), 100);

  return (
    <div className="rounded-2xl border border-white/10 bg-black/40 p-4">
      <div className="flex items-start justify-between gap-3">
        <p className="text-sm text-zinc-300">{label}</p>
        <span className="text-xs text-zinc-500">{percentage}%</span>
      </div>

      <p
        className={cn(
          "mt-3 text-2xl font-bold",
          accent === "green" ? "text-emerald-400" : "text-white",
        )}
      >
        {current}
        <span className="ml-1 text-sm font-medium text-zinc-500">
          / {target} {unit}
        </span>
      </p>

      <div className="mt-3 h-2 rounded-full bg-white/5">
        <div
          className={cn(
            "h-2 rounded-full transition-all duration-300",
            accent === "green" ? "bg-emerald-500" : "bg-white/70",
          )}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}
