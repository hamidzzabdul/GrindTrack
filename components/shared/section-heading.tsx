import { cn } from "@/lib/utils/cn";

type SectionHeadingProps = {
  title: string;
  description?: string;
  className?: string;
  action?: React.ReactNode;
};

export function SectionHeading({
  title,
  description,
  className,
  action,
}: SectionHeadingProps) {
  return (
    <div className={cn("flex items-start justify-between gap-4", className)}>
      <div>
        <h3 className="text-lg font-semibold tracking-tight text-white md:text-xl">
          {title}
        </h3>
        {description ? (
          <p className="mt-1 text-sm text-zinc-400">{description}</p>
        ) : null}
      </div>

      {action ? <div>{action}</div> : null}
    </div>
  );
}
