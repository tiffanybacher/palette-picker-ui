import React from 'react';

function PalettePreview(props) {
rs = props.colors;
  const colorPreviews = colors.map(color => 
    <div 
      className="preview"
      style={{ background: color.hexCode}}
      key={color.id}>
    </div>
  );

  return (
    <article className="PalettePreview">
      <h4>Palette Name</h4>
      <div className="flex-container">
        {colorPreviews}
        <i 
          onClick={() => props.deletePalette(props.paletteId)}
          className="fas fa-times">
        </i>
      </div>
    </article>
  );
}

export default PalettePreview;