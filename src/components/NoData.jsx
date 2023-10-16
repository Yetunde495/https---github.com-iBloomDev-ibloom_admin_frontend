import React, { useState } from 'react';

const NoData = ({ message, title, children, show, onAdd, hideButton }) => {
    return show ? (
        <div className='rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark pb-10'>
            <div className="mt-7.5 text-center">
                <h2 className="mb-3 text-2xl font-bold text-black dark:text-white">{title}</h2>
                <p className="font-medium">{message || children}</p>
                {
                    hideButton ? null : (
                        <div className='flex flex-col justify-center items-center mt-10 mb-10'>
                            <button onClick={() => onAdd()} type="button" className="flex items-center justify-center px-4 py-2 text-sm font-medium text-white rounded-lg bg-primary hover:bg-primary focus:ring-4 focus:ring-primary dark:bg-primary dark:hover:bg-white focus:outline-none dark:focus:ring-white w-[120px]">
                                <svg className="h-5 w-4 mr-2" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                    <path clip-rule="evenodd" fill-rule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" />
                                </svg>
                                Add
                            </button>
                        </div>
                    )
                }
            </div>
        </div>
    ) : null
}

export default NoData