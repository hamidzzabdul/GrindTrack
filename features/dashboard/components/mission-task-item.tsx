import { CheckCircle2, Circle, Clock3 } from "lucide-react";
import { cn } from "@/lib/utils/cn";
import { StatusBadge } from "@/components/shared/status-badge";

export type MissionTaskStatus = "done" | "pending" | "missed";

type MissionTaskItemProps = {
  title: string;
  subtitle?: string;
  status: MissionTaskStatus;
};

export function MissionTaskItem({
  title,
  subtitle,
  status,
}: MissionTaskItemProps) {
  const isDone = status === "done";
  const isMissed = status === "missed";

  return (
    <div
      className={cn(
        "flex items-center justify-between rounded-2xl border px-4 py-4 transition-all duration-200",
        isDone
          ? "border-emerald-500/20 bg-emerald-500/5"
          : isMissed
            ? "border-red-500/20 bg-red-500/5"
            : "border-white/10 bg-black/40 hover:border-white/15",
      )}
    >
      <div className="flex min-w-0 items-start gap-3">
        <div
          className={cn(
            "mt-0.5 shrink-0",
            isDone
              ? "text-emerald-400"
              : isMissed
                ? "text-red-400"
                : "text-zinc-500",
          )}
        >
          {isDone ? (
            <CheckCircle2 className="h-5 w-5" />
          ) : isMissed ? (
            <Clock3 className="h-5 w-5" />
          ) : (
            <Circle className="h-5 w-5" />
          )}
        </div>

        <div className="min-w-0">
          <p
            className={cn(
              "text-sm font-medium",
              isDone
                ? "text-white"
                : isMissed
                  ? "text-zinc-300"
                  : "text-zinc-200",
            )}
          >
            {title}
          </p>

          {subtitle ? (
            <p className="mt-1 text-xs text-zinc-500">{subtitle}</p>
          ) : null}
        </div>
      </div>

      <div className="shrink-0">
        <StatusBadge status={status} />
      </div>
    </div>
  );
}
