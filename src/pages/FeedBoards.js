import { useState } from "react";
import { useSelector } from "react-redux";
import { Container, Row, Col} from "react-bootstrap";
import { useEffect } from "react/cjs/react.development";
import feedBoardService from "../services/feedBoardService"
import FeedBoard from "../components/FeedBoard";

const FeedBoards = () => {
    const [boards, setBoards] = useState([]);

    const token = useSelector(state => state.token);
    const user = useSelector(state => state.user);

    useEffect(() => {
        if(token === undefined || user === undefined){
            console.log(":(");
            return;
        }
        console.log(user);
        const fetchBoards = async () => {
            const response = await feedBoardService.get(token);
            const boards = response.data;
            console.log(boards);
            setBoards([...boards]);
        }
        fetchBoards();

    },[token,user]);

    return(
        <Container>
            <Row lg={3}>
                {
                    boards.map(board => 
                        <Col key={board.id}>
                            <FeedBoard 
                            name={board.name} 
                            description={board.description} 
                            isPublic={board.public} 
                            searchKeyWords={board.searchKeyWords} 
                            creator={user} 
                            newsfeeds={board.newsfeeds}/>
                        </Col>
                    )
                }
            </Row>
        </Container>
    )
};

export default FeedBoards;