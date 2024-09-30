import React from 'react';
import './Features.scss';

function Features() {
  return (
    <section id="features" className="features">
      <h2>Features</h2>
      <div className="feature-list">
        <div className="feature">
          <h3>Feature One</h3>
          <p>Description of feature one.</p>
        </div>
        <div className="feature">
          <h3>Feature Two</h3>
          <p>Description of feature two.</p>
        </div>
        <div className="feature">
          <h3>Feature Three</h3>
          <p>Description of feature three.</p>
        </div>
      </div>
    </section>
  );
}

export default Features;