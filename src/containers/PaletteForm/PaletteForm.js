import React, { Component } from 'react';
import { Redirect } from "react-router-dom";

class PaletteForm extends Component {
  constructor() {
    super();
    this.state = {
      redirect: false,
      paletteName: ''
    };
  };

  redirectOrSave = async () => {
    if (this.props.isLoggedIn) {
      const init = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          name: this.state.paletteName,
          colors_array: this.props.colors, 
          project_id: this.state.project.id })
      };

      const response = await fetch('http://localhost:3001', init);
      const id = await response.json();
      // add id and palette to state

    } else {
      this.setState({ redirect: !this.state.redirect });
    };
  };

  handleChange = (e) => {
    console.log(e.target.value)
    const name = e.target.name
    this.setState({ [name]: e.target.value })
  };

  render() {
    // if(this.state.redirect) {
    //   return <Redirect to="/Home/Login"/>
    // }

    // const projectsDropDown = this.props.projects.map(project => {
    //   return <option value={project.id}> {project.name} </option>
    // })
    // {this.props.isLoggedIn && <select> {projectsDropDown} </select>}

    // {!this.props.isLoggedIn && <input onChange={this.handleChange} name="paletteName" placeholder="Palette Name" />}

    return (
      <div>
        <div>
          <button onClick={this.props.generateColors}> GENERATE </button>
        </div>
        <div>
          <button onClick={this.redirectOrSave}>SAVE</button>
        </div>
      </div>
    );
  };
};

export default PaletteForm;