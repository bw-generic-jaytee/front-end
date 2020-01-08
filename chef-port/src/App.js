import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';

//components
import HomePage from './components/HomePage';
import PrivateRoute from './components/PrivateRoute';
import ChefDashboard from './components/ChefDashboard';
import LogIn from './components/LogIn';
import SignUp from './components/SignUp';
import RecipeCard from './components/RecipeCard';
import NewRecipeForm from './components/NewRecipeForm';
import EditRecipe from './components/EditRecipe';

function App() {
  return (
  <Router>
    <div className="App">
      <Route exact path = '/' component = {HomePage} />
      <Route path = '/recipe/:id' component = {RecipeCard} />
      <Route path = '/login' component = {LogIn} />
      <Route path = '/signup' component = {SignUp} />
      <PrivateRoute exact path = '/dashboard' component = {ChefDashboard} />
      <PrivateRoute path = '/addrecipe' component = {NewRecipeForm} />
      <PrivateRoute path = '/editrecipe/:id' component = {EditRecipe} />
    </div>

  </Router>

  );
}

export default App;
