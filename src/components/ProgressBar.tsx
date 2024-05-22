// src/components/ProgressBar.tsx
import React from "react";
import { IoMdArrowDropdown } from "react-icons/io";

interface ProgressBarProps {
  percent: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ percent }) => {
  return (
    <div className="relative w-full">
      <div
        className="relative text-primary"
        style={{ left: `${percent}%`, marginLeft: "-10px" }}
      >
        <IoMdArrowDropdown size={18} />
      </div>
      <div className="relative w-full bg-gray h-3 rounded-full overflow-hidden border border-primary">
        <div
          className="absolute top-0 left-0 h-full bg-primary"
          style={{ width: `${percent}%` }}
        ></div>
        <div
          className="h-full bg-gray-300"
          style={{ width: `${100 - percent}%` }}
        ></div>
      </div>
    </div>
  );
};

export const ProgressBar2: React.FC<ProgressBarProps> = ({ percent }) => {
  const circumference = 2 * Math.PI * 20; // Assuming a radius of 30 // Change to desired color

  return (
    <div className="relative items-center justify-center overflow-hidden rounded-full">
      <svg className="w-14 h-14">
        <circle
          className="text-slate-200"
          strokeWidth="3"
          stroke="currentColor"
          fill="transparent"
          r="20"
          cx="25"
          cy="25"
        />
        <circle
          className="text-blue-600"
          strokeWidth="3"
          strokeDasharray={circumference}
          strokeDashoffset={circumference - (percent / 100) * circumference}
          strokeLinecap="round"
          stroke="currentColor"
          fill="transparent"
          r="20"
          cx="25"
          cy="25"
        />
      </svg>
      <span className="absolute top-4 left-3 text-sm text-primary">{`${percent}%`}</span>
    </div>
  );
};

export const ProgressBar3: React.FC<ProgressBarProps> = ({ percent }) => {
  return (
    <div className="relative w-full">
      <div className="relative w-full bg-gray h-2 rounded-b-md overflow-hidden">
        <div
          className="absolute top-0 left-0 h-full bg-primary"
          style={{ width: `${percent}%` }}
        ></div>
        <div
          className="h-full bg-gray-300"
          style={{ width: `${100 - percent}%` }}
        ></div>
      </div>
    </div>
  );
};



interface ProgressBar4Props {
  progress: number;
}

export const ProgressBar4: React.FC<ProgressBar4Props> = ({ progress }) => {
  return (
    <div className="w-full bg-slate-300 h-4 rounded-lg">
      <div
        className="bg-blue-500 h-4 rounded-lg text-white text-center text-lg"
        style={{ width: `${progress}%` }}
      >{progress}</div>
    </div>
  );
};




export default ProgressBar;
