import React from 'react';
import { shallow } from 'enzyme';
import { ProjectCard } from './ProjectCard';

describe('ProjectCard', () => {
  let mockProject;
  let mockPalettes;
  let wrapper;

  beforeEach(() => {
    mockProject = [
      { 
        id: 1,
        name: 'Project 1', 
      }
    ];
    mockPalettes = [
      {
        id: 11,
        name: 'Palette 1',
        colors_array: [
          '#FDC58D', 
          '#FFFFAA', 
          '#95E38A', 
          '#779DF2', 
          '#D2BEFD'
        ],
        project_id: 1
      }
    ];
    wrapper = shallow(
      <ProjectCard 
        project={mockProject}
        palettes={mockPalettes}
      />
    );
  });

  it('should match snapshot if there are palettes', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should match snapshot if there are no palettes', () => {
    wrapper = shallow(
      <ProjectCard
        project={mockProject}
        palettes={[]}
      />
    );

    expect(wrapper).toMatchSnapshot();
  });
});