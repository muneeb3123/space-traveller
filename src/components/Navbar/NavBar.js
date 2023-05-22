import React from 'react';
import { NavLink } from 'react-router-dom';

const links = [
  { path: '/rockets', text: 'Rockets' },
  { path: '/missions', text: 'Missions' },
  { path: '/profile', text: 'Profile' },
];

const NavBar = () => (
  <nav>
    <div>
      <h1>Space Travelers</h1>
    </div>
    <div>
      <ul>
        {links.map((link) => (
          <li key={link.path}>
            <NavLink to={link.path}>
              {link.text}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  </nav>
);

export default NavBar;