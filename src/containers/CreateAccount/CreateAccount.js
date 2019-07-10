import React, { Component } from 'react';
import { connect } from 'react-redux';
import { postUser } from '../../thunks/postUser';

export class CreateAccount extends Component {
  state = {
    username: '',
    password1: '',
    password2: '',
    error: ''
  }

  handleChange = (e) => {
    const { name, value } = e.target;

    this.setState({
      [name]: value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();

    const { password1, password2 } = this.state;

    if (password1 !== password2) {
      this.setState({
        error: 'Passwords do not match.'
      });
    } else {
      const user = {
        username: this.state.username,
        password: this.state.password1
      };

      this.props.postUser(user);

      // redirect to ProjectsContainer
    }
  }

  render() {
    return (
      <section className="CreateAccount">
        <form 
          action="post" 
          className="CreateAccount-form"
          onSubmit={this.handleSubmit}>
          <h2>Create an Account</h2>
          <label htmlFor="username-input">USERNAME:</label>
          <input 
            type="text" 
            id="username-input"
            name="username"
            onChange={this.handleChange}
          />
          <label htmlFor="password-input-1">PASSWORD:</label>
          <input 
            type="password"
            id="password-input-1"
            name="password1"
            onChange={this.handleChange}
          />
          <label htmlFor="password-input-2">RE-ENTER PASSWORD:</label>
          <input 
            type="password"
            id="password-input-2"
            name="password2"
            onChange={this.handleChange}
          />
          <button className="new-account-btn">
            SUBMIT
          </button>
        </form>
      </section>
    );
  }
}

export const mapDispatchToProps = (dispatch) => ({
  postUser: (user) => dispatch(postUser(user))
});

export default connect(undefined, mapDispatchToProps)(CreateAccount);