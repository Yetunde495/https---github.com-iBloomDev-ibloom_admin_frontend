import React, { useEffect } from 'react';
import { useApp } from '../context/AppContext';
import { useNavigate } from 'react-router-dom';
import Header2 from './Header2';

const StudentLayout = ({children}:{children: React.ReactNode}) => {
  const { user, isLoggedIn} = useApp();
  const navigate = useNavigate()

  useEffect(() => {
    if (!user && isLoggedIn) {
      navigate("/")
    }
  }, [user, isLoggedIn])

  return (
    <div className='dark:bg-boxdark-2 dark:text-bodydark font-comic'>
      <div className='min-h-screen'>
        <div className='relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden font-comic'>
          <Header2 />
          <main>
            <div className='mx-auto'>
              {children}
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}

export default StudentLayout;