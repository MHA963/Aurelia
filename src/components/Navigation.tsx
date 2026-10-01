import React from 'react';
import { Menu, ShoppingBag } from 'lucide-react';

export const Navigation: React.FC = () => {
  return (
    <nav className="nav-container">
      <div className="nav-logo">Aurelia</div>
      <div className="nav-actions">
        <button className="nav-button" aria-label="Open menu"><Menu size={24} /></button>
        <button className="nav-button" aria-label="View shopping bag"><ShoppingBag size={24} /></button>
      </div>
    </nav>
  );
};
