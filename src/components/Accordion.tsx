// src/components/Accordion.tsx
import React, { useState } from "react";
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from "react-icons/ai";
import { MdPlayCircleFilled } from "react-icons/md";

interface AccordionProps {
  items: {
    title: string | React.ReactNode;
    content: React.ReactNode;
    showIcon?: boolean;
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
              <div className="flex ml-8 gap-2 items-center">
                {item.showIcon && <MdPlayCircleFilled />}
                <span style={{ color: item.accordionHeaderBg }}>
                  {item.title}
                </span>
              </div>
              {openIndex === index ? (
                <AiOutlineMinusCircle className="text-primary mr-6" size={22} />
              ) : (
                <AiOutlinePlusCircle className="text-primary mr-6" size={22} />
              )}
            </button>
            {openIndex === index && (
              <div className="py-2  px-4 mx-4 text-sm bg-[#FAFAFA] border mt-2 border-slate-100 mb-5 rounded-md">
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
