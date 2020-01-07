import React, {useEffect} from 'react';
import {Card, Image} from 'semantic-ui-react';
import {connect} from 'react-redux';
import NavBar from './NavBar';

import {getOneRecipe} from '../actions';

const RecipeCard = props => {

    useEffect(() => {
        props.getOneRecipe();
    }, [props.getOneRecipe]);

    return(
        <div class="recipeCard">
            <NavBar />
            <div className="recipe">
                <h2>Recipe Card</h2>
                <Card key = {props.recipe.id} onClick = {getOneRecipe}>
                    <Image src = {props.recipe.image_url} />
                    <Card.Content>
                        <Card.Header>{props.recipe.name}</Card.Header>
                        <Card.Description>{props.recipe.chef}</Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                        <p>{props.recipe.description}</p>
                    </Card.Content>
                </Card>
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