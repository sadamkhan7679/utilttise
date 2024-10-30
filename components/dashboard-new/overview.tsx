"use client";

import * as React from "react";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
import {
  Cloud,
  Database,
  HardDrive,
  Mail,
  MapPin,
  Shield,
  Ticket,
  Users,
  ArrowDown,
  ArrowUp,
} from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const overallStatus = [
  { name: "Active", value: 70 },
  { name: "Inactive", value: 30 },
];

const serviceLevel = [
  { name: "Jan", value: 30 },
  { name: "Feb", value: 40 },
  { name: "Mar", value: 45 },
  { name: "Apr", value: 50 },
  { name: "May", value: 55 },
  { name: "Jun", value: 60 },
  { name: "Jul", value: 65 },
  { name: "Aug", value: 70 },
  { name: "Sep", value: 75 },
  { name: "Oct", value: 80 },
  { name: "Nov", value: 85 },
  { name: "Dec", value: 90 },
];

const metrics = [
  { name: "Locations", value: 12, icon: MapPin },
  { name: "Servers", value: 142, icon: HardDrive },
  { name: "Workstations", value: 1240, icon: HardDrive },
  { name: "Users", value: 3521, icon: Users },
  { name: "Cloud Ops Up", value: 99.9, icon: Cloud, unit: "%" },
  { name: "Cloud Ops Down", value: 0.1, icon: Cloud, unit: "%" },
  { name: "Backup", value: 98, icon: Database, unit: "%" },
  { name: "Threats Blocked", value: 10532, icon: Shield },
  { name: "E-mails Blocked", value: 23145, icon: Mail },
  { name: "Service Tickets Open", value: 42, icon: Ticket },
  { name: "Total Services", value: 156, icon: HardDrive },
  { name: "ESR", value: 24.5, icon: Users },
];

export default function DashboardOverview() {
  return (
    <div className="flex-col md:flex mb-5">
      <div className="">
        <div className="flex items-center justify-between space-y-2"></div>
        <div className="grid gap-4 md:grid-cols-4 lg:grid-cols-8">
          <Card className="col-span-2 row-span-2">
            <CardHeader>
              <CardTitle>Overall Status</CardTitle>
            </CardHeader>
            <CardContent>
              <ChartContainer
                config={{
                  status: {
                    label: "Status",
                    color: "hsl(var(--primary))",
                  },
                }}
                className={"h-[200px] w-full"}
              >
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={overallStatus}
                      cx="50%"
                      cy="100%"
                      startAngle={180}
                      endAngle={0}
                      innerRadius={100}
                      outerRadius={140}
                      paddingAngle={5}
                      dataKey="value"
                    >
                      {overallStatus.map((entry, index) => (
                        <Cell
                          key={`cell-${index}`}
                          fill={
                            index === 0
                              ? "hsl(var(--primary))"
                              : "hsl(var(--muted))"
                          }
                        />
                      ))}
                    </Pie>
                    <ChartTooltip content={<ChartTooltipContent />} />
                  </PieChart>
                </ResponsiveContainer>
              </ChartContainer>
              <div className="mt-4 flex justify-center text-4xl font-bold">
                {overallStatus[0].value}% Active
              </div>
            </CardContent>
          </Card>
          <Card className="col-span-4 row-span-2">
            <CardHeader>
              <CardTitle>Service Level</CardTitle>
            </CardHeader>
            <CardContent>
              <ChartContainer
                config={{
                  level: {
                    label: "Service Level",
                    color: "hsl(var(--primary))",
                  },
                }}
                className={"h-[200px] w-full"}
              >
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={serviceLevel}>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip content={<ChartTooltipContent />} />
                    <Bar dataKey="value" fill="hsl(var(--primary))" />
                  </BarChart>
                </ResponsiveContainer>
              </ChartContainer>
            </CardContent>
          </Card>
          {metrics.map((metric, index) => (
            <Card key={index}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  {metric.name}
                </CardTitle>
                <metric.icon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  {typeof metric.value === "number" && metric.value % 1 !== 0
                    ? metric.value.toFixed(1)
                    : metric.value.toLocaleString()}
                  {metric.unit}
                </div>
                <p className="text-xs text-muted-foreground">
                  {index % 2 === 0 ? (
                    <span className="flex items-center text-green-600">
                      <ArrowUp className="mr-1 h-4 w-4" />
                      2.5%
                    </span>
                  ) : (
                    <span className="flex items-center text-red-600">
                      <ArrowDown className="mr-1 h-4 w-4" />
                      1.5%
                    </span>
                  )}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
