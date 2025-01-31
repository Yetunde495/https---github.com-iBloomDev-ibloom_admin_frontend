// Tooltip.tsx

// Tooltip.tsx

import React, { useState } from 'react';

interface TooltipProps {
  text: string;
  children: React.ReactNode;
}

const Tooltip: React.FC<TooltipProps> = ({ text, children }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  const handleMouseEnter = () => {
    setShowTooltip(true);
  };

  const handleMouseLeave = () => {
    setShowTooltip(false);
  };

  return (
    <div className="relative inline-block cursor-pointer">
      <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        {children}
      </div>
      {showTooltip && (
        <div className="absolute -left-[64px]  z-10 min-w-[15rem] w-full bg-white text-black/89 text-sm  py-2.5 px-3 rounded-md shadow-3">
          {text}
        </div>
      )}
    </div>
  );
};

export default Tooltip;

