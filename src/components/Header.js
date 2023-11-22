import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaMicrophone } from 'react-icons/fa';
import { RiSettings5Fill } from 'react-icons/ri';
import { MdArrowBackIos } from 'react-icons/md';

const Header = () => (
  <header>
    <div className="logo">
      <NavLink className="rmvLink" to="/">
        {({ isActive }) => (isActive
          ? (
            <div className='logo-image'>
            <img src='./logo.png'/>
            </div>
          )
          : (
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <MdArrowBackIos style={{ marginLeft: '1rem', fontSize: '1.5rem' }} />
              <p>Back</p>
            </div>
          )
        )}

      </NavLink>
    </div>

    <nav className="nav__links">
      <ul className="flex nav__links">
        <li>
          <NavLink
            to="/VoiceSearch"
            className="rmvLink"
            style={({ isActive }) => (isActive
              ? { textDecoration: 'underline' }
              : { textDecoration: 'none' })}
          >
            <FaMicrophone />
          </NavLink>
        </li>
        <li>
          <NavLink
            className="settings-icon rmvLink"
            to="/Settings"
            style={({ isActive }) => (isActive
              ? { textDecoration: 'underline' }
              : { textDecoration: 'none' })}
          >
            <RiSettings5Fill />
          </NavLink>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
