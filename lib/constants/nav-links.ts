import {
  LayoutDashboard,
  CalendarDays,
  Dumbbell,
  CheckSquare,
  UtensilsCrossed,
  LineChart,
  Settings,
} from "lucide-react";

export const navLinks = [
  { title: "Dashboard", href: "/", icon: LayoutDashboard },
  { title: "Planner", href: "/planner", icon: CalendarDays },
  { title: "Workouts", href: "/workouts", icon: Dumbbell },
  { title: "Habits", href: "/habits", icon: CheckSquare },
  { title: "Diet", href: "/diet", icon: UtensilsCrossed },
  { title: "Progress", href: "/progress", icon: LineChart },
  { title: "Settings", href: "/settings", icon: Settings },
];
