import React, { Component } from 'react';
import { connect } from 'react-redux';

class SavePalette extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      isNewProject: true
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
  }

  render() {
    const options = this.props.projects.map(project => {
      return <option value={project.name}> {project.name} </option>
    });

    return (
      <form>
        <label htmlFor="name"> PALETTE NAME:</label>
        <input name="name" onChange={this.handleChange}/>
        <p onClick={this.addToProject}>Add to existing project</p>
        <p onClick={this.createProject}>Create new project</p>
        {this.state.isNewProject && <input placeholder="Project Name"/>}
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