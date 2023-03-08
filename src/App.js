import React from 'react';
// import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import ListAirlineComponent from './components/ListAirlineComponent';
import CreateAirlineComponent from './components/CreateAirlineComponent';
import ViewAirlineComponent from './components/ViewAirlineComponent';
import UpdateAirlineComponent from './components/UpdateAirlineComponent';

function App() {
  return (
    <div>
        <Router>
                <div className="container">
                    <Switch> 
                          <Route path = "/" exact component = {ListAirlineComponent}></Route>
                          <Route path = "/reserve" component = {ListAirlineComponent}></Route>
                          <Route path = "/add/:id" component = {CreateAirlineComponent}></Route>
                          <Route path = "/edit/:id" component = {UpdateAirlineComponent}></Route>
                          <Route path = "/view/:id" component = {ViewAirlineComponent}></Route>
                    </Switch>
                </div>
        </Router>
    </div>
    
  );
}

export default App;
