"use client";

import { TrendingUp } from "lucide-react";
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";

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

export const description = "A horizontal bar chart";

const chartData = [
  { name: "Malware", blocked: 5200, attempted: 7800 },
  { name: "Phishing", blocked: 3100, attempted: 4500 },
  { name: "DDoS", blocked: 15, attempted: 20 },
  { name: "Intrusion", blocked: 2217, attempted: 2500 },
];

const chartConfig = {
  blocked: {
    label: "Blocked",
    color: "hsl(var(--chart-1))",
  },
  attempted: {
    label: "Attempted",
    color: "hsl(var(--chart-2))",
  },
  name: {
    color: "hsl(var(--background))",
  },
} satisfies ChartConfig;

export function ThreatsBlockedChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Threats Blocked</CardTitle>
        <CardDescription>January - June 2024</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="name"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
            />
            <ChartTooltip content={<ChartTooltipContent hideLabel />} />
            <ChartLegend content={<ChartLegendContent />} />
            <Bar
              dataKey="blocked"
              stackId="a"
              fill="var(--color-blocked)"
              radius={[0, 0, 4, 4]}
            />
            <Bar
              dataKey="attempted"
              stackId="a"
              fill="var(--color-attempted)"
              radius={[4, 4, 0, 0]}
            />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none">
          Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Showing total visitors for the last 6 months
        </div>
      </CardFooter>
    </Card>
  );
}
