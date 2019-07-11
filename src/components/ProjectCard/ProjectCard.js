import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deletePalette } from '../../thunks/deletePalette';
import { deleteProject } from '../../thunks/deleteProject';
import PalettePreview from '../PalettePreview/PalettePreview';

export class ProjectCard extends Component {
  render() {
    let palettesDisplay;
    const { palettes } = this.props;

    if (palettes.length) {
      palettesDisplay = palettes.map(palette => 
        <PalettePreview 
          deletePalette={this.props.deletePalette}
          colors={palette.colors_array} 
          paletteId={palette.id}
          key={palette.id} 
        />
      );
    } else {
      palettesDisplay = 
        <h4 className="empty-project-header">
          This project has no saved palettes!
        </h4>
    }

    return (
      <article className="ProjectCard">
        <div className="card-header">
          <h3>
            {this.props.project.name}
          </h3>
          <i 
            onClick={() => this.props.deleteProject(this.props.project.id)}
            className="fas fa-trash-alt">
          </i>
        </div>
        <hr />
        <div className="previews-container">
         {palettesDisplay}
        </div>
      </article>
    );
  }
}

export const mapDispatchToProps = (dispatch) => ({
  deletePalette: (paletteId) => dispatch(deletePalette(paletteId)),
  deleteProject: (projectId) => dispatch(deleteProject(projectId))
})

export default connect(undefined, mapDispatchToProps)(ProjectCard);