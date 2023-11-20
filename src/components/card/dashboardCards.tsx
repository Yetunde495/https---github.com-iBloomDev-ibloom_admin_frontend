import React from "react";

interface DashboardCardProps {
  title?: string;
  number?: number;
}

const DashboardCard: React.FC<DashboardCardProps> = ({ title, number }) => {
  return (
    <div className="relative border-r  border-stroke flex gap-5 py-3 px-4 sm:h-[102px] h-[80px] w-full">
      <div className="">
        <h4 className="font-semibold mb-1 dark:text-black text-[#070a0ff8] font-cabin">
          {title}
        </h4>
        <p className="text-[13px] dark:text-black font-medium text-lg text-primary ">
          {number}
        </p>
      </div>
    </div>
  );
};

export default DashboardCard;
