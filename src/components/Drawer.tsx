import { ReactNode, useEffect, useRef } from "react";
import { AiOutlineClose } from "react-icons/ai";

interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  title: string;
  width?: string;
}

const Drawer = ({ isOpen, onClose, children, width, title }: DrawerProps) => {
  const drawerRef = useRef<HTMLDivElement>(null);
  const handleClickOutside = (event: MouseEvent) => {
    if (drawerRef.current && !drawerRef.current.contains(event.target as Node)) {
      onClose()
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <div
      ref={drawerRef}
      className={`fixed shadow-md overflow-y-auto custom-scrollbar  top-0 h-full w-0 transform overflow-hidden transition-all  duration-1000 ease-in-out ${
        isOpen ? "w-64" : "w-0"
      } z-[1000] bg-white dark:bg-boxdark`}
      style={{
        width: width,
        right: isOpen ? 0 : "-1000px",
      }}
    >
      <div className="p-5 h-full">
        <h3 className="mt-3.5 pb-2 text-lg font-bold text-black dark:text-white sm:text-xl">
          {title}
        </h3>
        {children}
      </div>
      <button className="absolute right-4 top-4" onClick={onClose}>
        <AiOutlineClose />
      </button>
    </div>
  );
};

export default Drawer;
