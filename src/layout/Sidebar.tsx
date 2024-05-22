import { Fragment, useEffect, useRef, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import Logo from "../assets/logo/ibloom5-final 1.png";
import {
  ADMIN_NAV_DATA,
  SUPERADMIN_NAV_DATA,
  VALIDATOR_NAV_DATA,
} from "./config";
import { SlSettings } from "react-icons/sl";
import { useApp } from "../context/AppContext";
import { RiLogoutCircleLine } from "react-icons/ri";
import Modal from "../components/modal";
import { IoMdCloseCircle } from "react-icons/io";
import { BiSearch } from "react-icons/bi";

const Sidebar = ({
  sidebarOpen,
  setSidebarOpen,
}: {
  sidebarOpen: any;
  setSidebarOpen: any;
}) => {
  const { user, signOut } = useApp();
  const location = useLocation();
  const { pathname } = location;
  const navigate = useNavigate();

  const trigger = useRef<any>(null);
  const sidebar = useRef<any>(null);
  // const [mini] = useState(false);

  const [logoutModal, setLogoutModal] = useState(false);

  const storedSidebarExpanded = localStorage.getItem("sidebar-expanded");
  const [sidebarExpanded, _setSidebarExpanded] = useState(
    storedSidebarExpanded === null ? false : storedSidebarExpanded === "true"
  );

  //nav configuration
  const navConfig = pathname.includes("superadmin")
    ? SUPERADMIN_NAV_DATA
    : pathname.includes("admin")
    ? ADMIN_NAV_DATA
    : VALIDATOR_NAV_DATA;
  user?.category === "student" ? null : null;

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
    <aside
      ref={sidebar}
      className={`absolute h-full left-0 top-0 z-9999 flex border-r border-stroke dark:border-strokedark ${
        sidebarOpen ? "lg:hidden" : "lg:static"
      } w-[250px] flex-col bg-white overflow-hidden text-[#4d4d4d] duration-300 ease-linear dark:bg-boxdark lg:static lg:translate-x-0 ${
        sidebarOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      {/* <!-- SIDEBAR HEADER --> */}
      <div className="flex items-center justify-between gap-2 px-6 pt-5.5 pb-5">
        <img src={Logo} alt="Logo" className="" />
        <button
          className="lg:hidden text-slate-500 hover:text-slate-600 text-2xl mb-2"
          onClick={() => setSidebarOpen(false)}
        >
          <IoMdCloseCircle />
        </button>
      </div>
      {/* <!-- SIDEBAR HEADER --> */}

      {/* Search Bar */}
      <div className="hidden lg:block px-3 pb-5">
        <form action="https://formbold.com/s/unique_form_id" method="POST">
          <div className="relative">
            <button className="absolute top-1/2 left-0 -translate-y-1/2 pl-3">
              <BiSearch />
            </button>

            <input
              type="text"
              placeholder="Search"
              className="w-full border border-stroke py-2.5 rounded-full bg-transparent text-sm pr-3 pl-8 focus:outline-none focus:border-1 focus:border-primary"
            />
          </div>
        </form>
      </div>

      <div className="sidebar-scrollbar custom-scrollbar flex flex-col overflow-y-hidden overflow-x-hidden pl-1  hover:overflow-y-auto duration-300 ease-linear">
        {/* <!-- Sidebar Menu --> */}
        <nav className={`py-4`}>
          {navConfig.map((navdata: any, index: number) => (
            <Fragment key={navdata.section + "-" + index}>
              <ul className="sm:gap-4 sm:mb-1 flex flex-col ">
                {navdata.children.map((nchild: any, nindex: number) => {
                  const NChildIcon = nchild.icon;
                  return (
                    <li key={nindex}>
                      <NavLink
                        to={nchild?.path}
                        className={`group relative flex items-center gap-2.5 font-medium  dark:text-primary rounded-sm  ${
                          !sidebarOpen ? "px-4 py-2" : "pl-5 py-3"
                        } font-medium  hover:text-primary duration-300 border-0 border-primary ease-in-out hover:border-l-[3px] hover:bg-[#1F9AC712] dark:hover:bg-meta-4 
                         ${
                           pathname.includes(nchild?.path)
                             ? "text-primary bg-[#1F9AC712] border-l-[3px] hover:text-white hover:bg-primary/90 dark:text-white"
                             : "text-[#4d4d4d]"
                         }`}
                      >
                        {typeof nchild.icon === "object" ? (
                          nchild.icon
                        ) : (
                          <NChildIcon />
                        )}
                        {!sidebarOpen && nchild.name}
                        <p className="block lg:hidden">{nchild.name}</p>
                      </NavLink>
                    </li>
                  );
                })}
              </ul>
            </Fragment>
          ))}

          <div className="absolute bottom-3 w-full overflow-hidden  border-t border-stroke">
            <NavLink
              to={`${
                pathname.includes("superadmin")
                  ? "/app/superadmin/settings"
                  : pathname.includes("admin")
                  ? "/app/admin/profile"
                  : "/app/validator/profile"
              }`}
              className={`group relative flex items-center gap-2.5 border-0 border-primary my-3 hover:border-l-[3px]  rounded-sm pl-5 py-3 px-2 font-medium hover:text-primary dark:text-primary hover:bg-[#1F9AC712] dark:hover:bg-primary/20 text-black duration-300 ease-in-out dark:hover-bg-meta-4 ${
                pathname.includes("profile") ||
                (pathname.includes("settings") &&
                  " hover:bg-primary hover:text-white text-primary bg-[#1F9AC712] dark:text-white border-primary border-l-[3px]")
              }`}
            >
              <SlSettings className="w-4 h-4" />
              Settings
            </NavLink>

            <NavLink
              to={""}
              onClick={() => setLogoutModal(true)}
              className={`group relative flex items-center gap-2.5  rounded-sm py-3 pl-5 px-2 font-medium hover:text-danger dark:text-primary dark:hover:bg-primary/20 text-danger/90 duration-300 ease-in-out dark:hover-bg-meta-4`}
            >
              <RiLogoutCircleLine className="w-5 h-5 text-danger" />
              Logout
            </NavLink>
          </div>
        </nav>
        {/* <!-- Sidebar Menu --> */}
      </div>
      <Modal
        show={logoutModal}
        onHide={() => setLogoutModal(false)}
        size="md:w-[450px] w-[350px]"
      >
        <div className="flex flex-col justify-center">
          <span className="mx-auto inline-block bg-red-600/10 rounded-full p-4 text-red-600 mb-3">
            <RiLogoutCircleLine size={24} />
          </span>

          <h1 className="text-lg text-black/90 mb-6 text-center">
            Are you sure you want to logout?
          </h1>

          <div className="-mx-3 flex flex-col gap-y-6 px-6">
            <div className="w-full px-3 2xsm:w-1/2">
              <button
                onClick={() => setLogoutModal(false)}
                className="block w-full rounded-full border border-primary bg-primary p-3 text-center font-medium text-white transition hover:opacity-95"
              >
                No
              </button>
            </div>
            <div className="w-full px-3 2xsm:w-1/2">
              <button
                onClick={() => {
                  signOut();
                  navigate("/");
                }}
                className="block w-full rounded-full text-meta-1 border border-meta-1 bg-white p-3 text-center font-medium hover:text-white transition hover:bg-meta-1"
              >
                Yes
              </button>
            </div>
          </div>
        </div>
      </Modal>
    </aside>
  );
};

export default Sidebar;
