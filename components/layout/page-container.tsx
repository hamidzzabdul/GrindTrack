import { cn } from "@/lib/utils/cn";

type PageContainerProps = {
  children: React.ReactNode;
  className?: string;
};

export const PageContainer = ({ children, className }: PageContainerProps) => {
  return <main className={cn("w-full px-4  md:px-6 lg:px-8")}>{children}</main>;
};
