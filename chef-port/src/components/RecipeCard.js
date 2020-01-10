import React, {useEffect} from 'react';
import {Card, Image} from 'semantic-ui-react';
import {connect} from 'react-redux';
import NavBar from './NavBar';

import {getOneRecipe} from '../actions';

const RecipeCard = props => {

    useEffect(() => {
        props.getOneRecipe(props.match.params.id);
    }, [props.getOneRecipe]);

    return(
        <div className="recipe-page">
            <NavBar />
            <div className="recipe-container">
                <h2>{props.recipe.name}</h2>
                    <img src = {props.recipe.image_url} alt = {props.recipe.name} />
                    <h3>By: {props.recipe.chef}</h3>
                    <h4>{props.recipe.description}</h4>
                    <h4>{props.recipe.meal_type}</h4>
                    <h4>{props.recipe.ingredients}</h4>
                    <h4>{props.recipe.instructions}</h4>
                </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        recipe: state.recipe
    }
}

export default connect(mapStateToProps, {getOneRecipe})(RecipeCard);