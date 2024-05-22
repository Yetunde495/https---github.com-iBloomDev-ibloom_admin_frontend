import React from "react";

interface StepperProps {
  activeStep: number;
  steps: string[];
}

const Stepper: React.FC<StepperProps> = ({ activeStep, steps }) => {
  return (
    <div className="w-full lg:px-3">
      <div className="flex flex-wrap items-center justify-around mb-2">
        {steps.map((label, index) => (
          <div
            key={index}
            className="relative flex-1 w-1/2 sm:w-auto mb-3 sm:mb-0"
          >
            <div className="flex items-center w-full">
              <div>
                <div
                  className={` flex items-center justify-center ${
                    index === activeStep ? "text-white" : "text-gray-600"
                  }`}
                >
                  <span
                    className={`w-6 h-6 flex items-center text-white justify-center rounded-full ${
                      index === activeStep || index < activeStep
                        ? "bg-primary"
                        : "bg-[#EBEBEB]"
                    }`}
                  >
                    {index < activeStep ? (
                      <svg
                        className="h-3 w-3"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    ) : (
                      <span className="text-xs">{label}</span>
                    )}
                  </span>
                </div>
              </div>
              {index !== (steps.length -1) && (
                <span className="sm:inline-block w-full">
                  <div
                    className={` h-1 w-full  ${
                      index < activeStep ? "bg-primary" : "bg-[#EBEBEB]"
                    } `}
                  />
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stepper;
