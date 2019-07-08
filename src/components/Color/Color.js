import React from 'react';

function Color(props) {
  return (
    <section>
      <p> HI </p>
      <div style={{ background: props.hexCode }}></div>
      {props.isLocked && <p onClick={props.setColor}> LOCKED </p>}
      {!props.isLocked && <p onClick={props.setColor}> UNLOCKED </p>}
      <p> {props.hexCode} </p>
    </section>
  );
};

export default Color;