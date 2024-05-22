import React, { useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import { RxCross2 } from "react-icons/rx";

type WarningProps = {
  show?: boolean;
  closeButton?: boolean;
  title?: string;
  cancelText?: string;
  okText?: string;
  children?: React.ReactNode;
  size?: string;
  margin?: string;
  onHide: () => void;
  onProceed?: () => void;
};

const Modal: React.FC<WarningProps> = ({
  show,
  onHide,
  // onProceed,
  title,
  children,
  margin,
  closeButton = true,
  // cancelText,
  // okText,
  size,
}) => {
  const modalRef = React.useRef<HTMLDivElement | null>(null);
  React.useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      // Check if the click target is outside the modal content and not on the scrollbar
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node) &&
        event.target !== document.documentElement
      ) {
        onHide(); // Call onHide when clicking outside the modal, excluding the scrollbar
      }
    };

    if (show) {
      // Add the event listener when the modal is shown
      document.addEventListener("mousedown", handleOutsideClick);
    } else {
      // Remove the event listener when the modal is hidden
      document.removeEventListener("mousedown", handleOutsideClick);
    }

    // Clean up the event listener when the component is unmounted
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [show, onHide]);

  if (!show) {
    return null;
  }

  return ReactDOM.createPortal(
    <div className="w-screen z-99999 h-screen bg-black bg-opacity-50 fixed top-0  flex items-center justify-center text-[#444444] overflow-x-auto">
      <div
        className={`${
          size ? size : "min-w-[50%]"
        } bg-white py-5 rounded-lg flex flex-col  justify-center ${margin ? margin : "lg:mt-16 md:mt-2 md:mx-6 mt-[4rem]"}  mx-3`}
        ref={modalRef}
      >
        <div className="flex flex-col justify-center relative md:px-8 px-3">
          <div className="flex items-center">
            <h3 className="pb-2 pl-5 text-lg font-bold sm:m-0 mt-4 text-left text-black dark:text-white">
              {title}
            </h3>
            {closeButton && (
              <button
                onClick={onHide}
                className="absolute -top-[12px] text-black right-2 bg-[#B0B0B021] hover:opacity-95 rounded-full p-2"
              >
                <RxCross2 size={22} className="" />
              </button>
            )}
          </div>

          <div className="md:px-6 px-3 py-5">{children}</div>
        </div>
      </div>
    </div>,

    document.querySelector("#modal") as HTMLElement
  );
};


interface ModalProps {
  title: string;
  onHide: () => void;
  show: boolean;
  children: React.ReactNode;
  size?: string;
}

export const Modal2: React.FC<ModalProps> = ({ title, onHide, show, children, size }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        onHide();
      }
    };

    if (show) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [show, onHide]);

  return (
    <>
      {show && (
        <div className="fixed top-0 z-99999 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50">
          <div className={`${
          size ? size : "min-w-[50%]"
        }absolute bg-white rounded-lg mt-8 shadow-lg p-4`} ref={modalRef}>
            <div className="flex justify-center w-full mb-8 relative">
              <h2 className="text-xl text-black/90 font-semibold text-center">{title}</h2>
              <button onClick={onHide} className="absolute top-0 right-2 bg-slate-300 hover:bg-slate-400 hover:text-white rounded-full p-1 text-gray-500 hover:text-gray-800 ml-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div>{children}</div>
          </div>
        </div>
      )}
    </>
  );
};




export default Modal;
