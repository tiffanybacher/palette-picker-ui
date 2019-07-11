import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

export function Header(props) {
  return (
    <header className="header">
      <h1>Palette Picker</h1>
      {!props.user.username && <NavLink to='/home/login'>LOGIN</NavLink>}
      {
        props.user.username 
        && 
        <NavLink to='/home/'>
          <span>{props.user.username}</span> SIGN OUT
        </NavLink>
      }
    </header>
  );
};

export const mapStateToProps = (state) => ({
  user: state.user
});

export default connect(mapStateToProps)(Header);