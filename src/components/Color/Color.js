import React from 'react';

function Color(props) {
  return (
    <section className="palette">
      <div className="color" style={{ background: props.hexCode }}></div>
      {props.isLocked && <p id="locked" onClick={() => props.toggleLocked(props.id)}> LOCKED </p>}
      {!props.isLocked && <p onClick={() => props.toggleLocked(props.id)}> UNLOCKED </p>}
      <p> {props.hexCode} </p>
    </section>
  );
};

export default Color;