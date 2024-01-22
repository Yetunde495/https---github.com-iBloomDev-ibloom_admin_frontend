import { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { Link } from "react-router-dom";

export default function Navbar() {
    const [navbar, setNavbar] = useState(false);
   
 

    return (
      <header className={`sticky top-0 z-[999] dark:bg-slate-800/80 ${navbar ? "dark:bg-slate-900" : ''}`}>
        <nav className={`shadow backdrop-blur-md bg-white/80 dark:bg-neutral-1000/80 dark:text-white w-full`}>
          <div className="relative mx-auto w-full max-w-screen-2xl 2xl:px-[10rem] 2xl:max-w-full p-2">
          <div className=" gap-4 px-2 mx-auto lg:max-w-7xl 2xl:max-w-full md:items-center md:flex md:px-8">
            <div className="text-slate-900 dark:text-white">
              <div className="flex items-center justify-between py-3 md:block">
                <a href="/">
               ByteDegree
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

            <div className='relative mx-auto md:block hidden shrink lg:w-[350px] md:w-[250px] w-[200px]'>
            <input
              type="email"
              placeholder="Search..."
              className="w-full py-2 px-3 pl-8   bg-gray-200 border-stroke border-2  dark:bg-gray-700 rounded-lg text-slate-800 focus:outline-none focus:ring-1 focus:ring-primary/90"
            />
            <button className="absolute left-1 top-2/4 -translate-y-1/2 disabled:bg-primary/60  dark:bg-slate-100 hover:bg-primary py-1 px-2 rounded-md text-slate-400 focus:outline-none">
              <BsSearch />
            </button>
            </div>

            <div className="mx-auto">
              <div
                className={`flex-1 justify-self-center  pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                  navbar ? "block" : "hidden"
                }`}
              >
                <ul className="items-center text-[15px] justify-center space-y-8 md:flex md:space-x-3 md:space-y-0">
                  <li>
                    <Link to="/signup" className="">All Courses
                    </Link>
                  </li>
                  
                  <li className="lg:block hidden">
                    <Link to="/login" className="text-slate-600">About
                    </Link>
                  </li>
                  <li>
                    <Link to="/login" className="text-slate-600">Teach on ByteDegree
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
  
            <div className="ml-auto">
              <div
                className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                  navbar ? "block" : "hidden"
                }`}
              >
                <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                  <li>
                    <Link to="/signin">
                      Sign in
                    </Link>
                  </li>
                  <li>
                    <Link to="/app/students/dashboard" className="bg-primary/90 lg:block hidden text-white/90 hover:text-white px-5 py-2 rounded-md">Get Started
                    </Link>
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