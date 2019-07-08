import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setColors, setColor } from '../../actions';
import Color from '../../components/Color/Color.js';

class ColorsContainer extends Component {

  componentDidMount() {
    this.generateColors();
  };

  randomColorGenerator = () => {
    let randomColor = "#000000".replace(/0/g, function() {
      return (Math.floor(Math.random() * 16)).toString(16);
    });
    return randomColor;
  }; 

  generateColors = () => {
    let colors = [];
    let color;
    for (let i = 0; i < 5; i++) {
      color = { isLocked: false, hexCode: this.randomColorGenerator(), id: i };
      colors.push(color);
    };
    this.props.setColors(colors);
  };


  render() {
    const colors = this.props.colors.map(color => (
      <Color {...color} setColors={this.props.setColor} />
    ));
    return (
      <div>
        {colors}
      </div>
    );
  };
};

export const mapStateToProps = (state) => ({
  colors: state.colors
});

export const mapDispatchToProps = (dispatch) => ({
  setColor: (color) => dispatch(setColor(color)),
  setColors: (colors) => dispatch(setColors(colors))
});

export default connect(mapStateToProps, mapDispatchToProps)(ColorsContainer);