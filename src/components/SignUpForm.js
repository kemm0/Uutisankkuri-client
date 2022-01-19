import React from 'react'
import PropTypes from 'prop-types'
import { useState } from 'react/cjs/react.development'
import { Form, Button, FormGroup, Alert } from 'react-bootstrap'
import userService from '../services/userService'

const SignUpForm = () => {

    const [userData, setUserData] = useState({
        email: '',
        firstname: '',
        lastname: '',
        username: '',
        password: ''
    });
    const [status, setStatus] = useState({
        text: '',
        variant: ''
    });

    const handleChange = (event) => {
        const value = event.target.value;
        const name = event.target.name;
        setUserData({
            ...userData,
            [name]: value
        });
    }

    const submit = async (event) => {
        event.preventDefault();
        const response = null;
        try{
            response = await userService.post(userData);
        }
        catch(error){
            console.log(error.message)
            setStatus({
                text: error.message,
                variant: 'danger'
            });
            return;
        }
        if(response.data.username !== undefined){
            setStatus({
                text: 'User created',
                variant: 'success'
            });
        }
        else{
            setStatus({
                text: 'Could not create user',
                variant: 'danger'
            });
        }
    }

    return(
        <div>
            <h2>Sign up</h2>
            <Form onSubmit={submit}>
                <Form.Group>
                    <Form.Label>email:</Form.Label>
                    <Form.Control name="email" value={userData.email} onChange={(event) => handleChange(event)}/>
                    <Form.Label>First name:</Form.Label>
                    <Form.Control name="firstname" value={userData.firstname} onChange={(event) => handleChange(event)}/>
                    <Form.Label>Last name:</Form.Label>
                    <Form.Control name="lastname" value={userData.lastname} onChange={(event) => handleChange(event)}/>
                    <Form.Label>Username:</Form.Label>
                    <Form.Control name="username" value={userData.username} onChange={(event) => handleChange(event)}/>
                    <Form.Label>Password::</Form.Label>
                    <Form.Control name="password" value={userData.password} type="password" onChange={(event) => handleChange(event)}/>
                </Form.Group>
                <Button variant="primary" id="signup-button" type="submit">Sign up</Button>
            </Form>
            <Alert variant={status.variant}>{status.text}</Alert>
        </div>
    )
};

export default SignUpForm;