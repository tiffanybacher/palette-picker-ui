import React, { Component } from 'react';

class ProjectsContainer extends Component {
  displayProjects = () => {
    let projects;

    if (this.props.projects) {
      projects = projects.map(project => {
        console.log(project.name);
      });
    } else {
      projects = 
        <article className="empty-projects-card">
          <h3>You have not created any projects!</h3>
        </article>
    }

    return projects;
  }

  render() {
    return(
      <section className="ProjectsContainer">
        <h2>Your Projects</h2>
        {this.displayProjects()}
      </section>
    );
  }
}

export default ProjectsContainer;
