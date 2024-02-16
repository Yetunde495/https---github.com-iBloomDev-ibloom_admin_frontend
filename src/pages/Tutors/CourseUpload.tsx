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
  const [courseData, setCourseData] = useState<any>({
    tags: [],
  });
  const [tabData, setTabData] = useState([
    {
      stepNumber: 1,
      label: "Course Details",
      completed: false,
    },
    {
      stepNumber: 2,
      label: "Course Upload",
      completed: false,
    },
    {
      stepNumber: 3,
      label: "Assessment",
      completed: false,
    },
    {
      stepNumber: 4,
      label: "Settings",
      completed: false,
    },
  ]);

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
          <button onClick={() => setActiveStep(activeStep - 1)}>Prev</button>
          <button onClick={() => console.log(courseData)}>Console</button>
          <button onClick={() => handleSetCompleted(activeStep)}>
            Complete Step
          </button>

          <div className="bg-white px-10 py-5">
            <Stepper
              steps={tabData}
              activeStep={activeStep}
              setCompleted={handleSetCompleted}
            />
            <div className="py-8">
                <div>
                {activeStep === 0 ? (
                  <div>
                    <CourseDetails
                      courseData={courseData}
                      setCourseData={setCourseData}
                    />
                  </div>
                ) : activeStep === 1 ? (
                  <CourseCreation
                    onProceed={() => handleSetCompleted(activeStep + 1)}
                  />
                ) : activeStep === 2 ? (
                  <Assessment />
                ) : activeStep === 3 && (
                  <div>Hi</div>
                )}
                </div>
           
            </div>
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
};

export default CourseUpload;
