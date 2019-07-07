import React, { Component } from 'react';
import { connect } from 'react-redux';

function ColorsContainer(props) {
  const colors = props.colors.map(color => (
    <Color ...color setColors={props.setColors} />
  ));

  return (
    {colors}
  );
};

export const mapStateToProps = (state) => ({
  colors: state.colors
});

export const mapDispatchToProps = (dispatch) => ({
  setColor: (color) => dispatch(setColor(color)) 
});

export default connect(mapStateToProps, mapDispatchToProps)(ColorsContainer);