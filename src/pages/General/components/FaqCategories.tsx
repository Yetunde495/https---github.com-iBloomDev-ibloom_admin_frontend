import { useState } from "react";
import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from "react-icons/ai";
import ColumnTabs, { ColumnTab } from "../../../components/columnTabs";


const FaqCategorySidebar: React.FC = () => {
    const tabs = ["Courses", "Payment Issues", "Organizations"];
    const [tab, setTab] = useState<string>(tabs[0]);
    const [open, setOpen] = useState(true);

    const toggleMobileSidebar = () => {
      setOpen(!open);
    };
    return (
<div className="sm:block hidden">
      <div
        className={` ${
          open
            ? "z-100 md:block w-[15.5rem] shadow"
            : "hidden md:block w-[2rem]"
        } overflow-hidden text-gray-100 h-full border-0 duration-300 dark:border-r dark:border-strokedark dark:bg-[#1d2939] sm:relative`}
      >
        <div
          className={` ${
            open ? "z-100 block" : "hidden"
          }  dark:text-gray-100 h-full w-full space-y-3 bg-white`}
        >
          <div className={"mb-6 flex items-center gap-1 py-2 px-3 shadow-sm"}>

            {open && (
              <button
                onClick={() => setOpen(!open)}
                className={`text-slate-700 z-50 ml-auto rounded-md`}
              >
                <AiOutlineDoubleLeft />
              </button>
            )}
          </div>

          <div className="">
            <ul className="custom-scrollbar h-full space-y-1 overflow-y-auto overflow-x-hidden px-2 pb-4 text-sm">
            <div>
            <ColumnTabs>
              {tabs.map((val: string, index: number) => (
                <ColumnTab key={index} activeTab={tab} onChange={setTab}>
                  {val}
                </ColumnTab>
              ))}
            </ColumnTabs>
          </div>
            </ul>
          </div>
        </div>
      </div>
      {!open && (
        <button
          onClick={toggleMobileSidebar}
          className={`absolute -left-8 -top-1  flex gap-1 items-center z-50 rounded-full bg-primary text-white  p-1.5`}
        >
          <span className="cursor-pointer">
            <AiOutlineDoubleRight />
          </span>
        </button>
      )}
    </div>
    )
}

export default FaqCategorySidebar;