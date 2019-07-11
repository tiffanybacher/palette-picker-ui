import React from 'react';
import PalettePreview from '../PalettePreview/PalettePreview';

function ProjectCard(props) {
  let palettesDisplay;
  const { palettes } = props;

  if (palettes.length) {
    palettesDisplay = palettes.map(palette => 
      <PalettePreview 
        colors={palette.colors_array} 
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
        {props.project.name}
      </h3>
      <hr />
      <div className="previews-container">
       {palettesDisplay}
      </div>
    </article>
  );
}

export default ProjectCard;