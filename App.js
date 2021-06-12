import './App.css';
import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Players from './Players'
import Login from './Login'
import Registration from './Registration'
import Team from './Team'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>

          <Route path="/Team"><Team></Team></Route>
          <Route path="/Login"><Login></Login></Route>
          <Route path="/Registration"><Registration /></Route>
          <Route path="/"><Players /></Route>

        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
