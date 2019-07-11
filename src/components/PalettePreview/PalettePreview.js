import React from 'react';

function PalettePreview(props) {
  const defaultColors = [
  '#FDC58D', 
  '#FFFFAA', 
  '#95E38A', 
  '#779DF2', 
  '#D2BEFD'
  ];
  const colors = props.colors_array || defaultColors;
  const colorPreviews = colors.map((color, index) => 
    <div 
      className="preview"
      style={{ background: color}}
      key={index}>
    </div>
  );

  return (
    <article className="PalettePreview">
      <h4>Palette Name</h4>
      <div className="flex-container">
        {colorPreviews}
      </div>
    </article>
  );
}

export default PalettePreview;