import React, { Fragment, useEffect, useRef, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import Logo from '../images/logo/logo.svg';
import SidebarLinkGroup from './SidebarLinkGroup';
import { RiArrowDownSLine } from 'react-icons/ri';
import {
  ISidebarNav,
  STUDENT_NAV_DATA,
  ADMIN_NAV_DATA,
  TEACHER_NAV_DATA,
} from './config';
type UserAccount = {
  id: string;
  userType: 'admin' | 'teacher' | 'burser' | 'student' | 'parent' | 'guardian'
}


const currentUser: UserAccount = { userType: 'admin', id: '123' }

const Sidebar = ({ sidebarOpen, setSidebarOpen }: { sidebarOpen: any, setSidebarOpen: any }) => {
  const location = useLocation();
  const { pathname } = location;

  const trigger = useRef<any>(null);
  const sidebar = useRef<any>(null);
  const [mini, setMini] = useState(false);

  const storedSidebarExpanded = localStorage.getItem('sidebar-expanded');
  const [sidebarExpanded, setSidebarExpanded] = useState(
    storedSidebarExpanded === null ? false : storedSidebarExpanded === 'true'
  );

  //nav configuration
  //users = admin, teacher, student
  // const emptyArray: any[] = [];
  const navConfig = TEACHER_NAV_DATA
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
      className={`absolute left-0 top-0 z-9999 flex h-screen ${mini ? 'lg:w-32' : 'w-72.5'} flex-col overflow-y-hidden bg-black duration-300 ease-linear dark:bg-boxdark lg:static lg:translate-x-0 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
    >
      {/* <!-- SIDEBAR HEADER --> */}
      <div className="flex items-center justify-between gap-2 px-6 py-5.5 lg:py-6.5">
        <NavLink to="/app">
          <div>
            <h1 className="text-white font-extrabold text-lg">E-Study</h1>
          </div>
          {/* <img src={Logo} alt="Logo" style={{width: '90px', height: '90px'}} /> */}
        </NavLink>

        <button
          type='button'
          ref={trigger}
          onClick={() => setSidebarOpen(!sidebarOpen)}
          aria-controls="sidebar"
          aria-expanded={sidebarOpen}
          className="block lg:hidden"
        >
          <svg
            className="fill-current"
            width="20"
            height="18"
            viewBox="0 0 20 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19 8.175H2.98748L9.36248 1.6875C9.69998 1.35 9.69998 0.825 9.36248 0.4875C9.02498 0.15 8.49998 0.15 8.16248 0.4875L0.399976 8.3625C0.0624756 8.7 0.0624756 9.225 0.399976 9.5625L8.16248 17.4375C8.31248 17.5875 8.53748 17.7 8.76248 17.7C8.98748 17.7 9.17498 17.625 9.36248 17.475C9.69998 17.1375 9.69998 16.6125 9.36248 16.275L3.02498 9.8625H19C19.45 9.8625 19.825 9.4875 19.825 9.0375C19.825 8.55 19.45 8.175 19 8.175Z"
              fill=""
            />
          </svg>
        </button>

        <button
          type='button'
          ref={trigger}
          onClick={() => {
            setSidebarOpen(!sidebarOpen)
            setMini(!mini)
          }}
          aria-controls="sidebar"
          aria-expanded={sidebarOpen}
          className="lg:block hidden"
        >
          <svg
            className="fill-white"
            width="20"
            height="18"
            viewBox="0 0 20 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19 8.175H2.98748L9.36248 1.6875C9.69998 1.35 9.69998 0.825 9.36248 0.4875C9.02498 0.15 8.49998 0.15 8.16248 0.4875L0.399976 8.3625C0.0624756 8.7 0.0624756 9.225 0.399976 9.5625L8.16248 17.4375C8.31248 17.5875 8.53748 17.7 8.76248 17.7C8.98748 17.7 9.17498 17.625 9.36248 17.475C9.69998 17.1375 9.69998 16.6125 9.36248 16.275L3.02498 9.8625H19C19.45 9.8625 19.825 9.4875 19.825 9.0375C19.825 8.55 19.45 8.175 19 8.175Z"
              fill=""
            />
          </svg>
        </button>
      </div>
      {/* <!-- SIDEBAR HEADER --> */}

      <div className="sidebar-scrollbar custom-scrollbar flex flex-col overflow-y-hidden hover:overflow-y-auto duration-300 ease-linear">
        {/* <!-- Sidebar Menu --> */}
        <nav className="py-4 px-4 lg:px-6">
          {
            navConfig.map((navdata: any, index: number) => (
              <Fragment key={navdata.section + '-' + index}>
                <h3 className="mb-4 ml-4 text-sm font-semibold text-bodydark2">
                  {navdata.section}
                </h3>
                <ul className="mb-6 flex flex-col gap-1">
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
                                className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${pathname.includes('calendar') &&
                                  'bg-graydark dark:bg-meta-4'
                                  }`}
                              >
                                <NChildIcon />
                                {!mini && nchild.name}
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
        </nav>
        {/* <!-- Sidebar Menu --> */}
      </div>
    </aside>
  );
};

export default Sidebar;
