/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import Breadcrumb from "../../components/BreadCrumb";
import DefaultLayout from "../../layout/DefaultLayout";
import CourseDetails from "../AllComponents/tutorCourse/CourseDetails";
import CourseCreation from "../AllComponents/tutorCourse/CourseCreation";
import Assessment from "../AllComponents/tutorCourse/Assessment";
import Stepper from "../../components/Stepper2";




const CourseUpload = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [tabData, setTabData] = useState([
    {
      stepNumber: 1,
      label: "Course Details",
      completed: false,
      content: <CourseDetails />,
    },
    {
      stepNumber: 2,
      label: "Course Upload",
      completed: false,
      content: <CourseCreation onProceed={() => handleSetCompleted(activeStep + 1)} />,
    },
    {
      stepNumber: 3,
      label: "Assessment",
      completed: false,
      content: <Assessment />,
    },
    {
      stepNumber: 4,
      label: "Settings",
      completed: false,
      content: "hi",
    },
  ])


  const handleStepClick = () => {
    setActiveStep(activeStep + 1);
  };

  const handleSetCompleted = (stepNumber: number) => {
    const updatedTabData = tabData.map((step, index) => {
      if (index === stepNumber) {
        return { ...step, completed: true };
      }
      return step;
    });
    setTabData(updatedTabData);
  };


  
  return (
    <DefaultLayout>
      <section className="px-6">
      <div className="flex justify-start pt-6">
        <Breadcrumb
          routes={[
            { name: "My Courses", path: "Courses" },
            { name: "Create Course", path: "" },
          ]}
          homeRoute={""}
          homeRouteName={""}
        />
      </div>
      <div className="mt-6">
        <button onClick={() => handleStepClick()}>Next</button>
        <button onClick={() => handleSetCompleted(activeStep)}>Complete Step</button>

        <div className="bg-white px-10 py-5">
          <Stepper
            steps={tabData}
            activeStep={activeStep}
            setCompleted={handleSetCompleted}
          />
          <div className="py-8">
            {tabData.map(
              (tab, index) =>
                activeStep === index && <div key={tab.label}>{tab.content}</div>
            )}
          </div>
        </div>
      </div>
      </section>
      
      
    </DefaultLayout>
  );
};

export default CourseUpload;
