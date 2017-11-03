import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Home';
import About from './About';
import NavBar from './NavBar';
import NoMatch from './NoMatch';
import '../css/App.css';
  
  const App = () => (
    <div>
      <NavBar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/about' component={About} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  );

export default App;
