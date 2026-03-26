import React from 'react';

export const Marquee: React.FC = () => {
  return (
    <div className="marquee-container">
      <div className="marquee-inner">
        {[...Array(10)].map((_, i) => (
          <span key={i} className="marquee-text">
            Aurelia Collection <span className="text-bronze mx-4">/</span> Spring Summer 2026
          </span>
        ))}
      </div>
    </div>
  );
};
