/* eslint-disable @typescript-eslint/no-explicit-any */
import DefaultLayout from "../../layout/DefaultLayout";
import { useState } from "react";
import UpcomingLiveClass from "../AllComponents/liveClasses/UpcomingLiveClass";
import OngoingLiveClass from "../AllComponents/liveClasses/OngoingLiveClass";

interface TabsProps {
  tabs: { label: string; content: React.ReactNode }[];
}

const Tabs: React.FC<TabsProps> = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState<string>(
    tabs.length > 0 ? tabs[0]?.label : ""
  );

  const handleClick = (
    e: React.MouseEvent<HTMLButtonElement>,
    newActiveTab: string
  ) => {
    e.preventDefault();
    setActiveTab(newActiveTab);
  };

  return (
    <div className="">
      <div className="flex border-b border-zinc-200 max-w-md">
        {tabs.map((tab) => (
          <button
            key={tab.label}
            className={`${
              activeTab === tab.label ? "border-b-2 border-primary/90" : ""
            } flex-1 text-gray-700 font-medium py-2`}
            onClick={(e) => handleClick(e, tab.label)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="">
        {tabs.map((tab) => (
          <div
            key={tab.label}
            style={{ display: activeTab === tab.label ? "block" : "none" }}
          >
            {tab.content}
          </div>
        ))}
      </div>
    </div>
  );
};

const tabData = [
  {
    label: "Ongoing",
    content: <OngoingLiveClass />,
  },
  {
    label: "Upcoming",
    content: <UpcomingLiveClass />,
  },
];

const LiveClasses = () => {
  return (
    <DefaultLayout>
      <section className="ml-10">
        <div className="mt-1">
          <h1 className="text-xl font-bold dark:text-slate-200">My Courses</h1>
        </div>

        <div className="mt-10">
          <Tabs tabs={tabData} />
        </div>
      </section>
    </DefaultLayout>
  );
};

export default LiveClasses;
