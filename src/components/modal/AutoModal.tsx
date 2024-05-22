import { useState, useEffect } from "react";

interface ModalProps {
  show: boolean;
  children?: React.ReactNode;
  size?: string;
  duration: number; // duration in milliseconds
}

const AutoModal: React.FC<ModalProps> = ({ show, duration, children, size }) => {
  const [isVisible, setIsVisible] = useState(show);

  useEffect(() => {
    setIsVisible(show);

    if (show) {
      const timer = setTimeout(() => {
        setIsVisible(false);
      }, duration);

      return () => clearTimeout(timer);
    }
  }, [show, duration]);

  if (!isVisible) return null;

  return (
    <div className="fixed top-0 left-0 z-999999 flex h-full min-h-screen w-full items-center justify-center bg-black/60">
      <div
        className={`${
          size ? size : "w-full max-w-142.5"
        } rounded-lg bg-white text-center dark:bg-boxdark relative`}
      >
        <div>{children}</div>
      </div>
    </div>
  );
};

export default AutoModal;
