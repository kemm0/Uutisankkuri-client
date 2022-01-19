import { Card, Button } from "react-bootstrap";

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
        return(
            <Card>
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>{description}</Card.Text>
                    <Button variant="primary">Edit</Button>
                </Card.Body>
            </Card>
        )
};

export default {
    FeedBoard
};