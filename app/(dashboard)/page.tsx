import { PageContainer } from "@/components/layout/page-container";
import { PageIntro } from "@/components/shared/page-intro";
import { Panel } from "@/components/shared/panel";
import { SectionHeading } from "@/components/shared/section-heading";
import { StatCard } from "@/components/shared/stat-card";
import { TodayMission } from "@/features/dashboard/components/today-mission";
import { Activity, Flame, ShieldCheck, HeartPulse } from "lucide-react";

const todayTasks = [
  {
    id: "1",
    title: "Morning Boxing Session",
    subtitle: "Skill work, bag rounds, and footwork",
    status: "done" as const,
  },
  {
    id: "2",
    title: "Evening Push + Calisthenics",
    subtitle: "Strength work scheduled for later today",
    status: "pending" as const,
  },
  {
    id: "3",
    title: "Coding 2 Hours",
    subtitle: "Focus block for building Discipline OS",
    status: "pending" as const,
  },
  {
    id: "4",
    title: "Quran 1 Hour",
    subtitle: "Daily recitation and reflection target",
    status: "pending" as const,
  },
  {
    id: "5",
    title: "Diet On Track",
    subtitle: "Hit meals, protein, and hydration targets",
    status: "pending" as const,
  },
];

const habitItems = [
  { label: "Coding", progress: "40%" },
  { label: "Quran", progress: "20%" },
  { label: "Water", progress: "60%" },
  { label: "Sleep", progress: "85%" },
];

export default function DashboardPage() {
  return (
    <PageContainer>
      <PageIntro
        title="Dashboard"
        description="Your personal command center for training, coding, Quran, recovery, and diet."
      />

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <StatCard
          title="Discipline Score"
          value="84"
          icon={ShieldCheck}
          hint="Strong consistency this week"
          trend="up"
        />
        <StatCard
          title="Current Streak"
          value="12 days"
          icon={Flame}
          hint="Keep the momentum alive"
          trend="up"
        />
        <StatCard
          title="Weekly Completion"
          value="78%"
          icon={Activity}
          hint="You are on track"
          trend="up"
        />
        <StatCard
          title="Recovery Status"
          value="Good"
          icon={HeartPulse}
          hint="Sleep and soreness look balanced"
          trend="neutral"
        />
      </div>

      <div className="mt-6 grid gap-4 xl:grid-cols-3">
        <TodayMission tasks={todayTasks} />

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
                    className="h-2 rounded-full bg-emerald-500"
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
