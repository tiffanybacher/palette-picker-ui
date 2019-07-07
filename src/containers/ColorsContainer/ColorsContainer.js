import React, { Component } from 'react';

function ColorsContainer(props) {
  
  
  return (

  );
};

export const mapStateToProps = (state) => ({
  colors: state.colors
});

export const mapDispatchToProps = (dispatch) => ({
  setColor: (color) => dispatch(setColor(color)) 
});

export default ColorsContainer;