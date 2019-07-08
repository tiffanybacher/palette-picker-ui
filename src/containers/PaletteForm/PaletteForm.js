import React, { Component } from 'react';

class PaletteForm extends Component {
  constructor() {
    super();
    this.state = {
      redirect: false
    };
  };
  render() {
    return (
      <div>
        <div>
          <button onClick={this.props.generateColors}> Generate </button>
        </div>
        <div>
          {}
        </div>
      </div>
    );
  };
};

export default PaletteForm;