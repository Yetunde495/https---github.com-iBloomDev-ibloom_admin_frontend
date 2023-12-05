// src/components/Accordion.tsx
import React, { useState } from 'react';
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from 'react-icons/ai';

interface AccordionProps {
  items: { title: string; content: React.ReactNode }[];
}

const Accordion: React.FC<AccordionProps> = ({ items }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);


  const toggleItem = (index: number) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? -1 : index));
  };

  return (
    <div className="w-full">
      {items.map((item, index) => (
        <div key={index} className="mb-2 border-b border-stroke">
          <button
            onClick={() => toggleItem(index)}
            className="w-full p-2 text-left bg-gray-200 flex justify-between items-center"
          >
            <span>{item.title}</span>
            {openIndex === index ? (
              <AiOutlineMinusCircle className="text-primary" size={22} />
            ) : (
              <AiOutlinePlusCircle className="text-primary" size={22} />
            )}
          </button>
          {openIndex === index && (
            <div className="p-2">{item.content}</div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
