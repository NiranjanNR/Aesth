import React from 'react';
import '../App.css'; // Import your CSS file for styling
import logo from '../assets/logo.jpg';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <div className="nav-links">
        <NavItem title="Solutions" />
        <NavItem title="Services" />
        <NavItem title="Resources" />
        <NavItem title="Company" />
      </div>
    </div>
  );
};

const NavItem = ({ title }) => {
  return (
    <div className="nav-item">
      {title}
      <div className="arrow">
      <svg width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6 9L12 15L18 9" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>

      </div>
    </div>
  );
};

export default Navbar;