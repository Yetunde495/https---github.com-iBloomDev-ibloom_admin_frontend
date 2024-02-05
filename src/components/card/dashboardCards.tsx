import React from "react";

interface DashboardCardProps {
  title?: string;
  number?: number | string;
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

interface DashboardCard2Props {
  title?: string;
  number?: number | string;
  color?: string;
  icon?: React.ReactNode;
}

export const DashboardCard2: React.FC<DashboardCard2Props> = ({ title, number, color, icon }) => {
  return (
    <div className="relative border bg-white shadow-sm  border-stroke flex gap-5 py-3 px-4 w-full">
      <div className="">
        <div className="flex justify-center items-center gap-2 mb-5">
         {icon}
          <h4 className="font-semibold dark:text-black text-[#070a0ff8] font-cabin">
          {title}
        </h4>
        </div>
       
        
        <p className={`text-[${color}] font-semibold text-2xl mb-2 ml-2`}>
          {number}
        </p>
      </div>
    </div>
  );
};


export default DashboardCard;
