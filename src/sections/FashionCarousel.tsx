import React, { forwardRef } from 'react';
import { ASSETS } from '../constants';

export const FashionCarousel = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <section ref={ref} className="carousel-section">
      <div className="carousel-track">
        <div className="carousel-item">
          <img src={ASSETS.lifestyle} alt="Lifestyle 1" className="carousel-image" referrerPolicy="no-referrer" />
          <div className="carousel-content">
            <h3 className="carousel-title">The Silhouette</h3>
            <p className="carousel-subtitle">Paris, Rue de Rivoli</p>
          </div>
        </div>
        <div className="carousel-item">
          <img src={ASSETS.craft} alt="Lifestyle 2" className="carousel-image" referrerPolicy="no-referrer" />
          <div className="carousel-content">
            <h3 className="carousel-title">The Texture</h3>
            <p className="carousel-subtitle">Atelier Details</p>
          </div>
        </div>
        <div className="carousel-item">
          <img src={ASSETS.signature} alt="Lifestyle 3" className="carousel-image" referrerPolicy="no-referrer" />
          <div className="carousel-content">
            <h3 className="carousel-title">The Legacy</h3>
            <p className="carousel-subtitle">Milan Fashion Week</p>
          </div>
        </div>
      </div>
    </section>
  );
});

FashionCarousel.displayName = 'FashionCarousel';
