"use client";

import { TrendingUp } from "lucide-react";
import { Bar, BarChart, XAxis, YAxis } from "recharts";

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

export const description = "A mixed bar chart";

const chartData = [
  { name: "IT Support", value: 10.5, fill: "var(--color-support)" },
  { name: "Development", value: 8.0, fill: "var(--color-development)" },
  { name: "Security", value: 6.0, fill: "var(--color-security)" },
  { name: "Management", value: 4.5, fill: "var(--color-management)" },
  { name: "Operations", value: 5.5, fill: "var(--color-operations)" },
];

const chartConfig = {
  support: {
    label: "IT Support",
    color: "hsl(var(--chart-1))",
  },
  development: {
    label: "Development",
    color: "hsl(var(--chart-2))",
  },
  security: {
    label: "Security",
    color: "hsl(var(--chart-3))",
  },
  management: {
    label: "Management",
    color: "hsl(var(--chart-4))",
  },
  operations: {
    label: "Operations",
    color: "hsl(var(--chart-5))",
  },
} satisfies ChartConfig;

export function EsrChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>
          Employee Satisfaction Rate (<span className="text-primary">ESR</span>)
        </CardTitle>
        <CardDescription>January - June 2024</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart
            accessibilityLayer
            data={chartData}
            layout="vertical"
            margin={{
              left: 0,
            }}
          >
            <YAxis
              dataKey="name"
              type="category"
              tickLine={false}
              // tickMargin={10}
              axisLine={false}
              // tickFormatter={(value) =>
              //   chartConfig[value as keyof typeof chartConfig]?.label
              // }
            />
            <XAxis dataKey="value" type="number" hide />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar dataKey="value" layout="vertical" radius={5} />
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
