type WorkoutExerciseListProps = {
  exercises: string[];
};

export function WorkoutExerciseList({ exercises }: WorkoutExerciseListProps) {
  return (
    <div className="mt-4 space-y-3">
      {exercises.map((exercise) => (
        <div
          key={exercise}
          className="rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-zinc-300"
        >
          {exercise}
        </div>
      ))}
    </div>
  );
}
