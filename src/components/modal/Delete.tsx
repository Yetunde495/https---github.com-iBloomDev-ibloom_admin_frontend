import React from 'react'
import { BsTrash3Fill, BsX } from 'react-icons/bs';

type DeleteProps = {
    show?: boolean;
    title?: string;
    desc?: string;
    disabled?: boolean;
    isLoading?: boolean;
    isLoadingText?: string;
    cancelText?: string;
    okText?: string;
    children?: React.ReactNode;
    icon?: React.ReactNode;
    size?: string;
    onHide: () => void;
    onProceed: () => void;
}

export default function Delete({
    show,
    onHide,
    onProceed,
    title,
    desc,
    disabled,
    isLoading,
    isLoadingText,
    icon,
    size,
    children,
    cancelText,
    okText,
}: DeleteProps) {
    return show ? (
        <div className="fixed top-0 left-0 z-999999 flex h-full min-h-screen w-full items-center justify-center bg-black/90 px-4 py-5">
            <div className={`${
            size ? size : "w-full max-w-[40rem]"
          } rounded-lg bg-white py-12 px-10 text-center dark:bg-boxdark relative`}>
             <button onClick={onHide} className="absolute rounded-full p-2 right-4 top-4 text-black bg-[#B0B0B021]">
            <BsX size={25} className='' />
          </button>
                
                    <span className="mx-auto inline-block bg-[#bf09093b] rounded-full p-4 text-[#ee1919]">
                       {icon ? icon : 
                          <BsTrash3Fill className="h-[20px] w-[20px]"/>
                          }
                    </span>
                
                <h3 className="mt-5 pb-2 font-bold text-black dark:text-white text-lg">{title || children}</h3>
                <p className="mb-10">{desc}</p>
                <div className="-mx-3 flex flex-col gap-y-6 px-6">
                    <div className="w-full px-3 2xsm:w-1/2">
                        <button onClick={() => onHide()} className="block w-full rounded-full border border-primary bg-primary p-3 text-center font-medium text-white transition hover:opacity-95">
                            {cancelText || 'Cancel'}
                        </button>
                    </div>
                    <div className="w-full px-3 2xsm:w-1/2">
                        <button disabled={disabled} onClick={() => onProceed()} className="block w-full rounded-full text-meta-1 border border-meta-1 bg-white p-3 text-center font-medium hover:text-white transition hover:bg-meta-1">
                            {isLoading? isLoadingText
                            
                            :okText || 'Proceed'}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    ) : null;
}