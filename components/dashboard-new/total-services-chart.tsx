"use client";

import { TrendingUp } from "lucide-react";
import { LabelList, Pie, PieChart } from "recharts";

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

export const description = "A pie chart with a label list";

const chartData = [
  { name: "Web", value: 50, fill: "var(--color-web)" },
  { name: "Database", value: 30, fill: "var(--color-database)" },
  { name: "API", value: 40, fill: "var(--color-api)" },
  { name: "Auth", value: 20, fill: "var(--color-auth)" },
  { name: "Storage", value: 16, fill: "var(--color-storage)" },
];

const chartConfig = {
  web: {
    label: "Web",
    color: "hsl(var(--chart-1))",
  },
  database: {
    label: "Database",
    color: "hsl(var(--chart-2))",
  },
  api: {
    label: "API",
    color: "hsl(var(--chart-3))",
  },
  auth: {
    label: "Auth",
    color: "hsl(var(--chart-4))",
  },
  storage: {
    label: "Storage",
    color: "hsl(var(--chart-5))",
  },
} satisfies ChartConfig;

export function TotalServicesChart() {
  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle>Pie Chart - Label List</CardTitle>
        <CardDescription>January - June 2024</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px] [&_.recharts-text]:fill-background"
        >
          <PieChart>
            <ChartTooltip
              content={<ChartTooltipContent nameKey="value" hideLabel />}
            />
            <Pie data={chartData} dataKey="value">
              <LabelList
                dataKey="name"
                className="fill-background"
                stroke="none"
                fontSize={14}
                // formatter={(value: keyof typeof chartConfig) =>
                //   chartConfig[value]?.label
                // }
              />
            </Pie>
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
