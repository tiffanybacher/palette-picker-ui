import React, { Component } from 'react';

class CreateAccount extends Component {
  render() {
    return (
      <section className="CreateAccount">
        <form 
          action="post" 
          className="CreateAccount-form">
          <h2>Create an Account</h2>
          <label htmlFor="username-input">USERNAME:</label>
          <input 
            type="text" 
            id="username-input"
          />
          <label htmlFor="password-input-1">PASSWORD:</label>
          <input 
            type="password"
            id="password-input-1"
          />
          <label htmlFor="password-input-2">RE-ENTER PASSWORD:</label>
          <input 
            type="password"
            id="password-input-2"
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