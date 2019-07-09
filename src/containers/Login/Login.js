import React from 'react';
import { connect } from 'react-redux';


function Login() {
  <form>
    <h3>Login</h3>
    <label for="username">USERNAME:</label>
    <input name="username" />
    <label for="password">PASSWORD:</label>
    <input name="password"/> 
  </form>
};

export const mapDispatchToProps = (dispatch) => ({
  setUser: (user) => dispatch(setUser(user))
});



export default connect(null, dispatch)(Login);