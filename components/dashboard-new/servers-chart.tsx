"use client";

import { Server, TrendingUp } from "lucide-react";
import {
  Pie,
  PieChart,
  PolarAngleAxis,
  PolarGrid,
  Radar,
  RadarChart,
} from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

export const description = "A radar chart";

const chartData = [
  { server: "production", count: 275, fill: "var(--color-production)" },
  { server: "staging", count: 200, fill: "var(--color-staging)" },
  { server: "development", count: 187, fill: "var(--color-development)" },
  { server: "testing", count: 173, fill: "var(--color-testing)" },
  { server: "backup", count: 90, fill: "var(--color-backup)" },
];

const chartConfig = {
  count: {
    label: "Server Count",
  },
  production: {
    label: "Production Servers",
    color: "hsl(var(--chart-1))",
  },
  staging: {
    label: "Staging Servers",
    color: "hsl(var(--chart-2))",
  },
  development: {
    label: "Development Servers",
    color: "hsl(var(--chart-3))",
  },
  testing: {
    label: "Testing Servers",
    color: "hsl(var(--chart-4))",
  },
  backup: {
    label: "Backup Servers",
    color: "hsl(var(--chart-5))",
  },
} satisfies ChartConfig;

export function ServersChart() {
  return (
    <Card>
      <CardHeader className="items-center pb-4">
        <CardTitle>Servers</CardTitle>
        <CardDescription>
          Shows the distribution of servers across different environments
        </CardDescription>
      </CardHeader>
      <CardContent className="pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[300px]"
        >
          <PieChart>
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <Pie
              data={chartData}
              dataKey="count"
              nameKey="server"
              innerRadius={60}
              outerRadius={80}
              paddingAngle={2}
            />
            <ChartLegend
              content={<ChartLegendContent nameKey="server" />}
              className="-translate-y-2 flex-wrap gap-5 [&>*]:basis-1/4 [&>*]:justify-center text-black"
            />
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm"></CardFooter>
    </Card>
  );
}
