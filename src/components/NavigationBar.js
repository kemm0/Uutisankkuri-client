import React from "react";
import { Nav, Navbar, Form, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link as RouterLink } from "react-router-dom";
import { setToken } from "../reducers/user";

const NavigationBar = () => {
    const dispatch = useDispatch()
    const logOut = () => {
        window.localStorage.removeItem('loggedUser');
        dispatch(setToken(null));
    };

    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link as={RouterLink} to="/">Home</Nav.Link>
                    <Nav.Link as={RouterLink} to="/boards">Boards</Nav.Link>
                    <Nav.Link as={RouterLink} to="/feeds">Feeds</Nav.Link>
                    <Nav.Link as={RouterLink} to="/news">News</Nav.Link>
                    <Form className="d-flex">
                        <Form.Control type="search" />
                        <Button variant="outline-success" type="submit">Search</Button>
                    </Form>
                </Nav>
            </Navbar.Collapse>
            <Navbar.Collapse className="justify-content-end" id="asd">
                <Nav className="me-auto">
                    <Nav.Link as={RouterLink} to="/profile">Profile</Nav.Link>
                    <Button onClick={logOut}>Log out</Button>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavigationBar