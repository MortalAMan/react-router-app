import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Home from './Home';
import '../css/App.css';
  
  const App = () => (
    <Route exact path='/' component={Home} />
  );

export default App;
