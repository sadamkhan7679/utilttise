import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/*
Can we please redesign the dashboard charts...
Have at least one occurrence of each of these charts from shadcn charts

AreaChart - StackedAreaChart
BarChart - MutipleBarChart
PieChart Donut with Text
BarChart Mixed with Legends and Tooltips
HorizontalBarChart
Interactive BarChart
Radar Chart - Icons
Radial Chart - Stacked
Pie Chart - Interactive
Line Chart - Multiple Lines
Line Chart - Interactive

Remember, these are Twelve sections in a grid layout for different metrics
(Locations, Servers, Workstations, Users, Cloud Ops Up, Cloud Ops Down, Backup, Threats Blocked, E-mails Blocked, Service Tickets Open, Total Services, and ESR) with the respective charts.
Make sure we have detailed data for each of these metrics.
Charts are fully interactive and responsive.

Let's have it like this for each of the metrics:
Locations - AreaChart
Servers - StackedAreaChart
Workstations - BarChart
Users - MutipleBarChart
Cloud Ops Up - PieChart Donut with Text
Cloud Ops Down - BarChart Mixed with Legends and Tooltips
Backup - HorizontalBarChart
Threats Blocked - Interactive BarChart
E-mails Blocked - Radar Chart - Icons
Service Tickets Open - Radial Chart - Stacked
Total Services - Pie Chart - Interactive
ESR - Line Chart - Multiple Lines





 */
