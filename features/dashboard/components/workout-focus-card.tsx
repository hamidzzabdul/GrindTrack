import { Panel } from "@/components/shared/panel";
import { SectionHeading } from "@/components/shared/section-heading";
import { WorkoutExerciseList } from "./workout-exercise-list";

type WorkoutFocusCardProps = {
  sessionLabel: string;
  title: string;
  description: string;
  exercises: string[];
};

export function WorkoutFocusCard({
  sessionLabel,
  title,
  description,
  exercises,
}: WorkoutFocusCardProps) {
  return (
    <Panel className="p-5">
      <SectionHeading title="Workout Focus" description="Your next session." />

      <div className="mt-5 rounded-2xl border border-emerald-500/20 bg-emerald-500/10 p-4">
        <p className="text-xs uppercase tracking-[0.2em] text-emerald-400">
          {sessionLabel}
        </p>
        <h3 className="mt-2 text-xl font-semibold text-white">{title}</h3>
        <p className="mt-2 text-sm text-zinc-300">{description}</p>
      </div>

      <WorkoutExerciseList exercises={exercises} />
    </Panel>
  );
}
