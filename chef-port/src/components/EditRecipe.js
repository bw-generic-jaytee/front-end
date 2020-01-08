import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import {Form, Button} from 'semantic-ui-react';

import NavBar from './NavBar';

import {editRecipe} from '../actions';
import { axiosWithAuth } from '../utils/axiosWithAuth';

const initState = {
    name: '',
    description: '',
    image_url: '',
    meal_type: '',
    ingredients: '',
    instructions: ''
}

const EditRecipe = (props) => {
    console.log(props)
    const [formValues, setFormValues] = useState({...initState})

    const changeHandler = e => {
        e.preventDefault();
        let value = e.target.value;
        setFormValues({...formValues, [e.target.name] : value})
    }

    const submitHandler = e => {
        e.preventDefault();
        editRecipe(formValues, props.history);
    }

    return(
        <div>
            <NavBar />
            <Form onSubmit = {submitHandler}>
                <Form.Field>
                    <label>Name:</label>
                    <input type = 'text' placeholder = 'name' name = 'name' onChange = {changeHandler}  />
                </Form.Field>
                <Form.Field>
                    <label>Description:</label>
                    <input type = 'text' placeholder = 'description' name = 'description' onChange = {changeHandler} />
                </Form.Field>
                <Form.Field>
                    <label>Image:</label>
                    <input type = 'text' placeholder = 'image url' name = 'image_url' onChange = {changeHandler} />
                </Form.Field>
                <Form.Field>
                    <label>Meal Type:</label>
                    <input type = 'text' placeholder = 'meal type' name = 'meal_type' onChange = {changeHandler} />
                </Form.Field>
                <Form.Field>
                    <label>Ingredients:</label>
                    <input type = 'text' placeholder = 'ingredients' name = 'ingredients' onChange = {changeHandler} />
                </Form.Field>
                <Form.Field>
                    <label>Instructions:</label>
                    <input type = 'text' placeholder = 'instructions' name = 'instructions' onChange = {changeHandler} />
                </Form.Field>
                <Button type = 'submit'>Submit</Button>
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