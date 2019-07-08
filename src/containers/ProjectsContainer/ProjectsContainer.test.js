import React from 'react';
import { shallow } from 'enzyme';
import ProjectsContainer from './ProjectsContainer';

describe('ProjectsContainer', () => {
  let mockProjects;
  // let mockPalettes;
  let wrapper;

  beforeEach(()=> {
    mockProjects = [
      { 
        id: 1,
        name: 'Project 1', 
      }
    ];
    // mockPalettes = [
    //   {
    //     id: 11,
    //     name: 'Palette 1',
    //     colors_array: [
    //       '#FDC58D', 
    //       '#FFFFAA', 
    //       '#95E38A', 
    //       '#779DF2', 
    //       '#D2BEFD'
    //     ],
    //     project_id: 1
    //   }
    // ];
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