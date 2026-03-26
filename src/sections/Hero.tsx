import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Logo } from '../components/Logo';
import { ASSETS } from '../constants';

export const Hero: React.FC = () => {
  return (
    <section className="hero-section">
      <div className="hero-bg absolute inset-0">
        <img 
          src={ASSETS.hero} 
          alt="Aurelia Hero" 
          className="w-full h-full object-cover opacity-60"
          referrerPolicy="no-referrer"
        />
        <div className="hero-overlay" />
      </div>
      
      <div className="hero-content">
        <Logo className="mx-auto mb-8 text-etain" />
        <h1 className="hero-title">
          <span className="inline-block">A</span>
          <span className="inline-block">U</span>
          <span className="inline-block">R</span>
          <span className="inline-block">E</span>
          <span className="inline-block">L</span>
          <span className="inline-block">I</span>
          <span className="inline-block">A</span>
        </h1>
        <p className="hero-subtitle">
          The Art of Sculptural Elegance
        </p>
        <button className="hero-cta group">
          <span className="hero-cta-text">
            Discover the Collection <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </span>
          <div className="hero-cta-bg" />
          <span className="hero-cta-text-hover">
            Discover the Collection
          </span>
        </button>
      </div>
    </section>
  );
};
