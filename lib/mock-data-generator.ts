import { SystemData } from "@/lib/types";

export function generateMockData(): SystemData {
  return {
    systemOverview: {
      status: Math.random() > 0.8 ? "Warning" : "Healthy",
    },
    primaryMetrics: {
      healthScore: Math.floor(Math.random() * 100),
      activeIncidents: Math.floor(Math.random() * 10),
      criticalAlerts: Math.floor(Math.random() * 5),
      uptime: `${Math.floor(Math.random() * 30)}d ${Math.floor(Math.random() * 24)}h ${Math.floor(Math.random() * 60)}m`,
    },
    systemMetrics: {
      memoryDistribution: [
        { name: "Used", value: Math.floor(Math.random() * 8) },
        { name: "Free", value: Math.floor(Math.random() * 8) },
        { name: "Cached", value: Math.floor(Math.random() * 8) },
      ],
      systemMetrics: [
        { subject: "CPU", value: Math.floor(Math.random() * 100) },
        { subject: "Memory", value: Math.floor(Math.random() * 100) },
        { subject: "Disk", value: Math.floor(Math.random() * 100) },
        { subject: "Network", value: Math.floor(Math.random() * 100) },
        { subject: "Load", value: Math.floor(Math.random() * 100) },
      ],
      cpuCoreUsage: Array.from({ length: 8 }, (_, i) => ({
        name: `Core ${i + 1}`,
        usage: Math.floor(Math.random() * 100),
      })),
    },
    performanceMetrics: {
      networkTraffic: Array.from({ length: 24 }, (_, i) => ({
        time: `${i}:00`,
        inbound: Math.floor(Math.random() * 1000),
        outbound: Math.floor(Math.random() * 1000),
      })),
      loadBalancer: Array.from({ length: 24 }, (_, i) => ({
        time: `${i}:00`,
        server1: Math.floor(Math.random() * 100),
        server2: Math.floor(Math.random() * 100),
        server3: Math.floor(Math.random() * 100),
      })),
      performanceMetrics: Array.from({ length: 10 }, (_, i) => ({
        name: `Metric ${i + 1}`,
        cpu: Math.floor(Math.random() * 100),
        memory: Math.floor(Math.random() * 100),
        latency: Math.floor(Math.random() * 1000),
      })),
    },
    securityMetrics: {
      securityEvents: Array.from({ length: 7 }, (_, i) => ({
        name: `Day ${i + 1}`,
        critical: Math.floor(Math.random() * 10),
        high: Math.floor(Math.random() * 20),
        medium: Math.floor(Math.random() * 30),
      })),
      sslCertificates: [
        { name: "Valid", value: Math.floor(Math.random() * 100) },
        { name: "Expiring Soon", value: Math.floor(Math.random() * 20) },
        { name: "Expired", value: Math.floor(Math.random() * 5) },
      ],
    },
    infrastructureMetrics: {
      storageUsage: [
        { name: "Used", value: Math.floor(Math.random() * 800) },
        { name: "Free", value: Math.floor(Math.random() * 200) },
      ],
      bandwidthUsage: [
        { name: "Web", size: Math.floor(Math.random() * 1000) },
        { name: "Email", size: Math.floor(Math.random() * 500) },
        { name: "File Transfer", size: Math.floor(Math.random() * 750) },
        { name: "VoIP", size: Math.floor(Math.random() * 250) },
      ],
      storageIOPS: Array.from({ length: 5 }, (_, i) => ({
        name: `Disk ${i + 1}`,
        read: Math.floor(Math.random() * 1000),
        write: Math.floor(Math.random() * 1000),
      })),
    },
  };
}
