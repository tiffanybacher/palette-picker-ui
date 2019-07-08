import React, { Component } from 'react';
import { Redirect } from "react-router-dom";

class PaletteForm extends Component {
  constructor() {
    super();
    this.state = {
      redirect: false
    };
  };

  redirectOrSave = () => {
    if (this.props.isLoggedIn) {
      //post to palettes
    } else {
      this.setState({ redirect: !this.state.redirect });
    };
  };

  render() {
    // if(this.state.redirect) {
    //   return <Redirect to="/Login"/>
    // }
    
    // const projectsDropDown = this.props.projects.map(project => {
    //   return <option value={project.name}/>
    // })
    // {this.props.isLoggedIn && <select> {projectsDropDown} </select>}

    // {this.props.isLoggedIn && <input placeholder="Palette Name" />}

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