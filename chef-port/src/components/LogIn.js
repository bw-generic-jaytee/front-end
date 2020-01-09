import React, {useState} from 'react';
import {Button, Form} from 'semantic-ui-react';
import {connect} from 'react-redux';

import {login} from '../actions';

import NavBar from './NavBar';

const initState = {
    username: '',
    password: ''
}

const LogIn = ({login, history}) => {
    const [user, setUser] = useState({...initState});

    const changeHandler = e => {
        e.preventDefault();
        let value = e.target.value
        setUser({...user, [e.target.name] : value })
    }

    const submitHandler = e => {
        e.preventDefault();
        login(user, history)
    }

    return(
        <div>
            <NavBar />
            <Form onSubmit = {submitHandler}>
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

const mapStateToProps = state => {
    return {
        error: state.error,
        currentUser: state.currentUser
    }
    
}

export default connect(mapStateToProps, {login})(LogIn);