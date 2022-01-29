import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react/cjs/react.development"
import newsArticleService from "../services/newsArticleService";
import NewsArticle from "../components/NewsArticle";
import { ListGroup, Button } from "react-bootstrap";

const HomeFeed = () => {

    const [news, setNews] = useState([]);
    const [newsIndex, setNewsIndex] = useState(0);

    const token = useSelector(state => state.token);

    useEffect(() => {
        if(token === undefined){
            console.log(":(");
            return;
        }
        const fetchNews = async () => {
            const response = await newsArticleService.get(token);
            const news = response.data;
            console.log(news);
            setNews([...news]);
        }
        fetchNews();
    },[token])
    return(
        <>
            <ListGroup as="ul">
                {
                    news.map(article => <NewsArticle key={article.link} headline={article.headline} link={article.link}/>)
                }
            </ListGroup>
            <Button variant="primary">Load more</Button>
        </>
    )
}

export default HomeFeed;