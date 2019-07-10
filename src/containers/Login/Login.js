import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setUser } from '../../actions';
import { Redirect, Link } from 'react-router-dom';

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

  getUser = async (e) => {
    e.preventDefault();
    const { username, password } = this.state;
    try {
      const response = await fetch(`http://localhost:3001/api/v1/users/${username}/${password}`);
      if(!response.ok) {
        throw Error('error in fetching user')
      }
      const result = await response.json();
      this.props.setUser(result)
    } catch (error) {
       console.log(error);
    };
  };

  render() {
    if(this.props.user.username) {
      return <Redirect to='/home' />
    }
    return (
      <form onSubmit={this.getUser} className="login-form">
        <h3>Login</h3>
        <label htmlFor="username">USERNAME:</label>
        <input onChange={this.handleChange} name="username" />
        <label htmlFor="password">PASSWORD:</label>
        <input onChange={this.handleChange} name="password"/> 
        <button type="submit"> Login </button>
        <p>
          Not a member? <Link to="/register">Create an account?</Link>
        </p>
      </form>
    );
  };
};

export const mapStateToProps = (state) => ({
  user: state.user
});

export const mapDispatchToProps = (dispatch) => ({
  setUser: (user) => dispatch(setUser(user))
});



export default connect(mapStateToProps, mapDispatchToProps)(Login);