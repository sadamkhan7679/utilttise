import { PrimaryMetrics as PrimaryMetricsType } from "@/lib/types";
import { Activity, AlertTriangle, Clock, Server } from "lucide-react";
import {
  RadialBarChart,
  RadialBar,
  PieChart,
  Pie,
  Sector,
  Cell,
  ResponsiveContainer,
} from "recharts";
import { DashboardCard } from "@/components/dashboard/dashboard-card";

interface PrimaryMetricsProps {
  metrics: PrimaryMetricsType;
}

const getHealthScoreColor = (healthScore: number) => {
  if (healthScore > 80) {
    return "#00FF00";
  } else if (healthScore > 60) {
    return "#ff8000";
  } else {
    return "#FF0000";
  }
};

export default function PrimaryMetrics({ metrics }: PrimaryMetricsProps) {
  const data = [
    { name: "Group A", value: metrics.healthScore },
    { name: "Group B", value: 100 - metrics.healthScore },
  ];

  const COLORS = ["#0088FE", "#FFF", "#FFBB28", "#FF8042"];

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
      <DashboardCard
        title="System Health Score"
        Icon={<Server className="h-12 w-12 text-muted-foreground" />}
        className="relative row-span-2"
      >
        <ResponsiveContainer width="100%" height="100%">
          <PieChart width={500} height={200}>
            <Pie
              data={data}
              cx={200}
              cy={200}
              startAngle={180}
              endAngle={0}
              innerRadius={150}
              outerRadius={200}
              // fill="transparent"
              // className={`fill-current text-white`}
              paddingAngle={0}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={
                    index === 0
                      ? getHealthScoreColor(metrics.healthScore)
                      : "#FFF"
                  }
                />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
        <div className="relative">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl font-bold text-white">
            {metrics.healthScore}%
          </div>
        </div>
      </DashboardCard>

      <DashboardCard
        title="Active Incidents"
        Icon={<Activity className="h-12 w-12 text-muted-foreground" />}
      >
        <div className="text-2xl font-bold">{metrics.activeIncidents}</div>
        <p className="text-xs text-muted-foreground">
          {metrics.activeIncidents > 5 ? "Above" : "Below"} average
        </p>
      </DashboardCard>

      <DashboardCard
        title="Critical Alerts"
        Icon={<AlertTriangle className="h-12 w-12 text-muted-foreground" />}
      >
        <div className="text-2xl font-bold">{metrics.criticalAlerts}</div>
        <p className="text-xs text-muted-foreground">
          {metrics.criticalAlerts > 0 ? "Requires attention" : "All clear"}
        </p>
      </DashboardCard>

      <DashboardCard
        title="System Uptime"
        Icon={<Clock className="h-12 w-12 text-muted-foreground" />}
      >
        <div className="text-2xl font-bold">{metrics.uptime}</div>
        <p className="text-xs text-muted-foreground">Since last restart</p>
      </DashboardCard>
    </div>
  );
}
