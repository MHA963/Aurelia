import React from 'react';
import { Instagram, Twitter } from 'lucide-react';

export const SocialLinks: React.FC = () => {
  return (
    <aside className="social-links-container">
      <Instagram size={18} className="social-icon" />
      <Twitter size={18} className="social-icon" />
    </aside>
  );
};
