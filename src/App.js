import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import './App.css'

import { Provider } from "react-redux";
import store from './store/store'

import About from './Pages/about'
import Todo from './Pages/todo'

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <nav>
            <ul className="nav-list">
                <li className="nav-item">
                    <Link to="/">Tarefas</Link>
                </li>
                <li className="nav-item">
                    <Link to="/about">Sobre</Link>
                </li>
            </ul>
        </nav>
        <div id="main-page">
          <Switch>
            <Route exact path="/" component={Todo} />
            <Route path="/about" component={About} />
          </Switch>
        </div>
      </Router>
    </Provider>
  ) 
}

export default App
