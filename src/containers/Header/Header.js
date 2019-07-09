import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

function Header(props) {
  return (
    <header>
    <h1>Palette Picker</h1>
      {!props.user.name && <NavLink to='/home/register'>LOGIN</NavLink>}
      {props.user.name && <NavLink to='/home/'>SIGN OUT</NavLink>}
    </header>
  );
};

export const mapStateToProps = (state) => ({
  user: state.user
});

export default connect(mapStateToProps)(Header);