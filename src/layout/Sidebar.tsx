import React, { Fragment, useEffect, useRef, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import Logo from '../images/logo/logo-icon.svg';

import SidebarLinkGroup from './SidebarLinkGroup';
import { RiArrowDownSLine } from 'react-icons/ri';
import {
  STUDENT_NAV_DATA,
} from './config';
import { SlSettings } from 'react-icons/sl';




const Sidebar = ({ sidebarOpen, setSidebarOpen }: { sidebarOpen: any, setSidebarOpen: any }) => {
  const location = useLocation();
  const { pathname } = location;

  const trigger = useRef<any>(null);
  const sidebar = useRef<any>(null);
  const [mini] = useState(false);

  const storedSidebarExpanded = localStorage.getItem('sidebar-expanded');
  const [sidebarExpanded, setSidebarExpanded] = useState(
    storedSidebarExpanded === null ? false : storedSidebarExpanded === 'true'
  );

  //nav configuration
  //users = admin, teacher, student
  // const emptyArray: any[] = [];
  const navConfig =  STUDENT_NAV_DATA;
  // currentUser.userType === 'admin' ? ADMIN_NAV_DATA
  // : currentUser.userType === 'teacher' ? TEACHER_NAV_DATA
  // : currentUser.userType === 'student' ? STUDENT_NAV_DATA
  // : emptyArray

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
    document.addEventListener('click', clickHandler);
    return () => document.removeEventListener('click', clickHandler);
  }, []);

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }: { [key: string]: any; }) => {
      if (!sidebarOpen || keyCode !== 27) return;
      setSidebarOpen(false);
    };
    document.addEventListener('keydown', keyHandler);
    return () => document.removeEventListener('keydown', keyHandler);
  }, []);

  useEffect(() => {
    localStorage.setItem('sidebar-expanded', sidebarExpanded.toString());
    if (sidebarExpanded) {
      document.querySelector('body')?.classList.add('sidebar-expanded');
    } else {
      document.querySelector('body')?.classList.remove('sidebar-expanded');
    }
  }, [sidebarExpanded]);

  return (
    <aside
      ref={sidebar}
      className={`absolute h-full left-0 top-0 z-9999 flex border-r border-stroke dark:border-strokedark ${
        sidebarOpen ? "lg:hidden" : "lg:static"
      } w-[250px] flex-col bg-white overflow-y-hidden text-[#4d4d4d] duration-300 ease-linear dark:bg-boxdark lg:static lg:translate-x-0 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
    >
      {/* <!-- SIDEBAR HEADER --> */}
      {/* <div className="flex items-center justify-between gap-2 px-6 pt-5.5 pb-3">
       

       

        
      </div> */}
      <div className="flex items-center justify-between gap-2 px-6 pt-5.5 pb-5">
            <h1 className=" font-extrabold text-lg sm:block hidden">ByteDegree</h1>
             <img src={Logo} alt="Logo"  className='sm:hidden block ' />
          </div>
      {/* <!-- SIDEBAR HEADER --> */}

      <div className="sidebar-scrollbar custom-scrollbar flex flex-col overflow-y-hidden overflow-x-hidden  hover:overflow-y-auto duration-300 ease-linear">
        {/* <!-- Sidebar Menu --> */}
        <nav className={`px-4 py-2 ${sidebarOpen ? 'px-0' : 'px-4'
        }`}>
          {
            navConfig.map((navdata: any, index: number) => (
              <Fragment key={navdata.section + '-' + index}>
                <h3 className="mb-4 ml-4 text-sm font-semibold">
                  {navdata.section}
                </h3>
                <ul className="sm:gap-1 sm:mb-1 flex flex-col ">
                  {
                    navdata.children.map((nchild: any, nindex: number) => {
                      const NChildIcon = nchild.icon;
                      return (
                        nchild?.children && nchild?.children?.length > 0
                          ? (
                            <SidebarLinkGroup
                              key={nchild.name + '-' + nindex}
                              activeCondition={pathname === '/app' || pathname.includes(nchild.path)}>
                              {(handleClick: any, open: boolean) => {
                                return (
                                  <React.Fragment>
                                    <NavLink
                                      to="#"
                                      className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${(pathname === '/app' ||
                                        pathname.includes(nchild.path)) &&
                                        'bg-graydark dark:bg-meta-4'
                                        }`}
                                      onClick={(e) => {
                                        e.preventDefault();
                                        sidebarExpanded
                                          ? handleClick()
                                          : setSidebarExpanded(true);
                                      }}
                                    >
                                      <NChildIcon />
                                      {!mini && nchild.name}
                                      <RiArrowDownSLine style={{ width: 25, height: 25 }} className={`absolute right-4 top-1/2 -translate-y-1/2 fill-current ${open && 'rotate-180'
                                        }`} />
                                    </NavLink>
                                    {/* <!-- Dropdown Menu Start --> */}
                                    <div className={`translate transform overflow-hidden ${!open && 'hidden'}`}>
                                      <ul className="mt-4 mb-5.5 flex flex-col gap-2.5 pl-6">
                                        {
                                          nchild.children.map((schild: any, sindex: number) => {
                                            const SChildIcon = schild.icon;

                                            return (
                                              <li key={schild.name + '-' + sindex}>
                                                <NavLink
                                                  to={schild.path}
                                                  className={({ isActive }) =>
                                                    'group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white ' +
                                                    (isActive && '!text-white')
                                                  }
                                                >
                                                  <SChildIcon />
                                                  {!mini && schild.name}
                                                </NavLink>
                                              </li>
                                            )
                                          })
                                        }
                                      </ul>
                                    </div>
                                    {/* <!-- Dropdown Menu End --> */}
                                  </React.Fragment>
                                );
                              }}
                            </SidebarLinkGroup>
                          )
                          : (
                            <li key={nindex}>
                              <NavLink
                                to={nchild?.path}
                                className={`group relative flex items-center gap-2.5 font-medium  dark:text-primary rounded-sm  ${!sidebarOpen ? 'px-4 py-2' : 'pl-5 py-3'} font-medium  hover:text-white duration-300 ease-in-out hover:bg-primary dark:hover:bg-meta-4 ${pathname.includes('calendar') &&
                                  'bg-graydark dark:bg-meta-4'
                                  } ${
                                    (pathname.includes(nchild?.path)) ?
                                    "text-white bg-primary hover:text-white hover:bg-primary/90 dark:text-white" :
                                    "text-[#4d4d4d]"
                                  }`}
                              >
                                <NChildIcon />
                                {!sidebarOpen && nchild.name}
                                <p className="block lg:hidden">{nchild.name}</p>
                              </NavLink>
                            </li>
                          )
                      )
                    })
                  }
                </ul>
              </Fragment>
            ))
          }

<div className="absolute bottom-8 w-full right-0 px-4">
            <NavLink
              to={"/app/patient/settings"}
              className={`group relative flex items-center gap-2.5 text-lg  rounded-sm py-2 px-2 font-medium hover:text-white dark:text-primary hover:bg-primary dark:hover:bg-primary/20 text-black duration-300 ease-in-out dark:hover-bg-meta-4 ${
                (pathname.includes('settings')) &&
                " text-white bg-primary hover:text-white hover:bg-primary/90 dark:text-white"
              }`}
            >
              <SlSettings className="w-5 h-5" />
              {sidebarOpen ? null : "Settings"}
            </NavLink>
          </div>
        </nav>
        {/* <!-- Sidebar Menu --> */}
      </div>
    </aside>
  );
};

export default Sidebar;
