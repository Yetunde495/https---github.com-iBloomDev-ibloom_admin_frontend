// import { Link } from 'react-router-dom';
import { NavLink } from "react-router-dom";
import DropdownNotification from "./DropdownNotification";
import { BiSearch } from "react-icons/bi";
import Logo from "../assets/logo/ibloom2 4.svg";
import { DropdownUser2 } from "./DropdownUser";

const Header2 = () => {
  return (
    <header className="sticky top-0 z-999 flex w-full bg-primary text-white dark:bg-boxdark dark:drop-shadow-none">
      <div className="flex flex-grow items-center justify-between gap-3 py-4 px-4 md:px-6 2xl:px-11">
        <div className="flex items-center gap-2">
          <NavLink to="/app">
            <img src={Logo} alt="Logo" className="w-26" />
          </NavLink>
        </div>

        <div className="flex items-center gap-2">
          <div className="block">
            <form action="https://formbold.com/s/unique_form_id" method="POST">
              <div className="relative">
                <button className="absolute top-1/2 left-0 -translate-y-1/2 pl-3">
                  <BiSearch />
                </button>

                <input
                  type="text"
                  placeholder="Search"
                  className="w-full lg:w-125 md:w-96 placeholder:text-white/90 border  border-stroke py-2 rounded-full text-white bg-transparent text-sm pr-3 pl-8 focus:outline-none focus:border-1 focus:border-white"
                />
              </div>
            </form>
          </div>
        </div>

        <div className="flex items-center gap-3 2xsm:gap-7">
          <ul className="flex items-center gap-2 2xsm:gap-4">
            <DropdownNotification />
          </ul>

          {/* <!-- User Area --> */}
          <DropdownUser2 />
          {/* <!-- User Area --> */}
        </div>
      </div>
    </header>
  );
};

export default Header2;
