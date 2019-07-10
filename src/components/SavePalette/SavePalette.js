import React, { Component } from 'react';
import { connect } from 'react-redux';

class SavePalette extends Component {
  constructor() {
    super();
    this.state = {
      paletteName: '',
      isNewProject: true,
      projectName: ''
    };
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]:e.target.value });
  };

  createProject = (e) => {
    this.setState({ isNewProject: true });
  };

  addToProject = (e) => {
    this.setState({ isNewProject: false })
  };

  createInit = (body) => ({
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body)
  });

  handleSubmit = (e) => {
    e.preventDefault();
    e.persist();
    // const 
    // if(this.state.isNewProject) {
    //   fetch('http://localhost:3001/api/v1/')
    // };
  };

  render() {
    const options = this.props.projects.map(project => {
      return <option value={project.name}> {project.name} </option>
    });

    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="name"> PALETTE NAME:</label>
        <input name="paletteName" onChange={this.handleChange}/>
        <p onClick={this.addToProject}>Add to existing project</p>
        <p onClick={this.createProject}>Create new project</p>
        {
          this.state.isNewProject 
          && 
          <input name="projectName" placeholder="Project Name" onChange={this.handleChange}/>
        }
        {!this.state.isNewProject && <select> {options} </select>}
        <button type="submit">SAVE</button>
      </form>
    );
  };
};

export const mapStateToProps = (state) => ({
  user: state.user,
  projects: state.projects
});

export default connect(mapStateToProps)(SavePalette);