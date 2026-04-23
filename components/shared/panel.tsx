import { cn } from "@/lib/utils/cn";

type PanelProps = {
  children: React.ReactNode;
  className?: string;
};

export function Panel({ children, className }: PanelProps) {
  return (
    <div
      className={cn(
        "rounded-3xl border border-white/10 bg-zinc-950/80 backdrop-blur-sm",
        "shadow-[0_0_0_1px_rgba(255,255,255,0.02)]",
        className,
      )}
    >
      {children}
    </div>
  );
}
