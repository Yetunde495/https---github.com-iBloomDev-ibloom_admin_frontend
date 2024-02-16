import { useState } from "react";
import Breadcrumb from "../../components/BreadCrumb";
import DefaultLayout from "../../layout/DefaultLayout";
import Stepper from "../../components/Stepper2";
import LiveClassDetails from "./LiveClassDetails";

const CreateLiveClasses = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [tabData, setTabData] = useState([
    {
      stepNumber: 1,
      label: "Create Live Class",
      completed: false,
      content: <LiveClassDetails />,
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
              { name: "Live Classes", path: "live-classes" },
              { name: "Create Live Classes", path: "" },
            ]}
            homeRoute={""}
            homeRouteName={""}
          />
        </div>
        <div className="mt-6">
          <div className="bg-white px-10 py-5">
            <Stepper
              steps={tabData}
              activeStep={activeStep}
              setCompleted={handleSetCompleted}
            />
            <div className="py-8">
              {tabData.map(
                (tab, index) =>
                  activeStep === index && (
                    <div key={tab.label}>{tab.content}</div>
                  )
              )}
            </div>
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
};

export default CreateLiveClasses;
