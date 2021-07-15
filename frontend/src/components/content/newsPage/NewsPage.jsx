import { useState, useEffect } from 'react';
import './NewsPage.scss';
import axios from '../../../axios';
import requests from '../../../requests';
import News from '../news/News';
import { useParams, Link } from "react-router-dom";

const NewsPage = () => {
    const { id } = useParams();
    const [dt, setData] = useState([]);
    useEffect(() => {
        async function fetchdata() {
            const req = await axios.get(requests.getNewsBlock + id);

            // const req = await axios.get(requests.getNew);
            setData(req.data);
        }
        fetchdata();
    }, []);

    const [news, setNews] = useState([]);
    useEffect(() => {
        async function fetchdata() {
            const req = await axios.get(requests.getNewsBlock);
            setNews(req.data)
        }
        fetchdata();
    }, []);
    let cnt = 0;
    return (
        <div className="newspage-wrapper">
            <div className="newspage-inside">
                <p>Новости</p>
                <div className="newspage-left">
                    <span>Поделиться</span>
                    <div className="line"></div>
                    <div className="icons" id="twit"></div>
                    <div className="icons" id="vk"></div>
                    <div className="icons" id="tg"></div>
                    <div className="icons" id="fb"></div>
                </div>
                <div className="newspage-right">
                    <img src={requests.imageUrl + dt.изображение} />
                    <div className="newspage-content">
                        <p>{dt.date}</p>
                        <p>{dt.название}</p>
                        <p>{dt.контент}</p>
                        <p>{dt.выделяющийся_текст}</p>
                    </div>
                </div>
                <div>
                    <p>Читайте также</p>
                    {news.map((item) => {
                        if (item.id != id && cnt < 3) {
                            ++cnt;
                            return (
                                <div className="news-block" id="str">
                                    <img src={requests.imageUrl + item.изображение} />
                                    <div>
                                        <span>{item.date}</span>
                                        <p>{item.название}</p>
                                        {/* <Link to={`/news/${item.id}`} style={{ textDecoration: 'none' }}> */}
                                        <a href={`/news/${item.id}`}> <span id="readmore">Читать статью <div></div></span></a>
                                        {/* </Link> */}
                                    </div>
                                </div>
                            );
                        } else return;
                    })}
                </div>
            </div>
        </div >
    );
}

export default NewsPage;