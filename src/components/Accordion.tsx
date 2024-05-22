// src/components/Accordion.tsx
import React, { useState } from "react";
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from "react-icons/ai";

interface AccordionProps {
  items: {
    title: string | React.ReactNode;
    content: React.ReactNode;
    showIcon?: boolean;
    icon?: React.ReactNode;
    accordionHeaderBg?: string;
  }[];
  initialOpenIndex?: number | null;
}

const Accordion: React.FC<AccordionProps> = ({ items, initialOpenIndex }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(
    initialOpenIndex !== undefined ? Number(initialOpenIndex) : null
  );

  const toggleItem = (index: number) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="w-full">
      {items.map((item, index) => {
        return (
          <div key={index} className="mb-2">
            <button
              onClick={() => toggleItem(index)}
              className="w-full py-2 text-left bg-gray-200 flex justify-between items-center"
            >
              <div className="flex ml-4 gap-2 items-center">
                {item.showIcon && <div className="text-zinc-500">{item.icon}</div>}
                <span style={{ color: item.accordionHeaderBg }}>
                  {item.title}
                </span>
              </div>
              {openIndex === index ? (
                <AiOutlineMinusCircle className="text-primary mr-4" size={22} />
              ) : (
                <AiOutlinePlusCircle className="text-primary mr-4" size={22} />
              )}
            </button>
            {openIndex === index && (
              <div className="p-2 mx-2 text-sm bg-white border mt-2 border-slate-100 mb-5 rounded-md">
                {item.content}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Accordion;
