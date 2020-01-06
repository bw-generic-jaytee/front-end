import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';

//components
import HomePage from './components/HomePage';
import PrivateRoute from './components/PrivateRoute';
import ChefDashboard from './components/ChefDashboard';
import LogIn from './components/LogIn';

function App() {
  return (
  <Router>
    <div className="App">
      <Route exact path = '/' component = {HomePage} />
      <Route path = '/login' component = {LogIn} />
      <PrivateRoute path = 'dashboard' component = {ChefDashboard} />
    </div>

  </Router>

  );
}

export default App;
