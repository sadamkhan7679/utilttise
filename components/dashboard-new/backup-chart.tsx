"use client";

import { TrendingUp } from "lucide-react";
import { Pie, PieChart } from "recharts";

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
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

export const description = "A donut chart";

const chartData = [
  { name: "Full", value: 70, fill: "var(--color-full)" },
  { name: "Incremental", value: 25, fill: "var(--color-incremental)" },
  { name: "Differential", value: 3, fill: "var(--color-differential)" },
  { name: "Failed", value: 2, fill: "var(--color-failed)" },
];

const chartConfig = {
  count: {
    label: "Backup Count",
  },
  full: {
    label: "Full Backup",
    color: "hsl(var(--chart-1))",
  },
  incremental: {
    label: "Incremental Backup",
    color: "hsl(var(--chart-2))",
  },
  differential: {
    label: "Differential Backup",
    color: "hsl(var(--chart-3))",
  },
  failed: {
    label: "Failed Backup",
    color: "hsl(var(--chart-4))",
  },
} satisfies ChartConfig;

export function BackUpChart() {
  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle>Backup</CardTitle>
        <CardDescription>
          Showing total backup for the last 6 months
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <PieChart>
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <Pie
              data={chartData}
              dataKey="value"
              nameKey="name"
              innerRadius={60}
            />
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 font-medium leading-none">
          Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Showing total visitors for the last 6 months
        </div>
      </CardFooter>
    </Card>
  );
}
