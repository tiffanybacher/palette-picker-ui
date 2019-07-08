import React from 'react';

function Color(props) {
  return (
    <section>
      <div style={{ background: props.hexCode }}></div>
      {props.isLocked && <p onClick={() => props.toggleLocked(props.id)}> LOCKED </p>}
      {!props.isLocked && <p onClick={() => props.toggleLocked(props.id)}> UNLOCKED </p>}
      <p> {props.hexCode} </p>
    </section>
  );
};

export default Color;