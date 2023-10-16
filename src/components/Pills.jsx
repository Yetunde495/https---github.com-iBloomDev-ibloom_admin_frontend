import React, { useState } from 'react';

// {[{name string, value: any }]} -  pills  
const Pills = ({active, onChange, pills, activeColor}) => {
    const ac = activeColor || ' bg-primary bg-opacity-20'
    return (
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-1'>
        {
            pills.map((p, i) => {
                const bg = active === p.value  ? ac : ''
                return (
                <button key={p.value + '' + i} onClick={() => onChange(p.value)} className={`bg-gray rounded-full border border-stroke py-2 px-6 font-medium text-black hover:shadow-1 dark:border-strokedark dark:text-white${bg}`} type='button'>
                    {p.name}
                </button>
            )
            })
        }
        </div>
    )
}

export default Pills