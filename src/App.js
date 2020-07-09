import React from 'react';

import './App.css';
import HomePage from './pages/HomePage/HomePage';
import { Switch, Route } from 'react-router-dom';
import Shop from './pages/Shop/Shop';

import Header from './Components/Header/Header';
function App() {
  return (
    <div>
      {/* <HomePage /> */}
      <Header />
      <Switch>

        <Route exact path='/' component={HomePage} />
        <Route exact path='/shop' component={Shop} />
      </Switch>

    </div>
  );
}

export default App;
