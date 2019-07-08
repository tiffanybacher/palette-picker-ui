import React from 'react';
import ColorsContainer from '../containers/ColorsContainer/ColorsContainer.js';
import Header from '../containers/Header/Header.js';
import ProjectsContainer from '../ProjectsContainer/ProjectsContainer';
import CreateAccount from '../CreateAccount/CreateAccount'

function App() {
  return (
    <div className="App">
      <Header />
      <ColorsContainer />
      <header>
        <h1>Palette Picker</h1>
      </header>
      <ProjectsContainer />
      <CreateAccount />
    </div>
  );
}

export default App;
