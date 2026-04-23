"use client";

import { useMemo, useState } from "react";
import { Activity, Flame, ShieldCheck, HeartPulse } from "lucide-react";
import { PageContainer } from "@/components/layout/page-container";
import { PageIntro } from "@/components/shared/page-intro";
import { StatCard } from "@/components/shared/stat-card";
import { TodayMission } from "./today-mission";
import { HabitProgressGrid } from "./habit-progress-grid";
import { WorkoutFocusCard } from "@/features/dashboard/components/workout-focus-card";
import { WeeklyConsistencyChart } from "@/features/progress/components/weekly-consistency-chart";
import {
  baseWeeklyConsistencyData,
  dashboardWorkoutFocus,
  initialDashboardTasks,
} from "../constants/dashboard.mock";
import type { DashboardMissionTask } from "../types/dashboard.types";

export function DashboardPageView() {
  const [tasks, setTasks] = useState<DashboardMissionTask[]>(
    initialDashboardTasks,
  );

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

  const weeklyConsistencyData = useMemo(() => {
    return baseWeeklyConsistencyData.map((item, index, arr) =>
      index === arr.length - 1
        ? { ...item, value: completionPercentage }
        : item,
    );
  }, [completionPercentage]);

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
          sessionLabel={dashboardWorkoutFocus.sessionLabel}
          title={dashboardWorkoutFocus.title}
          description={dashboardWorkoutFocus.description}
          exercises={dashboardWorkoutFocus.exercises}
        />
      </div>
    </PageContainer>
  );
}
