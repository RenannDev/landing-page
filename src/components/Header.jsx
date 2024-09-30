import React from 'react';
import './Header.scss';

function Header() {
  return (
    <header className="header">
      <div className="logo">MyBrand</div>
      <nav>
        <ul>
          <li><a href="#features">Features</a></li>
          <li><a href="#testimonials">Testimonials</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;