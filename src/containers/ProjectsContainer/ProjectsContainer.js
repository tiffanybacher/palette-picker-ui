import React, { Component } from 'react';
import ProjectCard from '../../components/ProjectCard/ProjectCard';

class ProjectsContainer extends Component {
  displayProjects = () => {
    let projects;

    if (this.props.projects) {
      projects = projects.map(project => {
        return <p>{project.name}</p>
      });
    } else {
      projects = 
        <article className="empty-projects-card">
          <h3>There are no saved projects!</h3>
        </article>
    }

    return projects;
  }

  render() {
    return (
      <section className="ProjectsContainer">
        <h2>Your Projects</h2>
        {this.displayProjects()}
        <ProjectCard />
      </section>
    );
  }
}

export default ProjectsContainer;
