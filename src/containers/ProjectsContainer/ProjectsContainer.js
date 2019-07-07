import React, { Component } from 'react';
import ProjectCard from '../../components/ProjectCard/ProjectCard';

class ProjectsContainer extends Component {
  displayProjects = () => {
    let projectsDisplay;
    const { projects } = this.props.projects;

    if (projects) {
      projectsDisplay = projects.map(project => {
        return (
          <ProjectCard 
            project={project} 
            key={project.id}
          />
        );
      });
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
      </section>
    );
  }
}

export default ProjectsContainer;
