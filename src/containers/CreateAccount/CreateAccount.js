import React, { Component } from 'react';

class CreateAccount extends Component {
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
      }, () => console.log(this.state.error));
    } else {
      // use thunk to post user to database and to add user to redux store
      // redirect to ProjectsContainer
      console.log('passwords match');
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

export default CreateAccount;