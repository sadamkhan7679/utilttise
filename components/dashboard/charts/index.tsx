import { MemoryStick as Memory, Network } from "lucide-react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Legend,
  Line,
  LineChart,
  Pie,
  PieChart,
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart,
  Tooltip,
  XAxis,
  YAxis,
  Treemap as TreeMap,
  RadialBar,
  RadialBarChart,
  Area,
  ComposedChart,
  AreaChart,
} from "recharts";
import React from "react";
import DashboardChartCard from "@/components/dashboard/chart-card";
import { DashboardCardProps } from "@/components/dashboard/dashboard-card";

const COLORS = [
  "#0088FE",
  "#00C49F",
  "#FFBB28",
  "#FF8042",
  "#8884d8",
  "#82ca9d",
];

const ChartSize = {
  width: 400,
  height: 300,
};

type ChartProps<T> = Partial<Omit<DashboardCardProps, "children">> & {
  data: T;
};

export const MemoryDistribution = ({
  data: memoryDistribution,
  ...rest
}: ChartProps<{ name: string; value: number }[]>) => {
  return (
    <DashboardChartCard
      title="Memory Distribution"
      Icon={<Network className="h-4 w-4" />}
      {...rest}
    >
      <PieChart width={ChartSize.width} height={ChartSize.height}>
        <Pie
          data={memoryDistribution}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={80}
        >
          {memoryDistribution.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </DashboardChartCard>
  );
};

export const SystemMetrics = ({
  data: systemMetrics,
  ...rest
}: ChartProps<{ subject: string; value: number }[]>) => {
  return (
    <DashboardChartCard
      title="System Metrics"
      Icon={<Memory className="h-4 w-4" />}
      {...rest}
    >
      <RadarChart
        cx="50%"
        cy="50%"
        outerRadius="80%"
        data={systemMetrics}
        width={ChartSize.width}
        height={ChartSize.height}
      >
        <PolarGrid stroke="#444" />
        <PolarAngleAxis dataKey="subject" stroke="#666" />
        <PolarRadiusAxis stroke="#666" />
        <Radar
          name="Metrics"
          dataKey="value"
          stroke="#8884d8"
          fill="#8884d8"
          fillOpacity={0.6}
        />
        <Legend />
      </RadarChart>
    </DashboardChartCard>
  );
};
export const StorageUsage = ({
  data: diskUsage,
  ...rest
}: ChartProps<{ name: string; value: number }[]>) => {
  return (
    <DashboardChartCard
      title="Storage Usage"
      Icon={<Memory className="h-4 w-4" />}
      {...rest}
    >
      <PieChart width={ChartSize.width} height={ChartSize.height}>
        <Pie
          data={diskUsage}
          innerRadius={60}
          outerRadius={80}
          paddingAngle={5}
          dataKey="value"
        >
          {diskUsage.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </DashboardChartCard>
  );
};
export const CoreCPUUsage = ({
  data: cpuCoreUsage,
  ...rest
}: ChartProps<{ name: string; usage: number }[]>) => {
  return (
    <DashboardChartCard
      title="Core CPU Usage"
      Icon={<Memory className="h-4 w-4" />}
      {...rest}
    >
      <BarChart
        data={cpuCoreUsage}
        width={ChartSize.width}
        height={ChartSize.height}
      >
        <CartesianGrid strokeDasharray="3 3" stroke="#444" />
        <XAxis dataKey="name" stroke="#666" />
        <YAxis stroke="#666" />
        <Tooltip />
        <Bar dataKey="usage" fill="#0088FE" />
      </BarChart>
    </DashboardChartCard>
  );
};
export const NetworkTraffic = ({
  data: networkTraffic,
  ...rest
}: ChartProps<{ time: string; inbound: number; outbound: number }[]>) => {
  return (
    <DashboardChartCard
      title="Network Traffic"
      Icon={<Network className="h-4 w-4" />}
      {...rest}
    >
      <LineChart
        data={networkTraffic}
        width={ChartSize.width}
        height={ChartSize.height}
      >
        <CartesianGrid strokeDasharray="3 3" stroke="#444" />
        <XAxis dataKey="time" stroke="#666" />
        <YAxis stroke="#666" />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="inbound" stroke="#0088FE" />
        <Line type="monotone" dataKey="outbound" stroke="#00C49F" />
      </LineChart>
    </DashboardChartCard>
  );
};
export const ErrorDistribution = ({
  data: errorDistribution,
  ...rest
}: ChartProps<{ name: string; value: number }[]>) => {
  return (
    <DashboardChartCard
      title={"Error Distribution"}
      Icon={<Network className="h-4 w-4" />}
      {...rest}
    >
      <TreeMap
        width={ChartSize.width}
        height={ChartSize.height}
        data={errorDistribution}
        dataKey="value"
        aspectRatio={4 / 3}
        stroke="#fff"
      >
        <Tooltip />
      </TreeMap>
    </DashboardChartCard>
  );
};
export const ServicesHealth = ({
  data: serviceHealth,
  ...rest
}: ChartProps<{ name: string; value: number }[]>) => {
  return (
    <DashboardChartCard
      title={"Services Health"}
      Icon={<Network className="h-4 w-4" />}
      {...rest}
    >
      <RadialBarChart
        width={ChartSize.width}
        height={ChartSize.height}
        cx="50%"
        cy="50%"
        innerRadius="20%"
        outerRadius="80%"
        data={serviceHealth}
      >
        <RadialBar minAngle={15} background clockWise={true} dataKey="value" />
        <Tooltip />
        <Legend />
      </RadialBarChart>
    </DashboardChartCard>
  );
};
export const PerformanceMetrics = ({
  data: performanceMetrics,
  ...rest
}: ChartProps<
  {
    name: string;
    cpu: number;
    memory: number;
    latency: number;
  }[]
>) => {
  return (
    <DashboardChartCard
      title={"Performance Metrics"}
      Icon={<Network className="h-4 w-4" />}
      {...rest}
    >
      <ComposedChart
        data={performanceMetrics}
        width={ChartSize.width}
        height={ChartSize.height}
      >
        <CartesianGrid stroke="#f5f5f5" />
        <XAxis dataKey="name" />
        <YAxis yAxisId="left" />
        <YAxis yAxisId="right" orientation="right" />
        <Tooltip />
        <Area
          yAxisId="left"
          type="monotone"
          dataKey="cpu"
          fill="#8884d8"
          stroke="#8884d8"
        />
        <Bar yAxisId="right" dataKey="memory" barSize={20} fill="#413ea0" />
        <Line
          yAxisId="right"
          type="monotone"
          dataKey="latency"
          stroke="#ff7300"
        />
        <Legend />
      </ComposedChart>
    </DashboardChartCard>
  );
};
export const SecurityEvents = ({
  data: securityEvents,
  ...rest
}: ChartProps<
  { name: string; critical: number; high: number; medium: number }[]
>) => {
  return (
    <DashboardChartCard
      title={"Security Events"}
      Icon={<Network className="h-4 w-4" />}
      {...rest}
    >
      <BarChart
        data={securityEvents}
        width={ChartSize.width}
        height={ChartSize.height}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="critical" stackId="a" fill="#8884d8" />
        <Bar dataKey="high" stackId="a" fill="#82ca9d" />
        <Bar dataKey="medium" stackId="a" fill="#ffc658" />
        <Legend />
      </BarChart>
    </DashboardChartCard>
  );
};
export const DatabaseMetrics = ({
  data: databaseMetrics,
  ...rest
}: ChartProps<{ name: string; value: number }[]>) => {
  return (
    <DashboardChartCard
      title={"Database Metrics"}
      Icon={<Network className="h-4 w-4" />}
      {...rest}
    >
      <PieChart width={ChartSize.width} height={ChartSize.height}>
        <Pie
          data={databaseMetrics}
          innerRadius={60}
          outerRadius={80}
          paddingAngle={5}
          dataKey="value"
        >
          {databaseMetrics.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </DashboardChartCard>
  );
};
export const LoadBalancerMetrics = ({
  data: loadBalancer,
  ...rest
}: ChartProps<
  { time: string; server1: number; server2: number; server3: number }[]
>) => {
  return (
    <DashboardChartCard
      title={"Load Balancer Metrics"}
      Icon={<Network className="h-4 w-4" />}
      {...rest}
    >
      <AreaChart
        data={loadBalancer}
        width={ChartSize.width}
        height={ChartSize.height}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="time" />
        <YAxis />
        <Tooltip />
        <Area
          type="monotone"
          dataKey="server1"
          stackId="1"
          stroke="#8884d8"
          fill="#8884d8"
        />
        <Area
          type="monotone"
          dataKey="server2"
          stackId="1"
          stroke="#82ca9d"
          fill="#82ca9d"
        />
        <Area
          type="monotone"
          dataKey="server3"
          stackId="1"
          stroke="#ffc658"
          fill="#ffc658"
        />
        <Legend />
      </AreaChart>
    </DashboardChartCard>
  );
};
export const CacheEfficiency = ({
  data: cachingEfficiency,
  ...rest
}: ChartProps<{ name: string; value: number }[]>) => {
  return (
    <DashboardChartCard
      title={"Cache Efficiency"}
      Icon={<Network className="h-4 w-4" />}
      {...rest}
    >
      <PieChart width={ChartSize.width} height={ChartSize.height}>
        <Pie
          data={cachingEfficiency}
          innerRadius={60}
          outerRadius={80}
          paddingAngle={5}
          dataKey="value"
        >
          {cachingEfficiency.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </DashboardChartCard>
  );
};
export const SSLCertificates = ({
  data: certificateStatus,
  ...rest
}: ChartProps<{ name: string; value: number }[]>) => {
  return (
    <DashboardChartCard
      title={"SSL Certificates"}
      Icon={<Network className="h-4 w-4" />}
      {...rest}
    >
      <PieChart width={ChartSize.width} height={ChartSize.height}>
        <Pie
          data={certificateStatus}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={80}
        >
          {certificateStatus.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </DashboardChartCard>
  );
};
export const APILatency = ({
  data: apiLatency,
  ...rest
}: ChartProps<{ name: string; value: number }[]>) => {
  return (
    <DashboardChartCard
      title={"API Latency"}
      Icon={<Network className="h-4 w-4" />}
      {...rest}
    >
      <BarChart
        data={apiLatency}
        width={ChartSize.width}
        height={ChartSize.height}
      >
        <CartesianGrid strokeDasharray="3 3" stroke="#444" />
        <XAxis dataKey="name" stroke="#666" />
        <YAxis stroke="#666" />
        <Tooltip />
        <Bar dataKey="value" fill="#8884d8" />
        <Legend />
      </BarChart>
    </DashboardChartCard>
  );
};
export const BandwidthUsage = ({
  data: bandwidthUsage,
  ...rest
}: ChartProps<{ name: string; size: number }[]>) => {
  return (
    <DashboardChartCard
      title={"Bandwidth Usage"}
      Icon={<Network className="h-4 w-4" />}
      {...rest}
    >
      <TreeMap
        width={ChartSize.width}
        height={ChartSize.height}
        data={bandwidthUsage}
        dataKey="size"
        ratio={4 / 3}
        stroke="#fff"
        fill="#8884d8"
      >
        {bandwidthUsage.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
        <Legend />
      </TreeMap>
    </DashboardChartCard>
  );
};
