import type {
  DashboardMissionTask,
  DashboardWeeklyItem,
  DashboardWorkoutFocus,
} from "../types/dashboard.types";

export const initialDashboardTasks: DashboardMissionTask[] = [
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

export const dashboardWorkoutFocus: DashboardWorkoutFocus = {
  sessionLabel: "Evening Session",
  title: "Push Day + Calisthenics Finisher",
  description:
    "Focus on pressing strength, dips, push-ups, and shoulder endurance.",
  exercises: [
    "Bench Press",
    "Incline Dumbbell Press",
    "Dips",
    "Push-Up Burnout",
  ],
};

export const baseWeeklyConsistencyData: DashboardWeeklyItem[] = [
  { day: "M", value: 72 },
  { day: "TU", value: 90 },
  { day: "W", value: 65 },
  { day: "TH", value: 88 },
  { day: "F", value: 76 },
  { day: "SA", value: 94 },
  { day: "SU", value: 81 },
];
