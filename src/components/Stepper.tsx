
import React from "react";

interface StepperProps {
  activeStep: number;
  steps: string[];
}

const Stepper: React.FC<StepperProps> = ({ activeStep, steps }) => {
  return (
    <div className="w-full lg:px-3">
      <div className="flex flex-wrap items-center justify-evenly mb-2">
        {steps.map((label, index) => (
          <div
            key={index}
            className="relative flex-1 w-1/2 sm:w-auto mb-3 sm:mb-0"
          >
            
            <div className="flex items-center justify-center  gap-3">
           
            <div>
            <div
            className={` flex items-center justify-center ${
              index === activeStep 
                ? "text-white"
                : "text-gray-600"
            }`}
          >
            <span  className={`w-8 h-8 flex items-center text-white justify-center rounded-full ${
              index === activeStep || index < activeStep
                ? "bg-primary"
                : "bg-[#999fa7]"
            }`}>
            {index < activeStep  ? (
            <svg
              className="h-4 w-4"
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
              <span>{index + 1}</span>
            )}
            </span>
          
          </div>
         
          <div
            className={`step-label text-sm font-medium ${
              index === activeStep || index < activeStep ? "text-primary" : "text-gray-600"
            }`}
          >
              {label}
          </div> 
            </div>
            {index !== 0 - 0 && (
            <span className="hidden sm:inline-block">
            <div
              className={` connector absolute h-0.5  ${
                index < activeStep  ? "bg-primary" : "bg-[#999fa7]"
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
