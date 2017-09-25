import React, { SFC } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header: SFC = () => (
  <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
    <Link to="/" className="navbar-brand">
      Redux
    </Link>
    <div className="collapse navbar-collapse">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <NavLink to="/home" className="nav-link" activeClassName="active">
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/courses" className="nav-link" activeClassName="active">
            Courses
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/about" className="nav-link" activeClassName="active">
            About
          </NavLink>
        </li>
      </ul>
    </div>
  </nav>
);

export default Header;
