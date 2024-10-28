"use client";

import { TrendingUp } from "lucide-react";
import { PolarAngleAxis, PolarGrid, Radar, RadarChart } from "recharts";

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

export const description = "A radar chart with a grid and circle fill";

const chartData = [
  { name: "Spam", value: 150 },
  { name: "Phishing", value: 174 },
  { name: "Malware", value: 200 },
  { name: "Allowed", value: 300 },
  { name: "Blocked", value: 250 },
  { name: "Others", value: 100 },
];

const chartConfig = {
  value: {
    label: "Emails",
    color: "hsl(var(--chart-1))",
  },
  name: {
    color: "hsl(var(--background))",
  },
} satisfies ChartConfig;

export function EmailsBlockedChart() {
  return (
    <Card>
      <CardHeader className="items-center pb-4">
        <CardTitle>Emails Blocked</CardTitle>
        <CardDescription>
          Showing total emails blocked for the last 6 months
        </CardDescription>
      </CardHeader>
      <CardContent className="pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <RadarChart data={chartData}>
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <PolarGrid
              className="fill-[--color-name] opacity-80"
              gridType="circle"
            />
            <PolarAngleAxis dataKey="name" />
            <Radar
              dataKey="value"
              fill="var(--color-value)"
              fillOpacity={0.5}
            />
          </RadarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 font-medium leading-none">
          Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
        </div>
        <div className="flex items-center gap-2 leading-none text-muted-foreground">
          January - June 2024
        </div>
      </CardFooter>
    </Card>
  );
}
