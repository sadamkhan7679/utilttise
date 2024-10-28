"use client";

import { TrendingUp } from "lucide-react";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

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

const cloudOpsData = [
  { name: "Storage", up: 85, down: 15 },
  { name: "Compute", up: 92, down: 8 },
  { name: "Network", up: 88, down: 12 },
  { name: "Database", up: 95, down: 5 },
];

const chartConfig = {
  up: {
    label: "Up",
    color: "hsl(var(--chart-1))",
  },
  down: {
    label: "Down",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig;

export function CloudOpsChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>
          <TrendingUp size={24} className="mr-2" />
          Cloud Operations
        </CardTitle>
        <CardDescription>
          Showing the status of cloud operations
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={cloudOpsData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="name"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              // tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dashed" />}
            />
            <Bar dataKey="up" fill="var(--color-up)" radius={4} />
            <Bar dataKey="down" fill="var(--color-down)" radius={4} />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm"></CardFooter>
    </Card>
  );
}
