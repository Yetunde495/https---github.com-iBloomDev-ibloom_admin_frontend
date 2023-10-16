import React from "react";
import ReactDOM from "react-dom";
import { BsXCircleFill } from "react-icons/bs";

type WarningProps = {
  show?: boolean;
  title?: string;
  cancelText?: string;
  okText?: string;
  children?: React.ReactNode;
  size?: string;
  onHide: () => void;
  onProceed: () => void;
};

const Modal: React.FC<WarningProps> = ({
  show,
  onHide,
  onProceed,
  title,
  children,
  cancelText,
  okText,
  size,
}) => {
  const modalRef = React.useRef<HTMLDivElement | null>(null);
  React.useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      // Check if the click target is outside the modal content and not on the scrollbar
      if (modalRef.current && !modalRef.current.contains(event.target as Node) && event.target !== document.documentElement) {
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
    <div className="fixed inset-0 z-999999 flex items-center justify-center overflow-auto bg-black/90 px-4 py-5">
      <div className="absolute top-12" ref={modalRef}>
        <div
          className={`${
            size ? size : "w-full max-w-142.5"
          }  rounded-lg bg-white py-12 px-8 text-center dark:bg-boxdark md:py-10 md:px-17.5`}
        >
          <button onClick={onHide} className="absolute right-4 top-4">
            <BsXCircleFill size={25} />
          </button>
          <h3 className="mt-5.5 pb-2 text-xl font-bold text-black dark:text-white sm:text-2xl">
            {title}
          </h3>
          {children}
          {/* <div className="-mx-3 flex flex-wrap gap-y-4">
          <div className="w-full px-3 2xsm:w-1/2">
            <button
              type="button"
              onClick={onHide}
              className="block w-full rounded border border-stroke bg-gray p-3 text-center font-medium text-black transition hover:border-primary hover:bg-primary hover:text-white dark:border-strokedark dark:bg-meta-4 dark:text-white dark:hover:primary dark:hover:primary"
            >
              {cancelText || 'Cancel'}
            </button>
          </div>
           <div className="w-full px-3 2xsm:w-1/2">
            <button
              type="button"
              onClick={onProceed}
              className="block w-full rounded border border-primary bg-primary p-3 text-center font-medium text-white transition hover:bg-opacity-90"
            >
              {okText || 'Proceed'}
            </button>
          </div> 
        </div> */}
        </div>
      </div>
    </div>,
    document.querySelector("#modal") as HTMLElement
  );
};

export default Modal;
