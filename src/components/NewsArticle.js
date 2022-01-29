import { ListGroup } from "react-bootstrap";

const NewsArticle = ({ headline, link }) => {

    const articleStyle = {
        color: "black"
    }
    return (
        <ListGroup.Item as="li" className="d-flex justify-content-between align-items-start">
            <div className="ms-2 me-auto">
                <div ><a href={link} style={articleStyle} target="_blank" rel="noreferrer">{headline}</a></div>
            </div>
        </ListGroup.Item>
    );
}

export default NewsArticle;