import {
  DashboardCard,
  type DashboardCardProps,
} from "@/components/dashboard/dashboard-card";
import { ResponsiveContainer } from "recharts";

export default function DashboardChartCard({
  children,
  ...props
}: DashboardCardProps) {
  return (
    <DashboardCard {...props}>
      <ResponsiveContainer width="100%" height="100%">
        {/* @ts-ignore */}
        {children}
      </ResponsiveContainer>
    </DashboardCard>
  );
}
