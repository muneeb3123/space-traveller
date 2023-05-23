import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/planet.png';
import './Navbar.css';

const NavBar = () => (
  <nav>
    <div className="logo-header">
      <img className="nav-img" src={logo} alt="planet" />
      <h1 className="nav-header">Space Travelers&apos; Hub</h1>
    </div>
    <div>
      <div className="component-links">
        <NavLink to="rockets" className="Links">
          Rockets
        </NavLink>
        <NavLink to="missions" className="Links">
          Missions
        </NavLink>
        <div className="links-separater" />
        <NavLink to="profile" className="Links">
          Myprofile
        </NavLink>
      </div>
    </div>
  </nav>
);

export default NavBar;
