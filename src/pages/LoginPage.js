import React from "react";
import LoginForm from "../components/LoginForm";
import SignUpForm from "../components/SignUpForm";
import authRequests from "../utils/authRequests";
import userService from "../services/userService";
import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

const LoginPage = () => {

    return (
        <Container>
            <Row>
                <Col>
                    <LoginForm/>
                </Col>
                <Col>
                    <SignUpForm />
                </Col>
            </Row>
        </Container>
    );
};

export default LoginPage