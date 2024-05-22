import React, { useEffect, useState } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import { useApp } from '../context/AppContext';
import { useLocation, useNavigate } from 'react-router-dom';

const DefaultLayout = ({children}:{children: React.ReactNode}) => {
  const { user, isLoggedIn} = useApp();
  const location = useLocation();
  const { pathname } = location;
  const navigate = useNavigate()
  const [sidebarOpen, setSidebarOpen] = useState(false)

  useEffect(() => {
    if (!user && isLoggedIn) {
      navigate("/")
    }
  }, [user, isLoggedIn])

  return (
    <div className='dark:bg-boxdark-2 dark:text-bodydark'>
      <div className='flex h-screen overflow-hidden'>
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <div className='relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden'>
          <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
          <main>
            <div className={`${pathname.includes('content-management/curriculum') ? "mx-auto" : "mx-auto p-4 md:p-6 2xl:p-10"}`}>
              {children}
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}

export default DefaultLayout;
