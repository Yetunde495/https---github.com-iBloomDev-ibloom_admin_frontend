import React from "react";
import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from "react-icons/ai";
import { SearchpageFilter } from "./SearchFilterOptions";
import { FaFilter } from "react-icons/fa6";

export default function FilterSidebar() {
  const [open, setOpen] = React.useState(true);

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
          <div className={"mb-6 flex items-center gap-1 px-3 shadow-sm"}>
            {open ? (
              <div className="relative flex gap-3 items-center py-1.5 ml-2">
                <span className="cursor-pointer">
                  <FaFilter className="text-slate-300" />
                </span>
                Filters
              </div>
            ) : (
              <button
                onClick={() => setOpen(!open)}
                className={`text-slate-200 z-50 ml-auto rounded-md`}
              >
                <AiOutlineDoubleRight />
              </button>
            )}

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
            <ul className="custom-scrollbar h-full space-y-1 overflow-y-auto overflow-x-hidden px-2 pb-4 pt-2 text-sm">
              <SearchpageFilter />
            </ul>
          </div>
        </div>
      </div>
      {!open && (
        <button
          onClick={toggleMobileSidebar}
          className={`absolute -left-8 -top-1.5 flex gap-1 items-center z-50 rounded-full bg-transparent  p-2`}
        >
          <span className="cursor-pointer">
            <FaFilter />
          </span>
          Filters
        </button>
      )}
    </div>
  );
}
