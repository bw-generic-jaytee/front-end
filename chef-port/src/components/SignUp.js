import React, {useState} from 'react';
import {Button, Form} from 'semantic-ui-react';
import {connect} from 'react-redux';

import {signup} from '../actions';

const initState = {
    email: '',
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
        console.log(values)
    }

    return(
        <div>
            <Form onSubmit = {submitHandler} >
                <Form.Field>
                    <label>Email:</label>
                    <input type = 'text' placeholder = 'email' name = 'email' onChange = {changeHandler} value = {values.email} />
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
            </Form>
        </div>
    )
}

export default connect(null, {signup})(SignUp);