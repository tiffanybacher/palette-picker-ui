import React from 'react';
import { shallow } from 'enzyme';
import ProjectsContainer from './ProjectsContainer';

describe('ProjectsContainer', () => {
  let mockProjects;
  let wrapper;

  beforeEach(()=> {
    mockProjects = [
      { 
        id: 1,
        name: 'Project 1', 
      }
    ];
    wrapper = shallow(
      <ProjectsContainer projects={mockProjects} />
    );
  });

  it('should match snapshot if there are saved projects', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should match snapshot if there are no saved projects', () => {
    wrapper = shallow(
      <ProjectsContainer projects={[]} />
    );

    expect(wrapper).toMatchSnapshot();
  });
});