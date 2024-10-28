"use client";

import { TrendingUp } from "lucide-react";
import { LabelList, RadialBar, RadialBarChart } from "recharts";

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

export const description = "A radial chart with a label";

const chartData = [
  { name: "Open", value: 42, fill: "var(--color-open)" },
  { name: "In Progress", value: 28, fill: "var(--color-in-progress)" },
  { name: "Pending", value: 15, fill: "var(--color-pending)" },
  { name: "Closed", value: 115, fill: "var(--color-closed)" },
];

const chartConfig = {
  open: {
    label: "Open Tickets",
    color: "hsl(var(--chart-1))",
  },
  inProgress: {
    label: "In Progress Tickets",
    color: "hsl(var(--chart-2))",
  },
  pending: {
    label: "Pending Tickets",
    color: "hsl(var(--chart-3))",
  },
  closed: {
    label: "Closed Tickets",
    color: "hsl(var(--chart-4))",
  },
} satisfies ChartConfig;

export function ServiceTicketsChart() {
  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle>Service Tickets</CardTitle>
        <CardDescription>January - June 2024</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <RadialBarChart
            data={chartData}
            startAngle={-90}
            endAngle={380}
            innerRadius={30}
            outerRadius={110}
          >
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel nameKey="name" />}
            />
            <RadialBar dataKey="value" background>
              <LabelList
                position="insideStart"
                dataKey="name"
                className="fill-white capitalize mix-blend-luminosity"
                fontSize={11}
              />
            </RadialBar>
          </RadialBarChart>
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
