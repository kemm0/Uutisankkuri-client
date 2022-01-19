import React from 'react'
import { useState } from 'react/cjs/react.development'
import { Form, Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { setToken } from '../reducers/user'
import userService from '../services/userService'

const LoginForm = ({ handleSubmit }) => {
    const [username, setUsername] = useState('');
    const [password, setPassWord] = useState('');

    const dispatch = useDispatch();

    const handlePasswordChange = (value) => {
        setPassWord(value);
    };

    const handleUsernameChange = (value) => {
        setUsername(value);
    }

    const handleLogin = async () => {
        const response = await userService.login({ username: username, password: password });
        const user = response.data;
        if(user.userToken === undefined){
            return;
        }
        dispatch(setToken(user.userToken));
        window.localStorage.setItem('loggedUser', JSON.stringify(user))
        console.log(response.data);
    }

    return (
        <div>
            <h2>Login</h2>
            <Form onSubmit={(event) => {
                event.preventDefault();
                handleLogin(username, password);
            }}>
                <Form.Group>
                    <Form.Label>username</Form.Label>
                    <Form.Control
                        id="username"
                        type="text"
                        value={username}
                        name="Username"
                        onChange={({ target }) => handleUsernameChange(target.value)}
                    />
                    <Form.Label>password</Form.Label>
                    <Form.Control
                        id="password"
                        type="password"
                        value={password}
                        name="Password"
                        onChange={({ target }) => handlePasswordChange(target.value)}
                    />
                    <Button variant="primary" id="login-button" type="submit">login</Button>
                </Form.Group>
            </Form>
        </div>
    )
}

export default LoginForm