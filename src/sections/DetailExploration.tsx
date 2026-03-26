import React from 'react';
import { ASSETS } from '../constants';

export const DetailExploration: React.FC = () => {
  return (
    <section className="detail-exploration-section">
      <div className="detail-grid">
        <div className="relative">
          <div className="detail-image-container detail-image-1">
            <img src={ASSETS.detail1} alt="Detail 1" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
          </div>
          <div className="detail-image-container-secondary detail-image-2">
            <img src={ASSETS.detail2} alt="Detail 2" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
          </div>
        </div>
        
        <div className="detail-content">
          <h2 className="detail-title">
            Defined by <br />
            <span className="italic text-bronze">Precision</span>
          </h2>
          <p className="detail-description">
            Every stitch is a testament to our heritage. Hand-finished by master artisans in our Florentine atelier, the Aurelia represents the pinnacle of contemporary craftsmanship.
          </p>
          <div className="detail-meta">
            <div className="detail-meta-line" />
            <span className="detail-meta-text">Hand-stitched Calfskin</span>
          </div>
        </div>
      </div>
    </section>
  );
};
