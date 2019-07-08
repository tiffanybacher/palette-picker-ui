import React from 'react';
import ProjectsContainer from '../ProjectsContainer/ProjectsContainer';
import CreateAccount from '../CreateAccount/CreateAccount'

function App() {
  return (
    <div className="App">
      <header>
        <h1>Palette Picker</h1>
      </header>
      <ProjectsContainer />
      <CreateAccount />
    </div>
  );
}

export default App;
