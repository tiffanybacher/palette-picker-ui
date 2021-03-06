import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setUser, setProjects, setPalettes } from '../../actions';
import { Redirect, Link } from 'react-router-dom';

export class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
      error: ''
    };
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]:e.target.value })
  };

  getUser = async (e) => {
    e.preventDefault();
    const { username, password } = this.state;
    try {
      const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/v1/users/${username}/${password}`);
      if(!response.ok) {
        throw Error('incorrect username/password');
      }
      const result = await response.json();
      this.props.setUser(result);
    } catch (error) {
      this.setState({ error: error.message });
    };
    await this.getProjects();
  };

  getProjects = async () => {
    try {
      const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/v1/projects?user_id=${this.props.user.id}`);
      if(!response.ok) {
        throw Error('Failed to grab projects');
      }
      const projects = await response.json();
      this.props.setProjects(projects);
      this.getPalettes(projects);
    } catch (error) {
      console.log({ error: error.message });
    };
  };

  getPalettes = (projects) => {
    let palettes = [];
    projects.forEach(async (project) => {
      try {
        const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/v1/palettes?project_id=${project.id}`);
        const result = await response.json();
        const cleanPalettes = result.map((palette) => ({
          project_id: palette.project_id,
          id: palette.id,
          name: palette.name,
          colors_array: palette.colors_array.map(color => JSON.parse(color))
        }));
        palettes = [...palettes, ...cleanPalettes];
        this.props.setPalettes(palettes);
      } catch(error) {
        console.log({ error: error.message });
      };

    });    
  };

  render() {
    if (this.props.user.username) {
      return <Redirect to='/' />
    }
    
    return (
      <div className="Login">
        <form onSubmit={this.getUser} className="login-form">
          <h3>Login</h3>
          <label htmlFor="username">USERNAME:</label>
          <input type="text" onChange={this.handleChange} name="username" />
          <label htmlFor="password">PASSWORD:</label>
          <input type="password" onChange={this.handleChange} name="password"/> 
          <button type="submit" className="login-btn">SUBMIT</button>
          {this.state.error && <p>{this.state.error}</p>}
          <p className="signup-msg">
            Not a member?
            <Link to="/register" className="signup-link"> Create an account.</Link>
          </p>
        </form>
      </div>
    );
  };
};

export const mapStateToProps = (state) => ({
  user: state.user,
  projects: state.projects
});

export const mapDispatchToProps = (dispatch) => ({
  setUser: (user) => dispatch(setUser(user)),
  setProjects: (projects) => dispatch(setProjects(projects)),
  setPalettes: (palettes) => dispatch(setPalettes(palettes))
});



export default connect(mapStateToProps, mapDispatchToProps)(Login);