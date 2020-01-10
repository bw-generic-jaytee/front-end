import React, {useState, useEffect} from 'react';
import {Button, Form} from 'semantic-ui-react';
import {connect} from 'react-redux';

import {signup} from '../actions';
import NavBar from './NavBar';

const initState = {
    email: '',
    location: '',
    phone_number: '',
    username: '',
    password: ''
}

const SignUp = ({signup, history, error}) => {
    const [values, setValues] = useState({...initState});
    const [errorMessage, setErrorMessage] = useState('')

    useEffect(() => {
        if(error !== null) {
            setErrorMessage(error)
        }
    }, [error])

    const changeHandler = e => {
        e.preventDefault();
        let value = e.target.value
        setValues({...values, [e.target.name] : value})
    }

    const submitHandler = e => {
        e.preventDefault();
        signup(values, history)
        // console.log(values)
    }

    

    const cancelHandler = e => {
        e.preventDefault();
        history.push('/dashboard')
    }

    return(
        <div>
            <NavBar />
            <p>{errorMessage}</p>
            <h4>Don't worry, ou can update your contact information (the optional fields) later!</h4>

            <Form onSubmit = {submitHandler} >
                
                <Form.Field>
                    <label>Email (optional):</label>
                    <label style = {optStyle}>Optional</label>
                    <input type = 'text' placeholder = 'email' name = 'email' onChange = {changeHandler} value = {values.email} />
                    <p>email: must be a valid email (ex. munch200@gmail.com)</p>
                </Form.Field>
                <Form.Field>
                    <label>Location (optional):</label>
                    <label style = {optStyle}>Optional</label>
                    <input type = 'text' placeholder = 'location' name = 'location' onChange = {changeHandler} value = {values.location} />
                    <p>City, State, Country, or Planet. You can be as specific as you'd like here</p>
                </Form.Field>
                <Form.Field>
                    <label>Phone Number (optional):</label>
                    <label style = {optStyle}>Optional</label>
                    <input type = 'text' placeholder = '(333) 333-3333' name = 'phone_number' onChange = {changeHandler} value = {values.phone_number} />
                    <p>phone number: must follow this format(ex. (559) 361-0031)</p>
                </Form.Field>
                <Form.Field>
                    <label>Username (required):</label>
                    <label style = {reqStyle}>Required</label>
                    <input type = 'text' placeholder = 'username' name = 'username' onChange = {changeHandler} value = {values.username} required />
                    <p>username: must be unique, have no spaces, and be a minimum of 2 characters</p>
                </Form.Field>
                <Form.Field>
                    <label>Password:</label>
                    <label style = {reqStyle}>Required</label>
                    <input type = 'text' placeholder = 'password' name = 'password' onChange = {changeHandler} value = {values.password} required />
                    <p>password: must me a minimum of 3 characters</p>
                </Form.Field>
                <Button type = 'submit'>Sign Up</Button>
                <Button onClick = {cancelHandler}>Cancel</Button>
            </Form>
        </div>
    )
}

const mapStateToProps = state => ({
    
        error: state.error
    
})

export default connect(mapStateToProps, {signup})(SignUp);

var reqStyle = {
    color: 'red'
}

var optStyle = {
    color: 'green'
}