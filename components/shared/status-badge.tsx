import { cn } from "@/lib/utils/cn";

type StatusType = "done" | "pending" | "missed";

type StatusBadgeProps = {
  status: StatusType;
};

const statusMap: Record<StatusType, { label: string; className: string }> = {
  done: {
    label: "Done",
    className: "border-emerald-500/20 bg-emerald-500/10 text-emerald-400",
  },
  pending: {
    label: "Pending",
    className: "border-amber-500/20 bg-amber-500/10 text-amber-400",
  },
  missed: {
    label: "Missed",
    className: "border-red-500/20 bg-red-500/10 text-red-400",
  },
};

export function StatusBadge({ status }: StatusBadgeProps) {
  const config = statusMap[status];

  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-2.5 py-1 text-xs font-medium",
        config.className,
      )}
    >
      {config.label}
    </span>
  );
}
