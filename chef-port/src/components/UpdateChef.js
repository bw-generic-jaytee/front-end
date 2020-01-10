import React, {useState, useEffect} from 'react';
import {Button, Form} from 'semantic-ui-react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import {updateUser, getAllRecipes} from '../actions';
import NavBar from './NavBar';



const UpdateChef = props => {
    const [errorMessage, setErrorMessage] = useState('')

    useEffect(() => {
        if (props.location.chef !== undefined ) {
            setValues(props.location.chef)
        } else {
            props.history.push('/dashboard')
        }
        if (props.error) {
            setErrorMessage(props.error)
        }
    }, [])

    // const initState = {
    //     email: props.location.chef.username,
    //     location: props.location.chef.location,
    //     phone_number: props.location.chef.phone,
    //     username: props.location.chef.username,
       
    // }

    const [chef, setValues] = useState({...props.location.chef});
    console.log(props.location.chef)



    const changeHandler = e => {
        e.preventDefault();
        let value = e.target.value
        setValues({...chef, [e.target.name] : value})
    }

    const submitHandler = e => {
        e.preventDefault();
        props.updateUser(chef, props.history)
        props.getAllRecipes();
        // console.log(values)
    }

    const cancelHandler = e => {
        e.preventDefault();
        props.history.push('/dashboard')
    }

    return(
        <div>
            <NavBar />
            <p>{errorMessage}</p>
            <Form onSubmit = {submitHandler} >
                <Form.Field>
                    <label>Email:</label>
                    <input type = 'text' placeholder = 'email' name = 'email' onChange = {changeHandler} value = {chef.email} />
                </Form.Field>
                <Form.Field>
                    <label>Location:</label>
                    <input type = 'text' placeholder = 'location' name = 'location' onChange = {changeHandler} value = {chef.location} />
                </Form.Field>
                <Form.Field>
                    <label>Phone Number:</label>
                    <input type = 'text' placeholder = 'phone number' name = 'phone_number' onChange = {changeHandler} value = {chef.phone_number} />
                </Form.Field>
                <Form.Field>
                    <label>Username:</label>
                    <input type = 'text' placeholder = 'username' name = 'username' onChange = {changeHandler} value = {chef.username} />
                </Form.Field>
                {/* <Link to = {{
                    pathname: '/dashboard',
                    chef: {
                        username: `${chef.username}`,
                        location: `${chef.location}`,
                        email: `${chef.email}`,
                        phone: `${chef.phone_number}`
                    }
                }} ></Link> */}
                <Button type = 'submit'>Update</Button>
                <Button onClick = {cancelHandler}>Cancel</Button>
            </Form>
        </div>
    )

}

const mapStateToProps = state => {
    return {
        currentUser: state.currentUser,
        recipes: state.recipes, 
        error: state.error
    }
    
}

export default connect(mapStateToProps, {updateUser, getAllRecipes})(UpdateChef);