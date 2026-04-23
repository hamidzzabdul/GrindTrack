import { Panel } from "@/components/shared/panel";
import { SectionHeading } from "@/components/shared/section-heading";
import { HabitProgressCard } from "./habit-progress-card";

export type HabitProgressItem = {
  id: string;
  label: string;
  current: number;
  target: number;
  unit: string;
  accent?: "green" | "neutral";
};

type HabitProgressGridProps = {
  items: HabitProgressItem[];
};

export function HabitProgressGrid({ items }: HabitProgressGridProps) {
  return (
    <Panel className="p-5">
      <SectionHeading
        title="Habit Progress"
        description="Daily rhythm at a glance."
      />

      <div className="mt-5 grid grid-cols-2 gap-3">
        {items.map((item) => (
          <HabitProgressCard
            key={item.id}
            label={item.label}
            current={item.current}
            target={item.target}
            unit={item.unit}
            accent={item.accent}
          />
        ))}
      </div>
    </Panel>
  );
}
