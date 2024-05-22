import React, { useEffect, useRef, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { CurriculumSidebarData, GradesData } from "../data/mockData";
import {
  MdKeyboardDoubleArrowLeft,
  MdKeyboardDoubleArrowRight,
} from "react-icons/md";
import { Select3 } from "../components/form/Select";
import { FiUpload } from "react-icons/fi";
import SidebarLinkGroup from "./SidebarLinkGroup";
import { RiArrowDownSLine } from "react-icons/ri";
import UploadCurriculum from "../pages/PageComponents/UploadCurriculum";

const CurriculumSidebar = ({
  sidebarOpen,
  setSidebarOpen,
  setTopic,
}: {
  sidebarOpen: any;
  setSidebarOpen: any;
  setTopic: any;
}) => {
  const location = useLocation();
  const { pathname } = location;
  // const navigate = useNavigate();

  const trigger = useRef<any>(null);
  const sidebar = useRef<any>(null);
  const [uploadModal, setUploadModal] = useState(false);

  const storedSidebarExpanded = localStorage.getItem("sidebar-expanded");
  const [sidebarExpanded, setSidebarExpanded] = useState(
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
    <section className="relative h-[70vh] xl:h-[82vh] 2xl:h-[85vh]">
      <aside
        ref={sidebar}
        className={`h-[70vh] xl:h-[82vh] 2xl:h-[85vh] absolute left-0 top-0 shadow-2 custom-scrollbar  z-9999 flex overflow-y-hidden font-comic dark:border-strokedark flex-col bg-white text-[#4d4d4d] duration-300 ease-linear dark:bg-boxdark lg:translate-x-0 ${
          sidebarOpen ? "w-0 hidden" : "w-[230px]"
        }`}
      >
        <div className="flex items-center justify-between gap-2 px-6 border-b border-stroke pt-5 pb-5">
          <Select3 label="" name="" onChange={() => {}}>
            {GradesData.map((val, index) => (
              <option key={index}>{val}</option>
            ))}
          </Select3>
        </div>
        {/* <!-- SIDEBAR HEADER --> */}

        <div className="sidebar-scrollbar custom-scrollbar flex flex-col overflow-y-hidden overflow-x-hidden  hover:overflow-y-auto duration-300 ease-linear">
          {/* <!-- Sidebar Menu --> */}
          <nav className={`py-2 ${sidebarOpen ? "px-0" : "px-0"} `}>
            {CurriculumSidebarData.map((navdata: any, index: number) => (
              <div key={index} className="sm:mb-1">
                <ul className="mb-4 flex flex-col gap-1.5">
                  <SidebarLinkGroup
                    key={index}
                    activeCondition={
                      pathname === "/app" || pathname.includes(navdata?.subject)
                    }
                  >
                    {(handleClick: () => void, open: boolean) => {
                      return (
                        <React.Fragment>
                          <NavLink
                            to="#"
                            className={`group relative text-xl text-[#4F4F4F] hover:text-[#4F4F4F] flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium duration-300 ease-in-out ${
                              (pathname === "/app" ||
                                pathname.includes(navdata?.path)) &&
                              "bg-graydark dark:bg-meta-4"
                            }`}
                            onClick={(e) => {
                              e.preventDefault();
                              sidebarExpanded
                                ? handleClick()
                                : setSidebarExpanded(true);
                            }}
                          >
                            <RiArrowDownSLine
                              style={{ width: 25, height: 25 }}
                              className={`fill-current ${open && "rotate-180"}`}
                            />
                            {navdata.subject}
                          </NavLink>
                          {/* <!-- Dropdown Menu Start --> */}
                          <div
                            className={`translate transform overflow-hidden ${
                              !open ? "hidden" : "block"
                            }`}
                          >
                            <ul className="mb-5.5 mt-1 flex flex-col gap-1">
                              {navdata.topics.map(
                                (schild: any, sindex: number) => {
                                  return (
                                    <li
                                      key={schild.name + "-" + sindex}
                                      onClick={() => setTopic(schild.name)}
                                    >
                                      <NavLink
                                        to={`/app/${
                                          pathname.includes("superadmin")
                                            ? "superadmin"
                                            : "admin"
                                        }/content-management/curriculum/${
                                          navdata.subject
                                        }/${schild.name}`}
                                        className={({ isActive }) =>
                                          "group relative text-[#4d4d4d] block pl-6 w-full hover:bg-[#1F9AC712] py-1.5  rounded-md px-2 font-medium duration-300 ease-in-out hover:text-primary " +
                                          (isActive && "")
                                        }
                                      >
                                        <span>Topic {sindex + 1}: </span>{" "}
                                        {schild.name}
                                      </NavLink>
                                    </li>
                                  );
                                }
                              )}
                            </ul>
                          </div>
                          {/* <!-- Dropdown Menu End --> */}
                        </React.Fragment>
                      );
                    }}
                  </SidebarLinkGroup>
                </ul>
              </div>
            ))}
          </nav>
          {/* <!-- Sidebar Menu --> */}
        </div>

        <div
          onClick={() => setUploadModal(true)}
          className="bg-primary text-white font-medium cursor-pointer w-full py-3 px-8 flex gap-2 items-center absolute bottom-0"
        >
          <FiUpload /> Upload Curriculum
        </div>
      </aside>
      <div
        className={`absolute top-1/2 bg-primary text-white z-99 text-lg w-9 h-9 flex items-center justify-center rounded-full  ${
          sidebarOpen ? "left-1" : "-right-[255px]"
        }`}
      >
        <button className="" onClick={() => setSidebarOpen(!sidebarOpen)}>
          {sidebarOpen ? (
            <MdKeyboardDoubleArrowRight />
          ) : (
            <MdKeyboardDoubleArrowLeft />
          )}
        </button>
      </div>
      <UploadCurriculum
        show={uploadModal}
        setShow={() => setUploadModal(false)}
        data={null}
      />
    </section>
  );
};

export default CurriculumSidebar;
