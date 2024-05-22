import { useEffect, useRef, useState } from "react";
import { Link, useNavigate} from "react-router-dom";
import LogoImg from "../assets/logo/ibloom5-final 1.png"
import Button from "../components/button";

const DropdownUsers = () => {
  // const navigate = useNavigate();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const trigger = useRef<HTMLAnchorElement | null>(null);
  const dropdown = useRef<HTMLDivElement | null>(null);

  

  useEffect(() => {
    const clickHandler = ({ target }: any) => {
      if (!dropdown.current) return;
      if (trigger.current && trigger.current.contains(target)) {
        // Handle trigger click
        return;
      }
      if (dropdown.current.contains(target)) return;
      setDropdownOpen(false);
    };

    document.addEventListener("click", clickHandler);

    return () => {
      if (trigger.current) {
        document.removeEventListener("click", clickHandler);
      }
    };
  }, [setDropdownOpen]);

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }: any) => {
      if (!dropdownOpen || keyCode !== 27) return;
      setDropdownOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  }, []);

  return (
    <div className="relative">
      <Link
        ref={trigger}
        onClick={() => setDropdownOpen(!dropdownOpen)}
        className="flex items-center gap-2"
        to="#"
      >
       

        <span className="text-right">
          <span className="block text-slate-600 dark:text-white">
           Parents
          </span>
          {/* <span className="block text-xs">St</span> */}
        </span>

        <svg
          className={`fill-slate-600 ${
            dropdownOpen ? "rotate-180 fill-primary" : ""
          }`}
          width="12"
          height="8"
          viewBox="0 0 12 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0.410765 0.910734C0.736202 0.585297 1.26384 0.585297 1.58928 0.910734L6.00002 5.32148L10.4108 0.910734C10.7362 0.585297 11.2638 0.585297 11.5893 0.910734C11.9147 1.23617 11.9147 1.76381 11.5893 2.08924L6.58928 7.08924C6.26384 7.41468 5.7362 7.41468 5.41077 7.08924L0.410765 2.08924C0.0853277 1.76381 0.0853277 1.23617 0.410765 0.910734Z"
            fill=""
          />
        </svg>
      </Link>

      {/* <!-- Dropdown Start --> */}
      <div
        ref={dropdown}
        onFocus={() => setDropdownOpen(true)}
        onBlur={() => setDropdownOpen(false)}
        className={`absolute  mt-4 flex w-62.5 flex-col z-9999 rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark ${
          dropdownOpen === true ? "block" : "hidden"
        }`}
      >
        <ul className="flex flex-col  border-b border-stroke py-4.5 dark:border-strokedark">
          <li className=" hover:bg-primary/20 px-6 py-2">
            <Link
              to="/parents"
              className="flex items-center gap-3.5 text-slate-600 duration-300 ease-in-out hover:text-primary lg:text-base"
            >
              
              Parents
            </Link>
          </li>
          <li className=" hover:bg-primary/20 px-6 py-2">
            <Link
              to="/teachers"
              className="flex items-center gap-3.5 text-slate-600 duration-300 ease-in-out hover:text-primary lg:text-base"
            >
             
              Teachers
            </Link>
          </li>
          <li className=" hover:bg-primary/20 px-6 py-2">
            <Link
              to="/children"
              className="flex items-center gap-3.5 text-slate-600 duration-300 ease-in-out hover:text-primary lg:text-base"
            >
              
              Children
            </Link>
          </li>
        </ul>
        
      </div>
      {/* <!-- Dropdown End --> */}
    </div>
  );
};

export default function Navbar() {
    const navigate = useNavigate()
    const [navbar, setNavbar] = useState(false);
   
 

    return (
      <header className={`sticky top-0 z-[999] dark:bg-slate-800/80 ${navbar ? "dark:bg-slate-900" : ''}`}>
        <nav className={`shadow backdrop-blur-md bg-white/80 dark:bg-neutral-1000/80 dark:text-white w-full`}>
          <div className="relative mx-auto w-full max-w-screen-2xl 2xl:px-[10rem] 2xl:max-w-full p-2">
          <div className=" gap-4 px-2 mx-auto 2xl:max-w-full md:items-center md:flex md:px-8">
            <div className="text-slate-900 dark:text-white">
              <div className="flex items-center justify-between py-3 md:block">
                <a href="/">
                 <img src={LogoImg} alt="iBloom-logo" className="h-14" />
                </a>
  
                <div className="md:hidden">
                {/* <ThemeToggleButton /> */}
                 <button
                    className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                    onClick={() => {
                      setNavbar(!navbar)}}
                  >
                    {navbar ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6 dark:text-white"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6 dark:text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4 6h16M4 12h16M4 18h16"
                        />
                      </svg>
                    )}
                  </button>
                 
                </div>

              
  
              </div>

            
  
            </div>

           

            <div className="mx-auto">
              <div
                className={`flex-1 justify-self-center  pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                  navbar ? "block" : "hidden"
                }`}
              >
                <ul className="items-center justify-center space-y-8 md:flex md:space-x-9 md:space-y-0">
                  <li>
                    <DropdownUsers />
                  </li>
                  
                  <li className="">
                    <Link to="/learning" className="text-slate-600">Learning
                    </Link>
                  </li>
                  <li>
                    <Link to="/about-us" className="text-slate-600">About
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
  
            <div className="">
              <div
                className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                  navbar ? "block" : "hidden"
                }`}
              >
                <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                  <li>
                  <Button
                  onClick={() => navigate("/signup")}
                  variant="white"
                  size="default"
                >
                  Join Now
                </Button>
                  </li>
                  <li>
                  <Button
                  onClick={() => navigate("/login")}
                  size="default"
                >
                  Login
                </Button>
                  </li>
                </ul>
              </div>
            </div>
  
           
  
            
            
          </div>
          </div>
        </nav>
      </header>
    );
  }