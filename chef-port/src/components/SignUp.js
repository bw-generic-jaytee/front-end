import React, {useState} from 'react';
import {Button, Form} from 'semantic-ui-react';
import {connect} from 'react-redux';

import {signup} from '../actions';

const initState = {
    email: '',
    location: '',
    phone: '',
    username: '',
    password: ''
}

const SignUp = ({signup, history}) => {
    const [values, setValues] = useState({...initState});

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
            <Form onSubmit = {submitHandler} >
                <Form.Field>
                    <label>Email:</label>
                    <input type = 'text' placeholder = 'email' name = 'email' onChange = {changeHandler} value = {values.email} />
                </Form.Field>
                <Form.Field>
                    <label>Location:</label>
                    <input type = 'text' placeholder = 'location' name = 'location' onChange = {changeHandler} value = {values.location} />
                </Form.Field>
                <Form.Field>
                    <label>Phone Number:</label>
                    <input type = 'text' placeholder = 'phone number' name = 'phone' onChange = {changeHandler} value = {values.phone} />
                </Form.Field>
                <Form.Field>
                    <label>Username:</label>
                    <input type = 'text' placeholder = 'username' name = 'username' onChange = {changeHandler} value = {values.username} />
                </Form.Field>
                <Form.Field>
                    <label>Password:</label>
                    <input type = 'text' placeholder = 'password' name = 'password' onChange = {changeHandler} value = {values.password} />
                </Form.Field>
                <Button type = 'submit'>Sign Up</Button>
                <Button onClick = {cancelHandler}>Cancel</Button>
            </Form>
        </div>
    )
}

export default connect(null, {signup})(SignUp);