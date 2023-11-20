import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';

const DefaultLayout = ({children}:{children: React.ReactNode}) => {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className='dark:bg-boxdark-2 dark:text-bodydark'>
      <div className='flex flex-col h-screen overflow-hidden'>
      <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <div className='relative flex flex-1 overflow-y-auto overflow-x-hidden'>
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
  
          <main className='w-full'>
            <div className='mx-auto max-w-screen-2xl p-4'>
              {children}
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}

export default DefaultLayout;
