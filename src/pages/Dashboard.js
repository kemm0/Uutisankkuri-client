import React from "react";
import { Container, CloseButton } from "react-bootstrap";
import NavigationBar from "../components/NavigationBar";
import { Routes, Route, Link } from "react-router-dom";
import HomeFeed from "./HomeFeed";
import FeedBoards from "./FeedBoards";

const Dashboard = () => {

    return(
        <>
            <NavigationBar />
            <Container fluid>
                <Routes>
                    <Route path="/" element={<HomeFeed/>}/>
                    <Route path="/boards" element={<FeedBoards/>}/>
                    <Route path="/feeds" element={<p>Feeds</p>}/>
                    <Route path="/news" element={<p>News</p>}/>
                    <Route path="/profile" element={<p>Profile</p>}/>
                </Routes>
            </Container>
        </>
    )
}

export default Dashboard