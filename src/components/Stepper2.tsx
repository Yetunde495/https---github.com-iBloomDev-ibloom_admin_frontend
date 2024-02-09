import React from 'react';

interface Step {
  stepNumber: number;
  label: string;
  completed: boolean;
}

interface StepperProps {
  steps: Step[];
  activeStep: number;
  setCompleted: (stepNumber: number) => void;
}

const Stepper: React.FC<StepperProps> = ({ steps, activeStep }) => {
  return (
    <div className="flex w-full justify-between items-center border-b border-zinc-200 py-3.5">
      {steps.map((step, index) => (
        <div key={index}>
        <div  className="flex items-center">
          <div
            className={`rounded-full w-7 h-7 flex items-center justify-center ${
              step.completed ? 'bg-[#21A878]' : index === activeStep ? 'bg-[#F88D3F]' : 'bg-[#F88D3F] opacity-50'
            }`}
          >
            {step.completed ? (
              <svg className=" text-white" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M9.9 15.9L6 12l1.4-1.4 2.5 2.5L15.6 7l1.4 1.4-6.1 6.1z"
                />
              </svg>
            ) : (
              <span className="text-white">{step.stepNumber}</span>
            )}
          </div>
          {/* {index < steps.length - 1 && <div className="h-px bg-slate-600 w-16" />} */}
          <div className="ml-2">{step.label}</div>
          
        </div>
        </div>
      ))}
    </div>
  );
};

export default Stepper;
