// PillList.tsx

import React from "react";
import { BsCloudArrowDown, BsCodeSquare, BsFileEarmarkText} from "react-icons/bs";
import { IoCodeSlash } from "react-icons/io5";
import { MdArrowOutward, MdOutlineFileDownload } from "react-icons/md";
import { RxQuestionMarkCircled } from "react-icons/rx";

const PillList: React.FC<{ onSelect: (pill: string) => void }> = ({ onSelect }) => {
  const pills = [
    { name: "Upload Video", icon: <BsCloudArrowDown /> },
    { name: "Article(Reading)", icon: <BsFileEarmarkText /> },
    { name: "Presentation Slide", icon: <BsFileEarmarkText /> },
    { name: "Add Quiz", icon: <RxQuestionMarkCircled /> },
    { name: "Coding Exercise", icon: <BsCodeSquare /> },
    { name: "External Resource", icon: <MdArrowOutward /> },
    { name: "Downloadable Resource", icon: <BsFileEarmarkText /> },
    { name: "Source Code", icon: <IoCodeSlash /> },
    { name: "Assignment", icon: <MdOutlineFileDownload /> }
  ];

  return (
    <div className="grid md:grid-cols-3 grid-cols-2 justify-center gap-4">
      {pills.map((pill, index) => (
        <div key={index} className="m-2 cursor-pointer flex items-center gap-2 shadow-2 py-3 px-6 hover:bg-slate-200" onClick={() => onSelect(pill.name)}>
          <span className="bg-primary/70 text-white p-2 rounded">{pill.icon}</span>
          <p className="text-primary font-medium">{pill.name}</p>
        </div>
      ))}
    </div>
  );
};

export default PillList;
