// import { Link } from 'react-router-dom';
import { NavLink } from "react-router-dom";
// import DarkModeSwitcher from "./DarkModeSwitcher";
import DropdownNotification from "./DropdownNotification";
// import DropdownMessage from './DropdownMessage';
import DropdownUser from "./DropdownUser";
import { BiSearch } from "react-icons/bi";
import { BsList } from "react-icons/bs";

type SidebarProps = {
  sidebarOpen: boolean;
  setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const Header = ({ sidebarOpen, setSidebarOpen }: SidebarProps) => {
  return (
    <header className="sticky top-0 z-999 flex w-full bg-white dark:bg-boxdark dark:drop-shadow-none">
      <div className="flex flex-grow items-center gap-3 py-4 px-4 md:px-6 2xl:px-11">
        <div className="flex items-center gap-2 lg:hidden">
          {/* <!-- Hamburger Toggle BTN --> */}
          <button
            aria-controls="sidebar"
            onClick={(e) => {
              e.stopPropagation();
              setSidebarOpen(!sidebarOpen);
            }}
            className="z-99999 block rounded-sm  bg-white p-1 shadow-sm dark:border-strokedark dark:bg-boxdark"
          >
            <BsList className="text-primary font-extrabold w-6 h-6" />
          </button>
          {/* <!-- Hamburger Toggle BTN --> */}
        <NavLink to="/app">

          
         
        </NavLink>
        </div>
        
        <div className="flex items-center gap-2">
          

          <div className="lg:hidden block">
            <form action="https://formbold.com/s/unique_form_id" method="POST">
              <div className="relative">
                <button className="absolute top-1/2 left-0 -translate-y-1/2 pl-3">
                  <BiSearch />
                </button>

                <input
                  type="text"
                  placeholder="Search"
                  className="w-full lg:w-65 border  border-stroke py-2 rounded-md bg-transparent text-sm pr-3 pl-8 focus:outline-none focus:border-1 focus:border-primary"
                />
              </div>
            </form>
          </div>
        </div>

        <div className="flex ms-auto items-center gap-3 2xsm:gap-7">
          <ul className="flex items-center gap-2 2xsm:gap-4">
            {/* <!-- Dark Mode Toggler --> */}
            {/* <DarkModeSwitcher /> */}
            {/* <!-- Dark Mode Toggler --> */}

            {/* <!-- Notification Menu Area --> */}
            <DropdownNotification />
            {/* <!-- Notification Menu Area --> */}

            {/* <!-- Chat Notification Area --> */}
            {/* <DropdownMessage /> */}
            {/* <!-- Chat Notification Area --> */}
          </ul>

          {/* <!-- User Area --> */}
          <DropdownUser />
          {/* <!-- User Area --> */}
        </div>
      </div>
    </header>
  );
};

export default Header;
