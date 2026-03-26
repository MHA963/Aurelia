import React from 'react';
import { ASSETS } from '../constants';

export const SignatureMoment: React.FC = () => {
  return (
    <section className="signature-section">
      <div className="signature-bg-container">
        <img 
          src={ASSETS.signature} 
          alt="Signature Moment" 
          className="signature-bg-image"
          referrerPolicy="no-referrer"
        />
      </div>
      <div className="signature-content">
        <h2 className="signature-title">Aurelia</h2>
        <p className="signature-subtitle">Uncompromising Luxury</p>
        <div className="signature-actions">
          <button className="signature-button-primary">
            Shop Now
          </button>
          <button className="signature-button-secondary">
            View Lookbook
          </button>
        </div>
      </div>
    </section>
  );
};
