import React from 'react';
import ColorsContainer from '../ColorsContainer/ColorsContainer';
import Header from '../Header/Header';
import ProjectsContainer from '../ProjectsContainer/ProjectsContainer';
import CreateAccount from '../CreateAccount/CreateAccount';
import { Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header />
      <Route path="/home" component={ColorsContainer} />
      {
        //<Route path="/home/login" component={Login} />
      }
      {
        //<Route path="/home/save" component={} />
      }
      <Route path="/projects" component={ProjectsContainer} />
      <Route path="/home/register" component={CreateAccount} />
    </div>
  );
}

export default App;
