import {
  DashboardCard,
  type DashboardCardProps,
} from "@/components/dashboard/dashboard-card";
import { ResponsiveContainer } from "recharts";
import { ChartContainer } from "@/components/ui/chart";
import React from "react";

type ContainerProps = React.ComponentProps<typeof ChartContainer>;

type Props = DashboardCardProps & {
  containerProps: Omit<ContainerProps, "children">;
};

export default function DashboardChartCard({
  children,
  containerProps,
  ...props
}: Props) {
  return (
    <DashboardCard {...props}>
      <ChartContainer
        // config={{
        //   servers: {
        //     label: "Servers",
        //     color: "hsl(var(--chart-2))",
        //   },
        // }}
        // className="h-[200px]"
        {...containerProps}
      >
        <ResponsiveContainer width="100%" height="100%">
          {/* @ts-ignore */}
          {children}
        </ResponsiveContainer>
      </ChartContainer>
    </DashboardCard>
  );
}
