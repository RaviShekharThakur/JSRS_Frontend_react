import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav 
      className="navbar navbar-expand-lg navbar-light" 
      style={{ background: 'linear-gradient(45deg, #e67e22, #d35400)' }}
    >
      <div className="container-fluid">
        <Link className="navbar-brand text-white" to="/">JSRS Indore</Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link text-white" to="/users">Ramdoots</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/temples">Temples</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
