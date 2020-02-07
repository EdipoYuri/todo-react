import React from 'react';
import './App.css';


import About from './Pages/about';
import Todo from './Pages/todo';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div id="main-page" >
      <Router>
        <Switch>
          <Route exact path="/" component={Todo} />
          <Route path="/about" component={About} />
        </Switch>
      </Router>
    </div>    
  )
}

export default App;
