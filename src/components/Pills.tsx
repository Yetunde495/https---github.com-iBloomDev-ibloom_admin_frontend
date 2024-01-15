import React from 'react';

// {[{name string, value: any }]} -  pills  
const Pills: React.FC<any> = ({pills}) => {
    return (
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-1'>
        {
            pills.map((p:any, i:number) => {
                return (
                <span key={p + '' + i} className={`bg-primary/5 flex items-center justify-center rounded-full text-primary py-1 px-3 text-[12px]`}>
                    {p}
                </span>
            )
            })
        }
        </div>
    )
}

export default Pills