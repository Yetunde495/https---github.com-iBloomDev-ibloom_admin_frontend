import { useEffect, useRef, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { LessonNavData } from "../data/mockData";
import { BsArrow90DegLeft, BsCheckLg } from "react-icons/bs";
import { MdKeyboardDoubleArrowLeft, MdKeyboardDoubleArrowRight } from "react-icons/md";

const LessonSidebar = ({
  sidebarOpen,
  setSidebarOpen,
}: {
  sidebarOpen: any;
  setSidebarOpen: any;
}) => {
  const location = useLocation();
  const { pathname } = location;
  const navigate = useNavigate()

  const trigger = useRef<any>(null);
  const sidebar = useRef<any>(null);

  const storedSidebarExpanded = localStorage.getItem("sidebar-expanded");
  const [sidebarExpanded, _setSidebarExpanded] = useState(
    storedSidebarExpanded === null ? false : storedSidebarExpanded === "true"
  );

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }: { [key: string]: any }) => {
      if (!sidebar.current || !trigger.current) return;
      if (
        !sidebarOpen ||
        sidebar.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setSidebarOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  }, []);

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }: { [key: string]: any }) => {
      if (!sidebarOpen || keyCode !== 27) return;
      setSidebarOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  }, []);

  useEffect(() => {
    localStorage.setItem("sidebar-expanded", sidebarExpanded.toString());
    if (sidebarExpanded) {
      document.querySelector("body")?.classList.add("sidebar-expanded");
    } else {
      document.querySelector("body")?.classList.remove("sidebar-expanded");
    }
  }, [sidebarExpanded]);

  return (
    <section className="relative h-[85vh] 2xl:h-[93vh]">
      <aside
        ref={sidebar}
        className={`h-[85vh] 2xl:h-[93vh] absolute left-0 top-0 custom-scrollbar  z-9999 flex border-r border-stroke overflow-y-hidden font-comic dark:border-strokedark flex-col bg-white text-[#4d4d4d] duration-300 ease-linear dark:bg-boxdark lg:translate-x-0 ${
          sidebarOpen ? "w-18" : "w-[330px]"
        }`}
      >
        <div className="flex items-center justify-between gap-2 px-6 pt-5 pb-5"  onClick={() => navigate(-1)}>
        <span
            className="flex items-center gap-2 text-black/90 text-lg hover:text-primary cursor-pointer w-full"
           
          >
            <BsArrow90DegLeft /> {!sidebarOpen && "Go Back"}
          </span>
        </div>
        {/* <!-- SIDEBAR HEADER --> */}

        <div className="sidebar-scrollbar custom-scrollbar flex flex-col overflow-y-hidden overflow-x-hidden  hover:overflow-y-auto duration-300 ease-linear">
          {/* <!-- Sidebar Menu --> */}
          <nav
            className={`py-2 ${
              sidebarOpen ? "px-0" : "px-4"
            } flex flex-col gap-3`}
          >
            {LessonNavData.map((navdata: any, index: number) => (
              <div key={index} className="sm:mb-1">
                <div>
                  <NavLink
                    to={`/app/students/lesson/${navdata?.number}`}
                    className={`group relative flex items-center gap-2.5 font-medium  dark:text-primary rounded-sm  ${
                      !sidebarOpen ? "px-4 py-2" : "pl-5 py-3"
                    } font-medium  hover:text-primary text-[#4d4d4d] duration-300 ease-in-out border-0  hover:border-l-[3px] hover:bg-[#1F9AC712] dark:hover:bg-meta-4 ${
                      pathname.includes(navdata?.number)
                        ? "text-primary bg-[#1F9AC712] dark:text-white border-0  border-l-[3px]"
                        : "text-[#4d4d4d]"
                    }`}
                  >
                    <div>
                      {navdata?.completed ? (
                        <span className="w-8 h-8 flex items-center justify-center rounded-full bg-success text-white text-lg font-normal">
                          <BsCheckLg />
                        </span>
                      ) : (
                        <span className="w-8 h-8 flex items-center justify-center rounded-full bg-[#333333] text-white text-lg font-normal">
                          {navdata?.number}
                        </span>
                      )}
                    </div>
                    {!sidebarOpen && (
                      <p className="text-lg font-normal">{navdata?.lesson}</p>
                    )}
                  </NavLink>
                </div>
              </div>
            ))}
          </nav>
          {/* <!-- Sidebar Menu --> */}
        </div>
      </aside>
      <div
        className={`absolute top-1/2 bg-primary text-white z-99 text-lg w-9 h-9 flex items-center justify-center rounded-full  ${
          sidebarOpen ? "-right-24" : "-right-[350px]"
        }`}
      >
        <button className="" onClick={() => setSidebarOpen(!sidebarOpen)}>
          {sidebarOpen ? <MdKeyboardDoubleArrowRight /> : <MdKeyboardDoubleArrowLeft />}
        </button>
      </div>
    </section>
  );
};

export default LessonSidebar;
