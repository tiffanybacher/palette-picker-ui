import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

function Header(props) {
  return (
    <header className="header">
      <h1>Palette Picker</h1>
      {
        !props.user.username 
        && 
        <NavLink to='/home/login'>
          <p>LOGIN</p>
        </NavLink>
      }
      {
        props.user.username 
        && 
        <div className="user-nav">
          <p>Welcome, {props.user.username}!</p>
          <NavLink to='/home/'>
            <p>SIGN OUT</p>
          </NavLink>
          <NavLink to='/projects'>
            <p>YOUR PROJECTS</p>
          </NavLink>
        </div>
      }
    </header>
  );
};

export const mapStateToProps = (state) => ({
  user: state.user
});

export default connect(mapStateToProps)(Header);