import { Panel } from "@/components/shared/panel";
import { SectionHeading } from "@/components/shared/section-heading";
import { WeeklyBarChart, WeeklyBarItem } from "./weekly-bar-chart";

type WeeklyConsistencyChartProps = {
  data: WeeklyBarItem[];
};

export function WeeklyConsistencyChart({ data }: WeeklyConsistencyChartProps) {
  const average =
    data.length > 0
      ? Math.round(
          data.reduce((sum, item) => sum + item.value, 0) / data.length,
        )
      : 0;

  return (
    <Panel className="p-5 xl:col-span-2">
      <SectionHeading
        title="Weekly Consistency"
        description={`Average score: ${average}% this week.`}
      />

      <WeeklyBarChart data={data} />
    </Panel>
  );
}
