import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import {Form, Button} from 'semantic-ui-react';

import NavBar from './NavBar';

import {editRecipe} from '../actions';
import { axiosWithAuth } from '../utils/axiosWithAuth';


 
const EditRecipe = (props) => {
    console.log(props)

    const initState = {
        name:  props.recipe.name,
        description: props.recipe.description,
        image_url: props.recipe.image_url,
        meal_type: props.recipe.meal_type,
        ingredients: props.recipe.ingredients,
        instructions: props.recipe.instructions
    }

    const [formValues, setFormValues] = useState(initState)
    
    const changeHandler = e => {
        e.preventDefault();
        let value = e.target.value;
        setFormValues({...formValues, [e.target.name] : value})
    }

    const submitHandler = e => {
        e.preventDefault();
        props.editRecipe(formValues, props.recipe.id, props.history);
    }

    const cancelHandler = e => {
        e.preventDefault();
        props.history.push('/dashboard')
    }

    console.log(formValues)

    return(
        <div>
            <NavBar />
            <Form onSubmit = {submitHandler}>
                <Form.Field>
                    <label>Name:</label>
                    <input type = 'text' placeholder = 'name' name = 'name' onChange = {changeHandler} value = {formValues.name} />
                </Form.Field>
                <Form.Field>
                    <label>Description:</label>
                    <input type = 'text' placeholder = 'description' name = 'description' onChange = {changeHandler} value = {formValues.description}  />
                </Form.Field>
                <Form.Field>
                    <label>Image:</label>
                    <input type = 'text' placeholder = 'image url' name = 'image_url' onChange = {changeHandler} value = {formValues.image_url}  />
                </Form.Field>
                <Form.Field>
                    <label>Meal Type:</label>
                    <input type = 'text' placeholder = 'meal type' name = 'meal_type' onChange = {changeHandler} value = {formValues.meal_type}  />
                </Form.Field>
                <Form.Field>
                    <label>Ingredients:</label>
                    <input type = 'text' placeholder = 'ingredients' name = 'ingredients' onChange = {changeHandler} value = {formValues.ingredients}  />
                </Form.Field>
                <Form.Field>
                    <label>Instructions:</label>
                    <input type = 'text' placeholder = 'instructions' name = 'instructions' onChange = {changeHandler} value = {formValues.instructions} />
                </Form.Field>
                <Button type = 'submit'>Submit</Button>
                <Button onClick = {cancelHandler}>Cancel</Button>
            </Form>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        chef: state.chef_recipes,
        recipe: state.recipe
    }
}

export default connect(mapStateToProps, {editRecipe})(EditRecipe);