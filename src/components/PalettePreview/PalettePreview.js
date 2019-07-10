import React from 'react';

function PalettePreview(props) {
  const defaultColors = [
    { id: 1, hex: '#FDC58D', isLocked: false },
    { id: 2, hex: '#FFFFAA', isLocked: false },
    { id: 3, hex: '#95E38A', isLocked: false },
    { id: 4, hex: '#779DF2', isLocked: false },
    { id: 5, hex: '#D2BEFD', isLocked: false }
  ];
  const colors = props.colors_array || defaultColors;
  const colorPreviews = colors.map(color => 
    <div 
      className="preview"
      style={{ background: color.hex}}
      key={color.id}>
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