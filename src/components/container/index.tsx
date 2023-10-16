import React from 'react'

export const Container: React.FC<{children: React.ReactNode}> = ({children}) => (
    <div className='grid grid-cols-5 gap-8'>
        <div className='col-span-5'>
            <div className='rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark'>
                {children}
            </div>
        </div>
    </div>
)

export const Header: React.FC<{
    children: React.ReactNode;
    classNames?: string; 
    variant?: 'h1' | 'h2'
}> = ({
    children, 
    classNames, 
    variant
}) => {
    let cls = 'mb-3 font-medium text-black dark:text-white font-semibold';
    cls += variant === 'h1' ? ' text-title-md2' : ' text-title-md1';
    cls += classNames ? ' ' : '';

    return (
        <h3 className={cls}>
            {children}
        </h3>
    )
}

export const Section: React.FC<{children: React.ReactNode, classNames?: string}> = ({children, classNames = ''}) => (
    <div className={`md:p-7 p-3${classNames ? ' '+classNames : classNames}`}>{children}</div>
)

export const Card: React.FC<{children: React.ReactNode}> = ({children}) => (
    <div className='rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark'>
        <div className='border-b border-stroke py-4 px-7 dark:border-strokedark'>
            {children}
        </div>
    </div>
)
