import React from "react";

const PromotionalMessage: React.FC = () => {
  return (
    <div className="overflow-hidden whitespace-nowrap bg-primary py-2 text-white/90">
      <div className="inline-block animate-scrolling-text text-lg">
        {/* Your promotional message here */}
        Our platform presents a Merry Christmas Promo: 10% discount valid from 1st December 2024 - 31st December 2024 for the first 50 users. Rush now while it last.    Link: www.facebook.com/post10234
      </div>
    </div>
  );
};

export default PromotionalMessage;
