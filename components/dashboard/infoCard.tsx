import React, { ReactNode } from "react";

interface InfoCardProps {
  title: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  children: ReactNode;
}

const InfoCard: React.FC<InfoCardProps> = ({ title, icon: Icon, children }) => {
  return (
    <div className="rounded shadow-lg bg-white p-6">
      <div className="flex items-center space-x-4 mb-5">
        <Icon className="h-8 w-8 text-blue-500" />

        <h3 className="font-bold text-4xl text-gray-900 flex-grow">{title}</h3>
      </div>

      <div className="w-full">{children}</div>
    </div>
  );
};

export default InfoCard;
