import React, {useState} from 'react';
import {Button, Form} from 'semantic-ui-react';
//utils
import {axiosWithAuth} from '../utils/axiosWithAuth';

const initState = {
    username: '',
    password: ''
}

const LogIn = () => {
    const [user, setUser] = useState(initState);

    const changeHandler = e => {
        e.preventDefault();
        let value = e.target.value
        setUser({
            ...user,
            [e.target.name]: value
        })
    }

    const submit = e => {
        e.preventDefault();
        axiosWithAuth()
            .post('/user/login', user)
            .then(res => {
                console.log('from login submit', res)
            })
            .catch(err => {
                console.log('something wrong in submit')
            })
    }

    return(
        <div>
            <Form onSubmit = {submit}>
                <Form.Field>
                    <label>Username</label>
                    <input type = 'text' placeholder = 'Username' onChange = {changeHandler} name = 'username' />
                </Form.Field>
                <Form.Field>
                    <label>Password</label>
                    <input type = 'text' placeholder = 'Password' onChange = {changeHandler} name = 'password' />
                </Form.Field>
                <Button type = 'submit'>Log In</Button>
            </Form>
        </div>
    )
}

export default LogIn;