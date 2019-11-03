import React from 'react';
import {BrowserRouter as Router, Switch, Route, NavLink} from "react-router-dom";

import './App.css';

import Home from './Home';
import About from './About';
import Skills from './Skills';
import Contact from './Contact';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fab)


function App() {
  return (<Router>
    <div className="App">
      <nav>
        <NavLink exact to="/" activeClassName="nav-active">home</NavLink>
        |
        <NavLink to="/about" activeClassName="nav-active">about</NavLink>
        |
        <NavLink to="/skills" activeClassName="nav-active">skills</NavLink>
        |
        <NavLink to="/contact"activeClassName="nav-active">contact</NavLink>
      </nav>

      <Switch>

        <Route path="/about"> <About/></Route>
        <Route path="/contact"> <Contact/></Route>
        <Route path="/skills"> <Skills/></Route>
        <Route path="/"> <Home/></Route>

      </Switch>

    </div>

  </Router>);
}

export default App;
