import React from 'react';

export default function TextViewGroup({ children }: { children: React.ReactNode }) {
    if (!children || !Array.isArray(children)) return null;
    return (
        <div className='mb-3 flex flex-col gap-2 xl:flex-row'>
            <div className='w-full'>{children[0]}</div>
            <div className='w-full'>{children[1]}</div>
        </div>
    )
}