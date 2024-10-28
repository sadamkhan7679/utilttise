"use client";

import { useEffect, useState } from "react";
import { SystemData } from "@/lib/types";
import Header from "@/components/dashboard/header";
import PrimaryMetrics from "@/components/dashboard/primary-matrices";
import {
  APILatency,
  BandwidthUsage,
  CacheEfficiency,
  CoreCPUUsage,
  DatabaseMetrics,
  ErrorDistribution,
  LoadBalancerMetrics,
  MemoryDistribution,
  NetworkTraffic,
  PerformanceMetrics,
  SecurityEvents,
  ServicesHealth,
  SSLCertificates,
  StorageUsage,
  SystemMetrics,
} from "@/components/dashboard/charts";
import { generateMockData } from "@/lib/mock-data-generator";
import DashboardOverview from "@/components/dashboard-new/overview";
import HarmonyDashboardCharts from "@/components/dashboard-new/dashboard-charts";

const DashboardPage = () => {
  const [data, setData] = useState<SystemData | null>(null);

  useEffect(() => {
    // Initial data load
    setData(generateMockData());

    // Simulate real-time updates
    const interval = setInterval(() => {
      setData(generateMockData());
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  if (!data) {
    return (
      <div className="flex items-center justify-center h-screen">
        Loading...
      </div>
    );
  }

  const errorDistribution = [
    { name: "4xx Errors", value: 45 },
    { name: "5xx Errors", value: 28 },
    { name: "Timeouts", value: 18 },
    { name: "Other", value: 9 },
  ];

  const serviceHealth = [
    { name: "API Gateway", value: 400 },
    { name: "Database", value: 300 },
    { name: "Cache", value: 200 },
    { name: "Auth Service", value: 278 },
    { name: "Storage", value: 189 },
  ];

  const databaseMetrics = [
    { name: "Queries", value: 850 },
    { name: "Connections", value: 120 },
    { name: "Cache Hits", value: 670 },
    { name: "Slow Queries", value: 45 },
  ];

  const cachingEfficiency = [
    { name: "Hit Rate", value: 85 },
    { name: "Miss Rate", value: 15 },
    { name: "Eviction", value: 5 },
    { name: "Stale", value: 2 },
  ];

  const queueMetrics = [
    { name: "Processing", value: 125 },
    { name: "Pending", value: 45 },
    { name: "Failed", value: 12 },
    { name: "Retrying", value: 8 },
  ];

  const certificateStatus = [
    { name: "Valid", value: 42 },
    { name: "Expiring Soon", value: 5 },
    { name: "Expired", value: 2 },
    { name: "Invalid", value: 1 },
  ];

  const apiLatency = [
    { name: "GET", value: 120 },
    { name: "POST", value: 180 },
    { name: "PUT", value: 150 },
    { name: "DELETE", value: 90 },
  ];

  const backupStatus = [
    { name: "Success", value: 28 },
    { name: "Partial", value: 3 },
    { name: "Failed", value: 1 },
    { name: "Pending", value: 2 },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white p-4 md:p-8">
      <DashboardOverview />
      <div className="h-2 w-full bg-white my-5 rounded-2xl" />
      <HarmonyDashboardCharts />

      {/*<h1 className="text-3xl font-bold mb-8">*/}
      {/*  NetPulse360: Enterprise System Monitor*/}
      {/*</h1>*/}
      {/*<Header systemData={data.systemOverview} />*/}
      {/*<PrimaryMetrics metrics={data.primaryMetrics} />*/}
      {/*<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">*/}
      {/*  <NetworkTraffic data={data.performanceMetrics.networkTraffic} />*/}
      {/*  <MemoryDistribution data={data.systemMetrics.memoryDistribution} />*/}
      {/*  <SystemMetrics data={data.systemMetrics.systemMetrics} />*/}
      {/*  <StorageUsage data={data.infrastructureMetrics.storageUsage} />*/}
      {/*  <CoreCPUUsage data={data.systemMetrics.cpuCoreUsage} />*/}
      {/*  <ErrorDistribution data={errorDistribution} />*/}
      {/*  <ServicesHealth data={serviceHealth} />*/}
      {/*  <SecurityEvents data={data.securityMetrics.securityEvents} />*/}
      {/*  <PerformanceMetrics data={data.performanceMetrics.performanceMetrics} />*/}
      {/*  <LoadBalancerMetrics data={data.performanceMetrics.loadBalancer} />*/}

      {/*  <DatabaseMetrics data={databaseMetrics} />*/}
      {/*  <SSLCertificates data={certificateStatus} />*/}
      {/*  <APILatency data={apiLatency} />*/}
      {/*  <CacheEfficiency data={cachingEfficiency} />*/}
      {/*  <BandwidthUsage data={data.infrastructureMetrics.bandwidthUsage} />*/}
      {/*</div>*/}
    </div>
  );
};

export default DashboardPage;
