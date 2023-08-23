import React from 'react';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-title">Admin Panel</div>
      <div className="navbar-links">
        <button>Home</button>
        <button>Statistics</button>
        <button>Reference</button>
        <button>Pricing</button>
        <button>Contact</button>
      </div>
    </nav>
  );
}

export default Navbar;
