import React from "react";
import { Container } from "react-bootstrap";
import NavigationBar from "./NavigationBar";
import { Routes, Route, Link } from "react-router-dom";

const Dashboard = () => {

    return(
        <>
            <NavigationBar />
            <Container fluid>
                <Routes>
                    <Route path="/" element={<p>Home</p>}/>
                    <Route path="/boards" element={<p>Boards</p>}/>
                    <Route path="/feeds" element={<p>Feeds</p>}/>
                    <Route path="/news" element={<p>News</p>}/>
                    <Route path="/profile" element={<p>Profile</p>}/>
                </Routes>
            </Container>
        </>
    )
}

export default Dashboard