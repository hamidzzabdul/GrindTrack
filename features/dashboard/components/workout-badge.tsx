import { cn } from "@/lib/utils/cn";

type WorkoutBadgeProps = {
  label: string;
  variant?: "green" | "dark";
};

export function WorkoutBadge({ label, variant = "green" }: WorkoutBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex rounded-full px-3 py-1 text-xs font-medium tracking-wide",
        variant === "green"
          ? "border border-emerald-500/20 bg-emerald-500/10 text-emerald-400"
          : "border border-white/10 bg-black/40 text-zinc-300",
      )}
    >
      {label}
    </span>
  );
}
