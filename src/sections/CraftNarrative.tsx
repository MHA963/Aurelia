import React from 'react';

export const CraftNarrative: React.FC = () => {
  return (
    <section className="craft-section">
      <div className="craft-container">
        <p className="craft-label">The Narrative</p>
        <p className="craft-quote">
          "A dialogue between <span className="italic">form</span> and <span className="italic">function</span>, where the object becomes a sculpture for the modern silhouette."
        </p>
        <div className="craft-divider" />
        <p className="craft-description">
          Inspired by the brutalist architecture of the 1970s and the fluid movements of classical dance, Aurelia is designed to be as versatile as it is striking.
        </p>
      </div>
    </section>
  );
};
