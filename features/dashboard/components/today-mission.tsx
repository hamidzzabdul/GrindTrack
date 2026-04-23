import { Panel } from "@/components/shared/panel";
import { SectionHeading } from "@/components/shared/section-heading";
import { MissionTaskItem, MissionTaskStatus } from "./mission-task-item";

type MissionTask = {
  id: string;
  title: string;
  subtitle?: string;
  status: MissionTaskStatus;
};

type TodayMissionProps = {
  tasks: MissionTask[];
};

export function TodayMission({ tasks }: TodayMissionProps) {
  const completedCount = tasks.filter((task) => task.status === "done").length;

  return (
    <Panel className="p-5 xl:col-span-2">
      <SectionHeading
        title="Today’s Mission"
        description={`${completedCount}/${tasks.length} completed today.`}
      />

      <div className="mt-5 space-y-3">
        {tasks.map((task) => (
          <MissionTaskItem
            key={task.id}
            title={task.title}
            subtitle={task.subtitle}
            status={task.status}
          />
        ))}
      </div>
    </Panel>
  );
}
