/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import AccordionData from "./AccordionData";
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from "react-icons/ai";

const CourseAccordion = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleItem = (index: number) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? -1 : index));
  };

  const items = [
    {
      title: "Course Outline",
      content: <AccordionData />,
    },
  ];

  return (
    <div className="mx-auto bg-[#fcfcfc] mt-10 mb-15 min-h-sceen w-full">
      <div className="w-full">
        {items.map((item, index) => (
          <div key={index} className="mb-2 pt-3 border-b border-stroke">
            <button
              onClick={() => toggleItem(index)}
              className="w-full py-2 text-left bg-gray-200 flex justify-between items-center"
            >
              <span className="ml-10">{item.title}</span>
              {openIndex === index ? (
                <AiOutlineMinusCircle className="text-primary mr-8" size={22} />
              ) : (
                <AiOutlinePlusCircle className="text-primary mr-8" size={22} />
              )}
            </button>
            {openIndex === index && <div className="p-2">{item.content}</div>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseAccordion;
