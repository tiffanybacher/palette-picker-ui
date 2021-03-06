import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

export function Header(props) {
  return (
    <header className="header">
      <NavLink to='/newpalette' className="main-header">
        <h1>Palette Picker</h1>
      </NavLink>
      {
        !props.user.username 
        && 
        <NavLink to='/login'>
          <p className="login-navlink">LOGIN</p>
        </NavLink>
      }
      {
        props.user.username 
        && 
        <div className="user-nav">
          <NavLink to='/projects'>
            <p>YOUR PROJECTS</p>
          </NavLink>
          <NavLink to='/newpalette'>
            <p>NEW PALETTE</p>
          </NavLink>
          <a>
            <p>SIGN OUT</p>
          </a>
        </div>
      }
    </header>
  );
};

export const mapStateToProps = (state) => ({
  user: state.user
});

export default connect(mapStateToProps)(Header);