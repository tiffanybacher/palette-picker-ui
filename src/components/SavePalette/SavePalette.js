import React, { Component } from 'react';

class SavePalette extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      isNewProject: false
    };
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]:e.target.value });
  };

  addNewProject = (e) => {
    this.setState({ isNewProject: true });
  };

  // add to existing project conditionally rendered on projects in store
  //  

  render() {
    return (
      <form>
        <label htmlFor="name"> PALETTE NAME:</label>
        <input name="name" onChange={this.handleChange}/>
        <p>Add to existing project</p>
        <p>Create new project</p>
        <button type="submit">SAVE</button>
      </form>
    );
  };
};

export default SavePalette;