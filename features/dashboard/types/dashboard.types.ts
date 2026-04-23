import type { MissionTaskStatus } from "../components/mission-task-item";

export type DashboardMissionTask = {
  id: string;
  title: string;
  subtitle?: string;
  status: MissionTaskStatus;
};

export type DashboardWorkoutFocus = {
  sessionLabel: string;
  title: string;
  description: string;
  exercises: string[];
};

export type DashboardWeeklyItem = {
  day: string;
  value: number;
};

export type DashboardHabitSeed = {
  id: string;
  label: string;
  current: number;
  target: number;
  unit: string;
  accent?: "green" | "neutral";
};
