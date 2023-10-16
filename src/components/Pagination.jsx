import React, { useState } from 'react';

const Pagination = ({onNextPage, onPrevPage, onSelectPage, pages, prevPage, nextPage, activePage=1, show, onChangeLimit, activeLimit}) => {
    return show ? (
        <div className='rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark'>
            <div className='border-b border-stroke py-4 px-6.5 dark:border-strokedark'>
            <div className="col-span-12 flex flex-wrap items-center justify-between gap-3">
                    <nav>
                        <ul className="flex flex-wrap items-center gap-2">
                            <li aria-disabled={prevPage ? true : false} onClick={onPrevPage}><a className="flex items-center justify-center rounded bg-[#EDEFF1] py-1.5 px-3 text-xs font-medium text-black hover:bg-primary hover:text-white dark:bg-graydark dark:text-white dark:hover:bg-primary dark:hover:text-white" href="#/">Previous</a></li>
                            {
                                pages?.map((page, indexPage) => (
                                    <li key={indexPage} onClick={() => onSelectPage(page)}><a className={`flex items-center justify-center rounded py-1.5 px-3 font-medium hover:bg-primary hover:text-white ${activePage === page ? ' bg-primary text-white' : '' }`} href="#/">{page}</a></li>
                                ))
                            }
                            <li aria-disabled={nextPage ? true : false} onClick={onNextPage}><a className="flex items-center justify-center rounded bg-[#EDEFF1] py-1.5 px-3 text-xs font-medium text-black hover:bg-primary hover:text-white dark:bg-graydark dark:text-white dark:hover:bg-primary dark:hover:text-white" href="#/">Next</a></li>
                        </ul>
                    </nav>
                    <div className="relative z-20 inline-block rounded bg-white shadow-card-2 dark:bg-boxdark">
                        <select value={activeLimit} onChange={e => onChangeLimit(e.target.value)} name="pageLimit" id="pageLimit" className="relative z-20 inline-flex appearance-none rounded border border-stroke bg-transparent py-2 pl-4 pr-9 font-medium text-sm outline-none dark:border-strokedark">
                            <option value="5">5</option>
                            <option value="10">10</option>
                            <option value="50">50</option>
                            <option value="100">100</option>
                            <option value="200">200</option>
                        </select>
                        <span className="absolute top-1/2 right-3 z-10 -translate-y-1/2">
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M3.96967 6.21967C4.26256 5.92678 4.73744 5.92678 5.03033 6.21967L9 10.1893L12.9697 6.21967C13.2626 5.92678 13.7374 5.92678 14.0303 6.21967C14.3232 6.51256 14.3232 6.98744 14.0303 7.28033L9.53033 11.7803C9.23744 12.0732 8.76256 12.0732 8.46967 11.7803L3.96967 7.28033C3.67678 6.98744 3.67678 6.51256 3.96967 6.21967Z" fill="#64748B"></path>
                            </svg>
                        </span>
                    </div>
            </div>
            </div>
        </div>
    ): null
}

export default Pagination