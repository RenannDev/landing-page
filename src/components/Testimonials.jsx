import React from 'react';
import './Testimonials.scss';

function Testimonials() {
  return (
    <section id="testimonials" className="testimonials">
      <h2>What Our Users Say</h2>
      <div className="testimonial-list">
        <div className="testimonial">
          <p>"This product changed my life!"</p>
          <h4>- Happy Customer</h4>
        </div>
        <div className="testimonial">
          <p>"Excellent customer service and great value."</p>
          <h4>- Satisfied Client</h4>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;