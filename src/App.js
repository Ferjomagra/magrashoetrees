import React from 'react';
import './App.css';
import Home from './pages'
import contactUs from './pages/contactUs';
import ourShoeTrees from './pages/ourShoeTrees';
import ourWoods from './pages/ourWoods';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <Router>

      <Switch>
        <Route path="/" component={Home} exact/>
        <Route path="/contactUs" component={contactUs} exact/>
        <Route path="/ourShoeTrees" component={ourShoeTrees} exact/>
        <Route path="/ourWoods" component={ourWoods} exact/>
      </Switch>

    </Router>
  );
}

export default App;