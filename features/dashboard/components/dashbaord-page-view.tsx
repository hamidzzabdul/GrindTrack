"use client";

import { useMemo, useState } from "react";
import { Activity, Flame, ShieldCheck, HeartPulse } from "lucide-react";
import { PageContainer } from "@/components/layout/page-container";
import { PageIntro } from "@/components/shared/page-intro";
import { Panel } from "@/components/shared/panel";
import { SectionHeading } from "@/components/shared/section-heading";
import { StatCard } from "@/components/shared/stat-card";
import { TodayMission } from "./today-mission";
import { HabitProgressGrid } from "./habit-progress-grid";
import type { MissionTask } from "./today-mission";
import { WorkoutFocusCard } from "@/features/dashboard/components/workout-focus-card";
import { WeeklyConsistencyChart } from "@/features/progress/components/weekly-consistency-chart";

const initialTasks: MissionTask[] = [
  {
    id: "1",
    title: "Morning Boxing Session",
    subtitle: "Skill work, bag rounds, and footwork",
    status: "done",
  },
  {
    id: "2",
    title: "Evening Push + Calisthenics",
    subtitle: "Strength work scheduled for later today",
    status: "pending",
  },
  {
    id: "3",
    title: "Coding 2 Hours",
    subtitle: "Focus block for building Discipline OS",
    status: "pending",
  },
  {
    id: "4",
    title: "Quran 1 Hour",
    subtitle: "Daily recitation and reflection target",
    status: "pending",
  },
  {
    id: "5",
    title: "Diet On Track",
    subtitle: "Hit meals, protein, and hydration targets",
    status: "pending",
  },
];

export function DashboardPageView() {
  const [tasks, setTasks] = useState<MissionTask[]>(initialTasks);

  const completedCount = useMemo(
    () => tasks.filter((task) => task.status === "done").length,
    [tasks],
  );

  const completionPercentage = useMemo(() => {
    if (tasks.length === 0) return 0;
    return Math.round((completedCount / tasks.length) * 100);
  }, [completedCount, tasks.length]);

  const disciplineScore = useMemo(() => {
    return completionPercentage;
  }, [completionPercentage]);

  const streak = useMemo(() => {
    if (completedCount >= 4) return "12 days";
    if (completedCount >= 2) return "8 days";
    return "3 days";
  }, [completedCount]);

  const recoveryStatus = useMemo(() => {
    if (completedCount >= 4) return "Strong";
    if (completedCount >= 2) return "Good";
    return "Low";
  }, [completedCount]);

  const codingDone =
    tasks.find((task) => task.title.includes("Coding"))?.status === "done";

  const quranDone =
    tasks.find((task) => task.title.includes("Quran"))?.status === "done";

  const habitItems = useMemo(
    () => [
      {
        id: "coding",
        label: "Coding",
        current: codingDone ? 2 : 0.8,
        target: 2,
        unit: "hrs",
        accent: "green" as const,
      },
      {
        id: "quran",
        label: "Quran",
        current: quranDone ? 60 : 20,
        target: 60,
        unit: "min",
        accent: "green" as const,
      },
      {
        id: "water",
        label: "Water",
        current: 2.4,
        target: 4,
        unit: "L",
        accent: "green" as const,
      },
      {
        id: "sleep",
        label: "Sleep",
        current: 6.8,
        target: 8,
        unit: "hrs",
        accent: "neutral" as const,
      },
    ],
    [codingDone, quranDone],
  );

  function handleToggleTask(id: string) {
    setTasks((currentTasks) =>
      currentTasks.map((task) =>
        task.id === id
          ? {
              ...task,
              status: task.status === "done" ? "pending" : "done",
            }
          : task,
      ),
    );
  }

  const weeklyConsistencyData = useMemo(
    () => [
      { day: "M", value: 72 },
      { day: "TU", value: 90 },
      { day: "W", value: 65 },
      { day: "TH", value: 88 },
      { day: "F", value: 76 },
      { day: "SA", value: 94 },
      { day: "SU", value: completionPercentage },
    ],
    [completionPercentage],
  );

  return (
    <PageContainer>
      <PageIntro
        title="Dashboard"
        description="Your personal command center for training, coding, Quran, recovery, and diet."
      />

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <StatCard
          title="Discipline Score"
          value={`${disciplineScore}`}
          icon={ShieldCheck}
          hint="Based on today’s mission completion"
          trend={disciplineScore >= 70 ? "up" : "neutral"}
        />
        <StatCard
          title="Current Streak"
          value={streak}
          icon={Flame}
          hint="Will be made real with saved data later"
          trend="up"
        />
        <StatCard
          title="Weekly Completion"
          value={`${completionPercentage}%`}
          icon={Activity}
          hint="Calculated from today’s mission progress"
          trend={completionPercentage >= 70 ? "up" : "neutral"}
        />
        <StatCard
          title="Recovery Status"
          value={recoveryStatus}
          icon={HeartPulse}
          hint="Temporary score until recovery tracking is built"
          trend="neutral"
        />
      </div>

      <div className="mt-6 grid gap-4 xl:grid-cols-3">
        <TodayMission tasks={tasks} onToggleTask={handleToggleTask} />

        <HabitProgressGrid items={habitItems} />
      </div>

      <div className="mt-6 grid gap-4 xl:grid-cols-3">
        <WeeklyConsistencyChart data={weeklyConsistencyData} />

        <WorkoutFocusCard
          sessionLabel="Evening Session"
          title="Push Day + Calisthenics Finisher"
          description="Focus on pressing strength, dips, push-ups, and shoulder endurance."
          exercises={[
            "Bench Press",
            "Incline Dumbbell Press",
            "Dips",
            "Push-Up Burnout",
          ]}
        />
      </div>
    </PageContainer>
  );
}
