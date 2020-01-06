import React, {useState} from 'react';
import {Button, Form} from 'semantic-ui-react';

//utils 
import {axiosWithAuth} from '../utils/axiosWithAuth';

const initState = {
    email: '', 
    username: '', 
    password: ''
}

const SignUp = () => {

    return(
        <div>
            <Form>
                <Form.Field>
                    <label>Email:</label>
                    <input type = 'text' placeholder = 'email' name = 'email' />
                </Form.Field>
                <Form.Field>
                    <label>Username:</label>
                    <input type = 'text' placeholder = 'username' name = 'username' />
                </Form.Field>
                <Form.Field>
                    <label>Password:</label>
                    <input type = 'text' placeholder = 'password' name = 'password' />
                </Form.Field>
                <Button type = 'submit'>Sign Up</Button>
            </Form>
        </div>
    )
}

export default SignUp;