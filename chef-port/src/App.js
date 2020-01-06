import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';

//components
import HomePage from './components/HomePage';
import PrivateRoute from './components/PrivateRoute';
import ChefDashboard from './components/ChefDashboard';
import LogIn from './components/LogIn';
import SignUp from './components/SignUp';

function App() {
  return (
  <Router>
    <div className="App">
      <Route exact path = '/' component = {HomePage} />
      <Route path = '/login' component = {LogIn} />
      <Route path = '/signup' component = {SignUp} />
      <PrivateRoute path = 'dashboard' component = {ChefDashboard} />
    </div>

  </Router>

  );
}

export default App;
