import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import React from "react";
import { cn } from "@/lib/utils";

export type DashboardCardProps = {
  title: string;
  // children: React.ReactNode;
  children: React.ReactNode;
  Icon?: React.ReactNode;
  className?: string;
};

export const DashboardCard = ({
  title,
  children,
  Icon,
  className,
}: DashboardCardProps) => {
  return (
    <Card className={cn("col-span-1", className)}>
      <CardHeader>
        <CardTitle
          className={"text-xl font-bold flex justify-between items-center"}
        >
          <div>{title}</div>
          {Icon && <div>{Icon}</div>}
        </CardTitle>
      </CardHeader>
      <CardContent className="text-white">{children}</CardContent>
    </Card>
  );
};
