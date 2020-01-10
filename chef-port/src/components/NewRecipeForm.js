import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import {Form, Button} from 'semantic-ui-react';

import NavBar from './NavBar';

import {createRecipe} from '../actions';

const initState = {
    name: '',
    description: '',
    image_url: '',
    meal_type: '',
    ingredients: '',
    instructions: ''
}

const NewRecipeForm = ({createRecipe, history, error}) => {
    const [newRecipe, setNewRecipe] = useState({...initState});
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        if(error !== null) {
            setErrorMessage(error)
        }
    }, [error])

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
            <div>
                <NavBar />
                </div>
            <div className = 'container'>
            <p>{errorMessage}</p>
            <Form onSubmit = {submitHandler}>
                <Form.Field>
                    <label>Recipe Name:</label>
                    <input type = 'text' placeholder = 'recipe name' name = 'name' onChange = {changeHandler} value = {newRecipe.name} required />
                </Form.Field>
                <Form.Field>
                    <label>Description:</label>
                    <input type = 'text' placeholder = 'short description' name = 'description' onChange = {changeHandler} value = {newRecipe.description} required />
                </Form.Field>
                <Form.Field>
                    <label>Image:</label>
                    <input type = 'text' placeholder = 'image url' name = 'image_url' onChange = {changeHandler} value = {newRecipe.image_url} required />
                </Form.Field>
                <Form.Field>
                    <label>Meal Type:</label>
                    {/* <input type = 'text' placeholder = 'meal type' name = 'meal_type' onChange = {changeHandler} value = {newRecipe.meal_type} required /> */}
                    <select name = 'meal_type' onChange = {changeHandler} required >
                        <option value = '' >Choose a Meal Type</option>
                        <option value = 'Breakfast'>Breakfast</option>
                        <option value = 'Lunch'>Lunch</option>
                        <option value = 'Dinner'>Dinner</option>
                    </select>
                </Form.Field>
                <Form.Field>
                    <label>Ingredients:</label>
                    <input type = 'text' placeholder = 'milk, eggs, cheese' name = 'ingredients' onChange = {changeHandler} value = {newRecipe.ingredients} />
                </Form.Field>
                <Form.Field>
                    <label>Instructions:</label>
                    <input type = 'text' placeholder = 'instructions' name = 'instructions' onChange = {changeHandler} value = {newRecipe.instructions} required />
                </Form.Field>
                <Button type = 'submit'>Submit</Button>
            </Form>
        </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        recipe: state.recipe,
        error: state.error
    }
}

export default connect(mapStateToProps, {createRecipe})(NewRecipeForm);