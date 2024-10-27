import { Bell, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SystemOverview } from "@/lib/types";

interface HeaderProps {
  systemData: SystemOverview;
}

export default function Header({ systemData }: HeaderProps) {
  return (
    <header className="flex justify-between items-center mb-8">
      <div>
        <p className="text-xl">{new Date().toLocaleString()}</p>
      </div>
      <div className="flex items-center space-x-4">
        <div
          className={`px-4 py-2 rounded-full ${systemData.status === "Healthy" ? "bg-green-500" : "bg-red-500"}`}
        >
          {systemData.status}
        </div>
        <Button variant="secondary" size="icon">
          <Bell className="h-4 w-4" />
        </Button>
        <Button variant="secondary" size="icon">
          <Settings className="h-4 w-4" />
        </Button>
      </div>
    </header>
  );
}
