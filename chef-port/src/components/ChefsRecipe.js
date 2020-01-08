import React, { useEffect } from 'react';
import {connect} from 'react-redux';
import {Button} from 'semantic-ui-react';

import NavBar from './NavBar';

import {getOneRecipe, deleteRecipe} from '../actions';

const ChefsRecipe = props => {
    
    useEffect(() => {
        props.getOneRecipe(props.match.params.id);
    }, [props.getOneRecipe])


    
    return(
        <div>
            <NavBar />
            <div className = 'recipe-container'>
                <h2>{props.recipe.name}</h2>
                <img src = {props.recipe.img_id} alt = {props.recipe.name} />
                <h3>{props.recipe.chef}</h3>
                <h4>{props.recipe.description}</h4>
                <h4>{props.recipe.meal_type}</h4>
                <p>WILL FINISH/FORMAT THIS LATER</p>
                <Button onClick = {() => deleteRecipe(props.recipe.id)}>Delete</Button>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        chef_recipes: state.chef_recipes,
        recipe: state.recipe
    }
}

export default connect(mapStateToProps, {getOneRecipe, deleteRecipe})(ChefsRecipe);