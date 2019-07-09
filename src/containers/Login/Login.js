import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setUser } from '../../actions';
import { Link } from 'react-router-dom';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: ''
    };
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]:e.target.value })
  };

  postUser = async (e) => {
    e.preventDefault();
    const request = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      }, 
      body: JSON.stringify(this.state)
    };
    const response = await(fetch('/api/v1/users', request));
    // if response is not okay add to local state and display on form
    // if successful dispatch user and redirect to home
  };

  render() {
    return (
      <form onSubmit={this.postUser} className="login-form">
        <h3>Login</h3>
        <label htmlFor="username">USERNAME:</label>
        <input onChange={this.handleChange} name="username" />
        <label htmlFor="password">PASSWORD:</label>
        <input onChange={this.handleChange} name="password"/> 
        <button type="submit"> Login </button>
        <p>
          Not a member? <Link to="/home/register">Create an account?</Link>
        </p>
      </form>
    );
  };
};

export const mapDispatchToProps = (dispatch) => ({
  setUser: (user) => dispatch(setUser(user))
});



export default connect(null, mapDispatchToProps)(Login);