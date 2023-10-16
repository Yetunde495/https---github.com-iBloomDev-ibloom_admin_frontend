// Collapsible.tsx
import React from "react";
import { FaAngleDown, FaAngleRight } from "react-icons/fa";
import { Header } from "./container";

// CollapsibleProps.ts
type CollapsibleProps = {
  title: string;
  desc?: string;
  isOpen: boolean;
  children?: React.ReactNode;
  onToggle: () => void;
};

const Collapsible: React.FC<CollapsibleProps> = ({
  title,
  desc,
  isOpen,
  onToggle,
  children,
}) => {
  return (
    <div className="">
      <div
        onClick={onToggle}
        className="flex cursor-pointer items-center justify-between gap-2 py-2 px-4"
      >
        <div>
          <h2 className="text-[17px] font-semibold text-[#282828c7] dark:text-white">
            {title}
          </h2>
          <p className="text-[13px]">{desc}</p>
        </div>

        <div className="ml-auto">
          <span>{isOpen ? <FaAngleDown /> : <FaAngleRight />}</span>
        </div>
      </div>

      {isOpen && <div className="py-2 px-4">{children}</div>}
    </div>
  );
};

export const FilterCollapsible: React.FC<CollapsibleProps> = ({
  title,
  isOpen,
  onToggle,
  children,
}) => {
  return (
    <div className="">
      <div
        onClick={onToggle}
        className="flex cursor-pointer items-center justify-start gap-2 py-2 px-4"
      >
        <span>{isOpen ? <FaAngleDown /> : <FaAngleRight />}</span>
        <p>{title}</p>
      </div>

      {isOpen && <div className="py-2 px-4">{children}</div>}
    </div>
  );
};

export default Collapsible;
