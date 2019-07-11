import React from 'react';

function PalettePreview(props) {
  // const defaultColors = [
  //   { id: 1, hexCode: '#FDC58D', isLocked: false },
  //   { id: 2, hexCode: '#FFFFAA', isLocked: false },
  //   { id: 3, hexCode: '#95E38A', isLocked: false },
  //   { id: 4, hexCode: '#779DF2', isLocked: false },
  //   { id: 5, hexCode: '#D2BEFD', isLocked: false }
  // ];
  const colors = props.colors;
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
      </div>
    </article>
  );
}

export default PalettePreview;