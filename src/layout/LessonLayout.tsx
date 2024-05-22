
import React, { useEffect, useState } from 'react';
import { useApp } from '../context/AppContext';
import { useNavigate } from 'react-router-dom';
import Header2 from './Header2';
import LessonSidebar from './LessonSidebar';

const LessonLayout = ({children}:{children: React.ReactNode}) => {
  const { user, isLoggedIn} = useApp();
  const navigate = useNavigate()
  const [sidebarOpen, setSidebarOpen] = useState(true)

  useEffect(() => {
    if (!user && isLoggedIn) {
      navigate("/")
    }
  }, [user, isLoggedIn])

  return (
    <div className='dark:bg-boxdark-2 dark:text-bodydark z-1'>
      <div className='min-h-screen'>
        <div className='relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden'>
          <Header2 />
          <main>
            <div className='flex overflow-x-hidden'>
             <LessonSidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
             <div className='ml-18 w-full'>
              {children}
            </div>
            </div>
           
          </main>
        </div>
      </div>
    </div>
  )
}

export default LessonLayout;