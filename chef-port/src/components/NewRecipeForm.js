import React, {useState} from 'react';
import {connect} from 'react-redux';
import {Form, Button} from 'semantic-ui-react';

import {createRecipe} from '../actions';

import NavBar from './NavBar';

const initState = {
    name: '',
    description: '',
    image_url: '',
    meal_type: '',
    ingredients: '',
    instructions: ''
}

const NewRecipeForm = ({createRecipe, history}) => {
    const [newRecipe, setNewRecipe] = useState({...initState});

    const changeHandler = e => {
        e.preventDefault();
        let value = e.target.value
        setNewRecipe({...newRecipe, [e.target.name] : value})
    }

    const submitHandler = e => {
        e.preventDefault();
        createRecipe(newRecipe, history)
    }

    return(
        <div>
            <NavBar />
            <Form onSubmit = {submitHandler}>
                <Form.Field>
                    <label>Name:</label>
                    <input type = 'text' placeholder = 'name' name = 'name' onChange = {changeHandler} value = {newRecipe.name} />
                </Form.Field>
                <Form.Field>
                    <label>Description:</label>
                    <input type = 'text' placeholder = 'description' name = 'description' onChange = {changeHandler} value = {newRecipe.description} />
                </Form.Field>
                <Form.Field>
                    <label>Image:</label>
                    <input type = 'text' placeholder = 'image url' name = 'image_url' onChange = {changeHandler} value = {newRecipe.image_url} />
                </Form.Field>
                <Form.Field>
                    <label>Meal Type:</label>
                    <input type = 'text' placeholder = 'meal type' name = 'meal_type' onChange = {changeHandler} value = {newRecipe.meal_type} />
                </Form.Field>
                <Form.Field>
                    <label>Ingredients:</label>
                    <input type = 'text' placeholder = 'ingredients' name = 'ingredients' onChange = {changeHandler} value = {newRecipe.ingredients} />
                </Form.Field>
                <Form.Field>
                    <label>Instructions:</label>
                    <input type = 'text' placeholder = 'instructions' name = 'instructions' onChange = {changeHandler} value = {newRecipe.instructions} />
                </Form.Field>
                <Button type = 'submit'>Submit</Button>
            </Form>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        recipe: state.recipe
    }
}

export default connect(mapStateToProps, {createRecipe})(NewRecipeForm);