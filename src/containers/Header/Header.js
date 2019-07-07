import React from 'react';

function Header(props) {
  return (
    <h1>Palette Picker</h1>
    {!props.isLoggedIn && <p>LOGIN</p>}
    {props.isLoggedIn && <p>SIGN OUT</p>}
  );
};

export const mapStateToProps = (state) => ({
  isLoggedIn: state.isLoggedIn
})