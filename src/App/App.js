import React from 'react';
import ColorsContainer from '../containers/ColorsContainer/ColorsContainer.js';
import Header from '../containers/Header/Header.js';

function App() {
  return (
    <div className="App">
    <Header />
      <header>
        <h1>Palette Picker</h1>
      </header>
      <ColorsContainer />
    </div>
  );
}

export default App;
