import React, { Component } from 'react';

class PaletteForm extends Component {
  constructor() {
    super();
    this.state = {
      redirect: false
    };
  };

  render() {
  // const projectsDropDown = this.props.projects.map(project => {
  //   return <option value={project.name}/>
  // })
  // {this.props.isLoggedIn && <select> {projectsDropDown} </select>}

  // {this.props.isLoggedIn && <input placeholder="Palette Name" />

    return (
      <div>
        <div>
          <button onClick={this.props.generateColors}> GENERATE </button>
        </div>
        <div>
          <button>SAVE</button>
        </div>
      </div>
    );
  };
};

export default PaletteForm;