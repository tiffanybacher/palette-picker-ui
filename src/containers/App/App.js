import React from 'react';
import ColorsContainer from '../ColorsContainer/ColorsContainer';
import Header from '../Header/Header';
import ProjectsContainer from '../ProjectsContainer/ProjectsContainer';
import CreateAccount from '../CreateAccount/CreateAccount';
import { Route } from 'react-router-dom';
import Login from '../Login/Login';
import SavePalette from '../../components/SavePalette/SavePalette';

function App() {
  return (
    <div className="App">
      <Header />
      <Route exact path="/" component={ColorsContainer} />
      <Route exact path="/newpalette" component={ColorsContainer} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/save" component={SavePalette} />
      <Route exact path="/projects" component={ProjectsContainer} />
      <Route exact path="/register" component={CreateAccount} />
      <Route exact path="/signout" />
    </div>
  );
}

export default App;
