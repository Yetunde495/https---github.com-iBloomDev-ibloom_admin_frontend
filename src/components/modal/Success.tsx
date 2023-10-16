import React from 'react'
import { BsFillPatchCheckFill } from 'react-icons/bs';

type SuccessModalProps = {
    show?: boolean;
    title?: string;
    desc?: string;
    buttonText?: string;
    children?: React.ReactNode;
    icon?: React.ReactNode;
    size?: string;
    onProceed: () => void;
}

export default function SuccessModal({
    show,
    onProceed,
    title,
    desc,
    icon,
    size,
    children,
    buttonText,
}: SuccessModalProps) {
    return show ? (
        <div className="fixed top-0 left-0 z-999999 flex h-full min-h-screen w-full items-center justify-center bg-black/90 px-4 py-5">
            <div className={`${
            size ? size : "w-full max-w-142.5"
          } rounded-lg bg-white py-12 px-6 text-center dark:bg-boxdark relative`}>
             
                
                    <span className="mx-auto inline-block bg-[#26e24f3b] rounded-full p-4 text-[#26e24f]">
                       {icon ? icon : <BsFillPatchCheckFill className='w-8 h-8'/> }
                    </span>
                
                <h3 className="pb-2 text-xl font-bold text-black dark:text-white sm:text-2xl">{title}</h3>
                <p className="mb-10">{desc}</p>
                {children}
                <div className="-mx-3 flex items-center justify-center">
                 
                        <button onClick={() => onProceed()} className="block w-[80%] rounded border border-stroke bg-[#60b801] hover:bg-opacity-90 p-3 text-center text-white font-medium transition dark:border-strokedark">
                            {buttonText || 'Go Back'}
                        </button>
         
                   
                </div>
            </div>
        </div>
    ) : null;
}