import React from 'react';
import { connect } from 'react-redux';
import { setUser } from '../../actions';
import { Link } from 'react-router-dom'

function Login() {
  <form>
    <h3>Login</h3>
    <label for="username">USERNAME:</label>
    <input name="username" />
    <label for="password">PASSWORD:</label>
    <input name="password"/> 
    <p>
      Not a member? <Link to="/home/register">Create an account?</Link>
    </p>
  </form>
};

export const mapDispatchToProps = (dispatch) => ({
  setUser: (user) => dispatch(setUser(user))
});



export default connect(null, dispatch)(Login);