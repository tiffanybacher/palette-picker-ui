import React, { Component } from 'react';
import { connect } from 'react-redux';

class ColorsContainer extends Component {

  componentDidMount() {
    this.generateColors();
  };

  randomColorGenerator = () => {
    let randomColor = "#000000".replace(/0/g, function() {
      return (~~(Math.random() * 16)).toString(16);
    });
    return randomColor;
  }; 

  generateColors = () => {
    let colors = [];
    let color;
    for (let i = 0; i < 5; i++) {
      color = { isLocked: false, hexCode: this.randomColorGenerator() };
      colors.push(color)
    };
    this.props.setColors();
  };

  colors = this.props.colors.map(color => (
    <Color ...color setColors={this.props.setColor} />
  ));

  render() {(
    {this.colors}
  )};
};

export const mapStateToProps = (state) => ({
  colors: state.colors
});

export const mapDispatchToProps = (dispatch) => ({
  setColor: (color) => dispatch(setColor(color)),
  setColors: (colors) => dispatch(setColors(colors))
});

export default connect(mapStateToProps, mapDispatchToProps)(ColorsContainer);