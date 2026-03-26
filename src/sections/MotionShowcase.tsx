import React, { useEffect } from 'react';
import { ASSETS } from '../constants';

export const MotionShowcase: React.FC = () => {
  return (
    <section className="showcase-section">
      <div className="showcase-background-text">
        <span>CRAFTSMANSHIP</span>
      </div>
      <div className="showcase-bag">
        <div className="showcase-model-container">
          <img 
          src={ASSETS.detail1} 
          alt="Rotating Bag" 
          className="showcase-image"
          referrerPolicy="no-referrer"
        />
        </div>
        <div className="showcase-glow" />
      </div>
      <div className="showcase-hint">
        Scroll to rotate perspective
      </div>
    </section>
  );
};
