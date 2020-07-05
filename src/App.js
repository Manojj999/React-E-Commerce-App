import React from 'react';

import './App.css';
import HomePage from './pages/HomePage/HomePage';
import { Switch, Route } from 'react-router-dom';

const HatsPage = () => {
  return (<div>
    <h1>Hats Page</h1>
  </div>)
}
function App() {
  return (
    <div>
      {/* <HomePage /> */}
      <Switch>

        <Route exact path='/' component={HomePage} />
        <Route exact path='/hats' component={HatsPage} />
      </Switch>

    </div>
  );
}

export default App;
