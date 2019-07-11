import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deletePalette } from '../../thunks/deletePalette';
import PalettePreview from '../PalettePreview/PalettePreview';

export class ProjectCard extends Component {
  handleDeletePalette = (paletteId) => {
    this.props.deletePalette(paletteId)
  }

  render() {
    let palettesDisplay;
    const { palettes } = this.props;

    if (palettes.length) {
      palettesDisplay = palettes.map(palette => 
        <PalettePreview 
          handleDeletePalette={this.handleDeletePalette}
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
        <h3>
          {this.props.project.name}
        </h3>
        <hr />
        <div className="previews-container">
         {palettesDisplay}
        </div>
      </article>
    );
  }
}

export const mapDispatchToProps = (dispatch) => ({
  deletePalette: (paletteId) => dispatch(deletePalette(paletteId))
})

export default connect(undefined, mapDispatchToProps)(ProjectCard);