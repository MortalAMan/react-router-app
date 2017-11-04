import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';
import Home from './Home';
import About from './About';
import NavBar from './NavBar';
import Login from './Login';
import DashBoard from './DashBoard';
import Product from './Product';
import NoMatch from './NoMatch';
import '../css/App.css';
  
  const App = () => (
    <div>
      <NavBar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/about' component={About} />
        <Route path='/login' component={Login} />
        <ProtectedRoute path='/dashBoard' component={DashBoard} />
        <ProtectedRoute path='/products/:id' component={Product} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  );

export default App;
