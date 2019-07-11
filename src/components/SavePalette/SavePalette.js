import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addProject, addPalette } from '../../actions';


class SavePalette extends Component {
  constructor() {
    super();
    this.state = {
      paletteName: '',
      isNewProject: true,
      selectedProjectId: 0
    };
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]:e.target.value });
  };

  createProject = () => {
    this.setState({ isNewProject: true });
  };

  addToProject = () => {
    this.setState({ isNewProject: false });
  };

  createInit = (body) => ({
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body)
  });

  postProject = async (e) => {
    try {
      const init = this.createInit({ user_id: this.props.user.id, name: e.target[1].value });
      const response = await fetch('http://localhost:3001/api/v1/projects', init);
      const result = await response.json();
      const id = result.id;
      const projectToAdd = { id, user_id: this.props.user.id, name: e.target[1].value };
      this.props.addProject(projectToAdd);
      return id;
    } catch(error) {
      console.log(error);
    };
  };

  postPalette = async (project_id) => {
    try {
      const init = this.createInit({ 
        project_id: project_id, 
        name: this.state.paletteName, 
        colors_array:this.props.colors 
      });
      const response = await fetch('http://localhost:3001/api/v1/palettes', init);
      const result = await response.json();
      const id = result.id
      const paletteToAdd = { project_id, id, name: this.state.paletteName, colors_array: this.props.colors };
      this.props.addPalette(paletteToAdd);
    } catch (error) {
      console.log(error);
    }
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    e.persist();
    if(this.state.isNewProject) {
      const project_id = await this.postProject(e);
      this.postPalette(project_id);
    } else {
      this.postPalette(this.state.selectedProjectId);
    };
  };

  selectChange = (e) => {
    e.persist();
    this.setState({ selectedProjectId: e.target.value });
  }

  render() {
    const options = this.props.projects.map(project => {
      return <option value={project.id}> {project.name} </option>
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
        {
          !this.state.isNewProject 
          && 
          <select onChange={this.selectChange}> <option>Please select a project</option> {options} </select>}
        <button type="submit">SAVE</button>
      </form>
    );
  };
};

export const mapStateToProps = (state) => ({
  user: state.user,
  projects: state.projects,
  colors: state.colors
});

export const mapDispatchToProps = (dispatch) => ({
  addProject: (project) => dispatch(addProject(project)),
  addPalette: (palette) => dispatch(addPalette(palette))
});

export default connect(mapStateToProps, mapDispatchToProps)(SavePalette);