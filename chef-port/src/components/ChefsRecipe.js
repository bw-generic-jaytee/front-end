import React, { useEffect, useState } from 'react';
import {connect} from 'react-redux';
import {Button} from 'semantic-ui-react';

import NavBar from './NavBar';

import {getOneRecipe, deleteRecipe} from '../actions';



const ChefsRecipe = props => {
    const [editing, setEditing] = useState(false);
    // const [editedRecipe, setEditedRecipe] = useState({initState})

    useEffect(() => {
        props.getOneRecipe(props.match.params.id);
    }, [props.getOneRecipe])


    async function del(id) {
        // setTimeout(() => {
            await props.deleteRecipe(id, props.history)
            // props.history.push('/dashboard')
        // }, 700)
    }
    
    const editingRoute = (id) => {
        props.history.push(`/editrecipe/${id}`)
    }

    return(
        <div className = 'recipe-page'>
            <NavBar />
            <div className = 'recipe-container'>
                <h2>{props.recipe.name}</h2>
                <img src = {props.recipe.image_url} alt = {props.recipe.name} />
                <h3>By: {props.recipe.chef}</h3>
                <h4>{props.recipe.description}</h4>
                <h4>{props.recipe.meal_type}</h4>
                <h4>{props.recipe.ingredients}</h4>
                <h4>{props.recipe.instructions}</h4>
                <Button onClick = {() => del(props.recipe.id)}>Delete</Button>
                <Button onClick = {() => editingRoute(props.recipe.id)} >Edit</Button>
                
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