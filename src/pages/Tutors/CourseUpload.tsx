/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import Breadcrumb from "../../components/BreadCrumb";
import DefaultLayout from "../../layout/DefaultLayout";
import CourseDetails from "../AllComponents/tutorCourse/CourseDetails";
import CourseCreation from "../AllComponents/tutorCourse/CourseCreation";
import Assessment from "../AllComponents/tutorCourse/Assessment";

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
    <div className="bg-white px-10 py-5">
      <div className="flex border-b border-zinc-200">
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
      <div className="mt-10">
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
    label: "Course Details",
    content: <CourseDetails />,
  },
  {
    label: "Course Upload",
    content: <CourseCreation />,
  },
  {
    label: "Assessment",
    content: <Assessment />,
  },
  {
    label: "Settings",
    content: "hi",
  },
];

const CourseUpload = () => {
  return (
    <DefaultLayout>
      <div className="flex justify-start pt-6">
        <Breadcrumb
          routes={[
            { name: "My Courses", path: "Courses" },
            { name: "Create Course", path: "" },
          ]}
          pageName={""}
          homeRoute={""}
          homeRouteName={""}
        />
      </div>
      <div className="mt-10">
        <Tabs tabs={tabData} />
      </div>
    </DefaultLayout>
  );
};

export default CourseUpload;
