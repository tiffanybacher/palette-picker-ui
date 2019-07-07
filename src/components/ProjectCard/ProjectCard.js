import React from 'react';
import PalettePreview from '../PalettePreview/PalettePreview';

function ProjectCard(props) {
  let palettesDisplay;
  const { palettes } = props;

  if (palettes) {
    palettesDisplay = palettes.map(palette => {
      return <PalettePreview colors={palette.colors_array} />
    });
  } else {
    palettesDisplay = <h4 className="empty-project-header">This project has no saved palettes!</h4>
  }

  return (
    <article className="ProjectCard">
      <h3>
        Project Name
      </h3>
      <hr />
      {palettesDisplay}
      <div className="previews-container">
        <PalettePreview />
        <PalettePreview />
        <PalettePreview />
        <PalettePreview />
      </div>
    </article>
  );
}

export default ProjectCard;