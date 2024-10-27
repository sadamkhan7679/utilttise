export interface SystemOverview {
  status: "Healthy" | "Warning" | "Critical";
}

export interface PrimaryMetrics {
  healthScore: number;
  activeIncidents: number;
  criticalAlerts: number;
  uptime: string;
}

export interface SystemMetrics {
  memoryDistribution: Array<{ name: string; value: number }>;
  systemMetrics: Array<{ subject: string; value: number }>;
  cpuCoreUsage: Array<{ name: string; usage: number }>;
}

export interface PerformanceMetrics {
  networkTraffic: Array<{ time: string; inbound: number; outbound: number }>;
  loadBalancer: Array<{
    time: string;
    server1: number;
    server2: number;
    server3: number;
  }>;
  performanceMetrics: Array<{
    name: string;
    cpu: number;
    memory: number;
    latency: number;
  }>;
}

export interface SecurityMetrics {
  securityEvents: Array<{
    name: string;
    critical: number;
    high: number;
    medium: number;
  }>;
  sslCertificates: Array<{ name: string; value: number }>;
}

export interface InfrastructureMetrics {
  storageUsage: Array<{ name: string; value: number }>;
  bandwidthUsage: Array<{ name: string; size: number }>;
  storageIOPS: Array<{ name: string; read: number; write: number }>;
}

export interface SystemData {
  systemOverview: SystemOverview;
  primaryMetrics: PrimaryMetrics;
  systemMetrics: SystemMetrics;
  performanceMetrics: PerformanceMetrics;
  securityMetrics: SecurityMetrics;
  infrastructureMetrics: InfrastructureMetrics;
}
