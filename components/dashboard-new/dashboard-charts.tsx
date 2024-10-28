"use client";

import * as React from "react";
import {
  Bar,
  BarChart,
  Cell,
  Pie,
  PieChart,
  RadialBar,
  RadialBarChart,
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from "recharts";
import {
  Cloud,
  Database,
  HardDrive,
  Mail,
  MapPin,
  Network,
  Shield,
  Ticket,
  Users,
} from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import DashboardChartCard from "@/components/dashboard/chart-card";

const locationData = [
  { name: "New York", value: 5, fullMark: 10 },
  { name: "Los Angeles", value: 4, fullMark: 10 },
  { name: "Chicago", value: 3, fullMark: 10 },
  { name: "Houston", value: 3, fullMark: 10 },
  { name: "Phoenix", value: 2, fullMark: 10 },
  { name: "Philadelphia", value: 2, fullMark: 10 },
];

const serverData = [
  { name: "Online", value: 142 },
  { name: "Maintenance", value: 15 },
  { name: "Offline", value: 8 },
];

const workstationData = [
  { name: "Windows", value: 980 },
  { name: "MacOS", value: 220 },
  { name: "Linux", value: 40 },
];

const userData = [
  { name: "Admin", value: 50 },
  { name: "Developer", value: 200 },
  { name: "Designer", value: 100 },
  { name: "Manager", value: 80 },
  { name: "Support", value: 150 },
  { name: "Other", value: 2941 },
];

const cloudOpsData = [
  { name: "Compute", value: 99.99 },
  { name: "Storage", value: 99.95 },
  { name: "Database", value: 99.98 },
  { name: "Networking", value: 99.97 },
];

const backupData = [
  { name: "Full", value: 70 },
  { name: "Incremental", value: 25 },
  { name: "Differential", value: 3 },
  { name: "Failed", value: 2 },
];

const threatData = [
  { name: "Malware", blocked: 5200, attempted: 7800 },
  { name: "Phishing", blocked: 3100, attempted: 4500 },
  { name: "DDoS", blocked: 15, attempted: 20 },
  { name: "Intrusion", blocked: 2217, attempted: 2500 },
];

const emailData = [
  { name: "Spam", value: 15000 },
  { name: "Phishing", value: 5000 },
  { name: "Malware", value: 3145 },
  { name: "Allowed", value: 76855 },
];

const ticketData = [
  { name: "Open", value: 42 },
  { name: "In Progress", value: 28 },
  { name: "Pending", value: 15 },
  { name: "Closed", value: 115 },
];

const serviceData = [
  { name: "Web", value: 50 },
  { name: "Database", value: 30 },
  { name: "API", value: 40 },
  { name: "Auth", value: 20 },
  { name: "Storage", value: 16 },
];

const esrData = [
  { name: "IT Support", value: 10.5 },
  { name: "Development", value: 8.0 },
  { name: "Security", value: 6.0 },
  { name: "Management", value: 4.5 },
  { name: "Operations", value: 5.5 },
];

const ChartSize = {
  width: 300,
  height: 200,
};

const ChartColors = {
  primary_dark: "#1D4ED8",
  primary: "#3B82F6",
  primary_light: "#93C5FD",
  secondary_dark: "#C2410C",
  secondary: "#F97316",
  secondary_light: "#FDBA74",
};

export default function HarmonyDashboardCharts() {
  // return <Component />;

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <DashboardChartCard
        title={"Locations"}
        Icon={<MapPin className="h-4 w-4 text-muted-foreground" />}
        containerProps={{
          config: {
            locations: {
              label: "Locations",
              color: ChartColors.primary,
            },
          },
        }}
      >
        <ResponsiveContainer width={"100%"} aspect={1}>
          <RadarChart
            cx="50%"
            cy="50%"
            outerRadius="80%"
            data={locationData}
            // width={ChartSize.width}
            // height={ChartSize.height}
          >
            <PolarGrid />
            <PolarAngleAxis dataKey="name" />
            <PolarRadiusAxis angle={30} domain={[0, 10]} />
            <Radar
              name="Locations"
              dataKey="value"
              stroke={ChartColors.primary}
              fill={ChartColors.primary}
              fillOpacity={0.6}
            />
            <ChartTooltip content={<ChartTooltipContent />} />
          </RadarChart>
        </ResponsiveContainer>
      </DashboardChartCard>
      <DashboardChartCard
        title={"Servers"}
        Icon={<HardDrive className="h-4 w-4 text-muted-foreground" />}
        containerProps={{
          config: {
            servers: {
              label: "Servers",
              color: "hsl(var(--chart-2))",
            },
          },
        }}
      >
        <PieChart
        // width={ChartSize.width} height={ChartSize.height}
        >
          <Pie
            data={serverData}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={80}
            innerRadius={60}
            // fill="var(--color-servers)"
            fill={ChartColors.primary}
            label
          >
            {serverData.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={`hsl(${index * 120}, 70%, 50%)`}
              />
            ))}
          </Pie>
          <ChartTooltip content={<ChartTooltipContent />} />
        </PieChart>
      </DashboardChartCard>

      <DashboardChartCard
        title={"Workstations"}
        Icon={<HardDrive className="h-4 w-4 text-muted-foreground" />}
        containerProps={{
          config: {
            workstations: {
              label: "Workstations",
              color: "hsl(var(--chart-3))",
            },
          },
        }}
      >
        <RadialBarChart
          cx="20%"
          cy="50%"
          innerRadius="10%"
          outerRadius="80%"
          barSize={10}
          data={workstationData}
          // width={300}
          // height={ChartSize.height}
        >
          <RadialBar
            minAngle={15}
            label={{ position: "insideStart", fill: "#fff" }}
            background
            clockWise
            dataKey="value"
          />
          <Legend
            iconSize={10}
            layout="vertical"
            verticalAlign="middle"
            align="right"
            color={"#000"}
          />
          <ChartTooltip content={<ChartTooltipContent />} />
        </RadialBarChart>
      </DashboardChartCard>

      <DashboardChartCard
        title={"Users"}
        Icon={<Users className="h-4 w-4 text-muted-foreground" />}
        containerProps={{
          config: {
            users: {
              label: "Users",
              color: "hsl(var(--chart-4))",
            },
          },
        }}
      >
        <PieChart
        //  width={ChartSize.width} height={ChartSize.height}
        >
          <Pie
            data={userData}
            dataKey="value"
            nameKey="name"
            cx="30%"
            cy="50%"
            outerRadius={80}
            fill="var(--color-users)"
            label
          >
            {userData.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={`hsl(${index * 60}, 70%, 50%)`}
              />
            ))}
          </Pie>
          <ChartTooltip content={<ChartTooltipContent />} />
        </PieChart>
      </DashboardChartCard>

      <DashboardChartCard
        title={"Cloud Ops"}
        Icon={<Cloud className="h-4 w-4 text-muted-foreground" />}
        containerProps={{
          config: {
            cloudOps: {
              label: "Cloud Ops",
              color: "hsl(var(--chart-5))",
            },
          },
        }}
      >
        <RadialBarChart
          cx="30%"
          cy="50%"
          innerRadius="10%"
          outerRadius="80%"
          barSize={10}
          data={cloudOpsData}
          // width={ChartSize.width}
          // height={ChartSize.height}
        >
          <RadialBar
            minAngle={15}
            label={{ position: "insideStart", fill: "#fff" }}
            background
            clockWise
            dataKey="value"
          />
          <Legend
            iconSize={10}
            layout="vertical"
            verticalAlign="middle"
            align="right"
          />
          <ChartTooltip content={<ChartTooltipContent />} />
        </RadialBarChart>
      </DashboardChartCard>

      <DashboardChartCard
        title={"Backup"}
        Icon={<Database className="h-4 w-4 text-muted-foreground" />}
        containerProps={{
          config: {
            backup: {
              label: "Backup",
              color: "hsl(var(--chart-6))",
            },
          },
        }}
      >
        <PieChart
        // width={ChartSize.width} height={ChartSize.height}
        >
          <Pie
            data={backupData}
            dataKey="value"
            nameKey="name"
            cx="30%"
            cy="50%"
            outerRadius={80}
            innerRadius={60}
            fill="var(--color-backup)"
            label
          >
            {backupData.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={`hsl(${index * 90}, 70%, 50%)`}
              />
            ))}
          </Pie>
          <ChartTooltip content={<ChartTooltipContent />} />
        </PieChart>
      </DashboardChartCard>

      <DashboardChartCard
        title={"Threats Blocked"}
        Icon={<Shield className="h-4 w-4 text-muted-foreground" />}
        containerProps={{
          config: {
            threats: {
              label: "Threats",
              color: "hsl(var(--chart-7))",
            },
          },
        }}
      >
        <BarChart
          data={threatData}
          layout="vertical"
          // width={ChartSize.width}
          // height={ChartSize.height}
        >
          <XAxis type="number" />
          <YAxis dataKey="name" type="category" />
          <ChartTooltip content={<ChartTooltipContent />} />
          <Bar dataKey="blocked" fill="var(--color-threats)" />
          <Bar dataKey="attempted" fill="var(--color-threats-attempted)" />
        </BarChart>
      </DashboardChartCard>

      <DashboardChartCard
        title={"E-mails Blocked"}
        Icon={<Mail className="h-4 w-4 text-muted-foreground" />}
        containerProps={{
          config: {
            emails: {
              label: "Emails",
              color: "hsl(var(--chart-8))",
            },
          },
        }}
      >
        <PieChart
        //  width={ChartSize.width} height={ChartSize.height}
        >
          <Pie
            data={emailData}
            dataKey="value"
            nameKey="name"
            cx="30%"
            cy="50%"
            outerRadius={80}
            innerRadius={60}
            fill="var(--color-emails)"
            label
          >
            {emailData.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={`hsl(${index * 90}, 70%, 50%)`}
              />
            ))}
          </Pie>
          <ChartTooltip content={<ChartTooltipContent />} />
        </PieChart>
      </DashboardChartCard>

      <DashboardChartCard
        title={"Service Tickets"}
        Icon={<Ticket className="h-4 w-4 text-muted-foreground" />}
        containerProps={{
          config: {
            tickets: {
              label: "Tickets",
              color: "hsl(var(--chart-9))",
            },
          },
        }}
      >
        <RadialBarChart
          cx="30%"
          cy="50%"
          innerRadius="10%"
          outerRadius="80%"
          barSize={10}
          data={ticketData}
          // width={ChartSize.width}
          // height={ChartSize.height}
        >
          <RadialBar
            minAngle={15}
            label={{ position: "insideStart", fill: "#fff" }}
            background
            clockWise
            dataKey="value"
          />
          <Legend
            iconSize={10}
            layout="vertical"
            verticalAlign="middle"
            align="right"
          />
          <ChartTooltip content={<ChartTooltipContent />} />
        </RadialBarChart>
      </DashboardChartCard>

      <DashboardChartCard
        title={"Total Services"}
        Icon={<Network className="h-4 w-4 text-muted-foreground" />}
        containerProps={{
          config: {
            services: {
              label: "Services",
              color: "hsl(var(--chart-10))",
            },
          },
        }}
      >
        <RadarChart
          cx="30%"
          cy="50%"
          outerRadius="80%"
          data={serviceData}
          // width={ChartSize.width}
          // height={ChartSize.height}
        >
          <PolarGrid />
          <PolarAngleAxis dataKey="name" />
          <PolarRadiusAxis angle={30} domain={[0, 50]} />
          <Radar
            name="Services"
            dataKey="value"
            stroke="var(--color-services)"
            fill="var(--color-services)"
            fillOpacity={0.6}
          />
          <ChartTooltip content={<ChartTooltipContent />} />
        </RadarChart>
      </DashboardChartCard>

      <DashboardChartCard
        title={"ESR"}
        Icon={<Users className="h-4 w-4 text-muted-foreground" />}
        containerProps={{
          config: {
            esr: {
              label: "ESR",
              color: "hsl(var(--chart-11))",
            },
          },
        }}
      >
        <BarChart
          data={esrData}
          layout="vertical"
          // width={ChartSize.width}
          // height={ChartSize.height}
        >
          <XAxis type="number" />
          <YAxis dataKey="name" type="category" />
          <ChartTooltip content={<ChartTooltipContent />} />
          <Bar dataKey="value" fill="var(--color-esr)" />
        </BarChart>
      </DashboardChartCard>
    </div>
  );
}
