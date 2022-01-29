import { useState } from "react";
import React from "react";
import { Card, Button, Modal, Form, Alert, Row, Col, Container, Accordion } from "react-bootstrap";
import feedBoardService from "../services/feedBoardService";

const FeedBoard = (
    {
        isPublic,
        creator,
        name,
        description,
        languages,
        searchKeyWords,
        subscribers,
        newsfeeds
    }) => {
    const [showEdit, setShowEdit] = useState(false);
    const [newKeyWord, setNewKeyWord] = useState('');
    const [newNewsFeed, setNewNewsFeed] = useState('');
    const [boardInfo, setBoardInfo] = useState({
        isPublic: isPublic,
        name: name,
        description: description,
        searchKeyWords: searchKeyWords,
        creator: creator,
        newsfeeds: newsfeeds
    });

    const handleShow = () => {
        setShowEdit(true);
        console.log(searchKeyWords);
    }
    const handleClose = () => {
        setShowEdit(false);
    }

    return (
        <>
            <Card>
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>{description}</Card.Text>
                    <Card.Text>Creator: {creator.username} </Card.Text>
                    <Button variant="primary">Open</Button>
                    <Button variant="secondary" onClick={handleShow}>Edit</Button>
                </Card.Body>
            </Card>

            <Modal show={showEdit} onHide={handleClose}>
                <Modal.Header>
                    <Modal.Title>Edit board "{boardInfo.name}"</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {boardInfo.description}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}> Close</Button>
                    <Button variant="primary" onClick={handleClose}>Confirm changes</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
};

export default FeedBoard;