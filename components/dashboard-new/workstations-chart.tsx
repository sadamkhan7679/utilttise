"use client";
import { Pie, PieChart } from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
} from "@/components/ui/chart";
import * as React from "react";

import { Monitor } from "lucide-react";

const chartData = [
  { workstation: "desktops", count: 275, fill: "var(--color-desktops)" },
  { workstation: "laptops", count: 200, fill: "var(--color-laptops)" },
  {
    workstation: "thin-clients",
    count: 187,
    fill: "var(--color-thin-clients)",
  },
  { workstation: "virtual-machines", count: 173, fill: "var(--color-virtual)" },
  { workstation: "tablets", count: 90, fill: "var(--color-tablets)" },
];

const chartConfig = {
  count: {
    label: "Workstation Count",
  },
  desktops: {
    label: "Desktop Computers",
    color: "hsl(var(--chart-1))",
  },
  laptops: {
    label: "Laptop Computers",
    color: "hsl(var(--chart-2))",
  },
  "thin-clients": {
    label: "Thin Clients",
    color: "hsl(var(--chart-3))",
  },
  "virtual-machines": {
    label: "Virtual Machines",
    color: "hsl(var(--chart-4))",
  },
  tablets: {
    label: "Tablet Devices",
    color: "hsl(var(--chart-5))",
  },
} satisfies ChartConfig;

export function WorkStationsChart() {
  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle>Workstations</CardTitle>
        <CardDescription>January - June 2024</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[300px]"
        >
          <PieChart>
            <Pie
              data={chartData}
              dataKey="count"
              outerRadius={80}
              paddingAngle={2}
            />
            <ChartLegend
              content={<ChartLegendContent nameKey="workstation" />}
              className="translate-y-0 flex-wrap gap-5 [&>*]:basis-1/4 [&>*]:justify-center text-black mt-5"
              verticalAlign={"bottom"}
            />
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
