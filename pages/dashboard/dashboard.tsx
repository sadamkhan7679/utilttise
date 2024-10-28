"use client";
import DashboardOverview from "@/components/dashboard-new/overview";
import { LocationsChart } from "@/components/dashboard-new/location-chart";
import { ServersChart } from "@/components/dashboard-new/servers-chart";
import { WorkStationsChart } from "@/components/dashboard-new/workstations-chart";
import { UsersChart } from "@/components/dashboard-new/users-chart";
import { CloudOpsChart } from "@/components/dashboard-new/cloud-ops-chart";
import { BackUpChart } from "@/components/dashboard-new/backup-chart";
import { ThreatsBlockedChart } from "@/components/dashboard-new/threats-blocked-chart";
import { EmailsBlockedChart } from "@/components/dashboard-new/emails-blocked-chart";
import { ServiceTicketsChart } from "@/components/dashboard-new/service-tickets-chart";
import { EsrChart } from "@/components/dashboard-new/esr-chart";
import { TotalServicesChart } from "@/components/dashboard-new/total-services-chart";

const DashboardPage = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-4 md:p-8">
      <DashboardOverview />
      <div className="h-2 w-full bg-white my-5 rounded-2xl" />
      <div className="grid grid-cols-4 gap-6">
        <LocationsChart />
        <ServersChart />
        <WorkStationsChart />
        <UsersChart />
        <CloudOpsChart />
        <BackUpChart />
        <ThreatsBlockedChart />
        <EmailsBlockedChart />
        <ServiceTicketsChart />
        <TotalServicesChart />
        <EsrChart />
      </div>
    </div>
  );
};

export default DashboardPage;
