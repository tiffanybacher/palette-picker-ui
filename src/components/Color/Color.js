import React from 'react';

function Color(props) {
  return (
    <section className="Color-block">
      <div className="color" style={{ background: props.hexCode }}></div>
      {props.isLocked && <p onClick={() => props.toggleLocked(props.id)}><i class="fas fa-lock"></i></p>}
      {!props.isLocked && <p onClick={() => props.toggleLocked(props.id)}><i class="fas fa-unlock"></i></p>}
      <p className="hex-code">{props.hexCode}</p>
    </section>
  );
};

export default Color;