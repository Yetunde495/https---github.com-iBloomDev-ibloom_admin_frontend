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
        <div className="absolute -right-10 z-10 min-w-[15rem] w-full bg-slate-800 text-white p-2 rounded-md shadow-md">
          {text}
        </div>
      )}
    </div>
  );
};

export default Tooltip;

