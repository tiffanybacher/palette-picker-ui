import React from 'react';
import { connect } from 'react-redux';

function Header(props) {
  return (
    <header>
    <h1>Palette Picker</h1>
      {!props.isLoggedIn && <p>LOGIN</p>}
      {props.isLoggedIn && <p>SIGN OUT</p>}
    </header>
  );
};

export const mapStateToProps = (state) => ({
  isLoggedIn: state.isLoggedIn
});

export default connect(mapStateToProps)(Header);