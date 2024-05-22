import React from "react";

interface DashboardCardProps {
  title?: string;
  topics?: number | string;
  lesson?: number | string;
  icon?: React.ReactNode;
}

const DashboardCard: React.FC<DashboardCardProps> = ({
  title,
  topics,
  lesson,
  icon,
}) => {
  return (
    <div className="relative border bg-white shadow-sm  border-stroke gap-5 p-4.5 pb-3.5 rounded-md w-full">
      <div className="flex gap-4 flex-row items-center mb-6">
        <div className="max-w-[45px]">{icon}</div>

        <div>
          <h4 className="font-semibold dark:text-black text-lg text-[#070a0ff8]">
            {title}
          </h4>
        </div>
      </div>
      <div className="flex justify-between text-slate-500 text-[15px]">
        <span>{topics} Topics</span>
        <span>{lesson} Lessons</span>
      </div>
    </div>
  );
};

interface DashboardCard2Props {
  title?: string;
  number?: number | string;
  icon?: React.ReactNode;
}

export const DashboardCard2: React.FC<DashboardCard2Props> = ({
  title,
  number,
  icon,
}) => {
  return (
    <div className="relative border bg-white shadow-sm  border-stroke gap-5 px-4 py-6 rounded-md w-full">
      <div className="flex gap-3 md:flex-row flex-col">
        <div className="max-w-[45px]">{icon}</div>

        <div>
          <h4 className="font-semibold dark:text-black text-[#070a0ff8] text-xl">
            {number}
          </h4>
          <p className={`text-slate-500 text-[14px]`}>{title}</p>
        </div>
      </div>
    </div>
  );
};

export default DashboardCard;
