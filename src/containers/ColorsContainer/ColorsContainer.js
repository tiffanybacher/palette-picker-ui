import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setColors, toggleLocked } from '../../actions';
import Color from '../../components/Color/Color.js';
import PaletteForm from '../../containers/PaletteForm/PaletteForm.js';

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
    const colors = this.props.colors.map((color, index) => {
      if (color.isLocked) {
        return color;
      } else {
        return { isLocked: false, hexCode: this.randomColorGenerator(), id: index };
      };
    });
    this.props.setColors(colors);
  };


  render() {
    const colors = this.props.colors.map(color => (
      <Color {...color} toggleLocked={this.props.toggleLocked} />
    ));
    return (
      <div>
        {colors}
        <PaletteForm isLoggedIn={this.props.isLoggedIn} generateColors={this.generateColors} />
      </div>
    );
  };
};

export const mapStateToProps = (state) => ({
  colors: state.colors,
  isLoggedIn: state.isLoggedIn
});

export const mapDispatchToProps = (dispatch) => ({
  toggleLocked: (id) => dispatch(toggleLocked(id)),
  setColors: (colors) => dispatch(setColors(colors))
});

export default connect(mapStateToProps, mapDispatchToProps)(ColorsContainer);