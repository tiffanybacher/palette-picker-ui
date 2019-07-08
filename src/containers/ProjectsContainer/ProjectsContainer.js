import React, { Component } from 'react';
import ProjectCard from '../../components/ProjectCard/ProjectCard';

class ProjectsContainer extends Component {
  displayProjects = () => {
    let projectsDisplay;

    if (this.props.projects) {
      projectsDisplay = this.props.projects.map(project => 
        <ProjectCard 
          project={project} 
          key={project.id}
        />
      );
    } else {
      projectsDisplay = 
        <article className="empty-projects-card">
          <h3>There are no saved projects!</h3>
        </article>
    }

    return projectsDisplay;
  }

  render() {
    return (
      <section className="ProjectsContainer">
        <h2>Your Projects</h2>
        {this.displayProjects()}
        <ProjectCard />
        <button className="add-project-btn">
          <i className="fas fa-plus"></i>
          <p>Create New Project</p>
        </button>
      </section>
    );
  }
}

export default ProjectsContainer;
