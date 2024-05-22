import React from 'react';
import Footer from './Footer';
import Navbar from './HomeNav';
// import { BsX } from 'react-icons/bs';

const Layout = ({children}:{children: React.ReactNode}) => {
  // const [showToast, setShowToast] = useState<boolean>(true)

  return (
    <div className='dark:bg-boxdark-2 dark:text-bodydark'>
      {/* {showToast && <div className="flex justify-center items-center text-white font-semibold tracking-wide bg-primary w-full py-3">
        <h6>Get 10% off all courses on ByteDegree. Purchase these courses now</h6>
        <button className='absolute right-3 hover:text-slate-50 text-xl' onClick={() => setShowToast(false)}> <BsX /> </button>
      </div>} */}
        <div className='relative'>
         <Navbar />
          <main className='overflow-y-auto overflow-x-hidden'>
            <div className='mx-auto lg:max-w-screen-2xl 2xl:max-w-full'>
              {children}
            </div>
          </main>
          <Footer />
      </div>
    </div>
  );
};

export default Layout;
