import { cn } from "@/lib/utils/cn";

export type WeeklyBarItem = {
  day: string;
  value: number;
};

type WeeklyBarChartProps = {
  data: WeeklyBarItem[];
};

export function WeeklyBarChart({ data }: WeeklyBarChartProps) {
  return (
    <div className="mt-6 flex h-56 items-end gap-3 rounded-2xl border border-white/10 bg-black/30 p-4">
      {data.map((item) => {
        const safeValue = Math.max(0, Math.min(item.value, 100));
        const isStrong = safeValue >= 70;

        return (
          <div
            key={item.day}
            className="flex flex-1 flex-col items-center gap-2"
          >
            <div
              className={cn(
                "w-full rounded-t-xl transition-all duration-300",
                isStrong ? "bg-emerald-500/80" : "bg-zinc-600",
              )}
              style={{ height: `${Math.max(safeValue * 1.5, 12)}px` }}
            />
            <span className="text-xs text-zinc-500">{item.day}</span>
          </div>
        );
      })}
    </div>
  );
}
