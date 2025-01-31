// import React from 'react';

export const ViewHeader = ({children}) => (
    <div className='border-b border-stroke py-4 px-7 dark:border-strokedark'>
        <h3 className='font-medium text-black dark:text-white'>
            {children}
        </h3>
    </div>
)

export const LayoutViewField = ({children}) => (
    <div className='mx-auto max-w-270'>
        {children}
    </div>
)

export const LayoutViewCard = ({children}) => (
    <div className='rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark'>
        {children}
    </div>
)

export const FakeC = () => (
    <div className='mx-auto max-w-270 bg-cc3'>
       <div className='mx-auto max-w-270 bg-cc2'>
       <div className='mx-auto max-w-270 bg-cc1'>
       <div className='mx-auto max-w-270 bg-cc4'>
       <div className='mx-auto max-w-270 bg-cc5'>

</div>
</div>
</div>
       </div>
    </div>
)