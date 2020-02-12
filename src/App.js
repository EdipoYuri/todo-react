import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import './App.css'

import About from './Pages/about'
import Todo from './Pages/todo'
import Episodes from './Pages/rick-morty/rick-morty-ep'

const App = () => {
  return (
    <Router>
      <nav>
          <ul className="nav-list">
              <li className="nav-item">
                  <Link to="/">To-do</Link>
              </li>
              <li className="nav-item">
                  <Link to="/about">About</Link>
              </li>
          </ul>
      </nav>
      <div id="main-page">
        <Switch>
          <Route exact path="/" component={Todo} />
          <Route path="/about" component={About} />
          <Route path="/episodes" component={Episodes} />
        </Switch>
      </div>
    </Router>
  )
}

export default App
