"use client";

import { useMemo, useState } from "react";
import { Activity, Flame, ShieldCheck, HeartPulse } from "lucide-react";
import { PageContainer } from "@/components/layout/page-container";
import { PageIntro } from "@/components/shared/page-intro";
import { Panel } from "@/components/shared/panel";
import { SectionHeading } from "@/components/shared/section-heading";
import { StatCard } from "@/components/shared/stat-card";
import { TodayMission } from "./today-mission";
import type { MissionTask } from "./today-mission";

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
    // Simple first version:
    // mission completion directly drives score
    return completionPercentage;
  }, [completionPercentage]);

  const streak = useMemo(() => {
    // Temporary placeholder until we connect real data
    if (completedCount >= 4) return "12 days";
    if (completedCount >= 2) return "8 days";
    return "3 days";
  }, [completedCount]);

  const recoveryStatus = useMemo(() => {
    if (completedCount >= 4) return "Strong";
    if (completedCount >= 2) return "Good";
    return "Low";
  }, [completedCount]);

  const habitItems = useMemo(
    () => [
      {
        label: "Coding",
        progress:
          tasks.find((task) => task.title.includes("Coding"))?.status === "done"
            ? "100%"
            : "40%",
      },
      {
        label: "Quran",
        progress:
          tasks.find((task) => task.title.includes("Quran"))?.status === "done"
            ? "100%"
            : "20%",
      },
      {
        label: "Water",
        progress: "60%",
      },
      {
        label: "Sleep",
        progress: "85%",
      },
    ],
    [tasks],
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

        <Panel className="p-5">
          <SectionHeading
            title="Habit Progress"
            description="Daily rhythm at a glance."
          />

          <div className="mt-5 grid grid-cols-2 gap-3">
            {habitItems.map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-white/10 bg-black/40 p-4"
              >
                <p className="text-sm text-zinc-300">{item.label}</p>
                <p className="mt-3 text-2xl font-bold text-emerald-400">
                  {item.progress}
                </p>
                <div className="mt-3 h-2 rounded-full bg-white/5">
                  <div
                    className="h-2 rounded-full bg-emerald-500 transition-all duration-300"
                    style={{ width: item.progress }}
                  />
                </div>
              </div>
            ))}
          </div>
        </Panel>
      </div>

      <div className="mt-6 grid gap-4 xl:grid-cols-3">
        <Panel className="p-5 xl:col-span-2">
          <SectionHeading
            title="Weekly Consistency"
            description="A simple visual of how disciplined your week has been."
          />

          <div className="mt-6 flex h-56 items-end gap-3 rounded-2xl border border-white/10 bg-black/30 p-4">
            {[72, 90, 65, 88, 76, 94, 81].map((height, index) => (
              <div
                key={index}
                className="flex flex-1 flex-col items-center gap-2"
              >
                <div
                  className="w-full rounded-t-xl bg-emerald-500/80"
                  style={{ height: `${height * 1.5}px` }}
                />
                <span className="text-xs text-zinc-500">
                  {["M", "T", "W", "T", "F", "S", "S"][index]}
                </span>
              </div>
            ))}
          </div>
        </Panel>

        <Panel className="p-5">
          <SectionHeading
            title="Workout Focus"
            description="Your next session."
          />

          <div className="mt-5 rounded-2xl border border-emerald-500/20 bg-emerald-500/10 p-4">
            <p className="text-xs uppercase tracking-[0.2em] text-emerald-400">
              Evening Session
            </p>
            <h3 className="mt-2 text-xl font-semibold text-white">
              Push Day + Calisthenics Finisher
            </h3>
            <p className="mt-2 text-sm text-zinc-300">
              Focus on pressing strength, dips, push-ups, and shoulder
              endurance.
            </p>
          </div>

          <div className="mt-4 space-y-3">
            {[
              "Bench Press",
              "Incline Dumbbell Press",
              "Dips",
              "Push-Up Burnout",
            ].map((exercise) => (
              <div
                key={exercise}
                className="rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-zinc-300"
              >
                {exercise}
              </div>
            ))}
          </div>
        </Panel>
      </div>
    </PageContainer>
  );
}
