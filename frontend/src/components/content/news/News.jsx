import React, { useState, useEffect } from 'react';
import './News.scss';
import axios from '../../../axios';
import requests from '../../../requests';
import { Link } from 'react-router-dom';


const News = (props) => {
    const [news, setNews] = useState([]);
    const [counter, setCounter] = useState(1);
    const [amount, setAmount] = useState(0);
    const [showmore, setShowmore] = useState(false);

    useEffect(() => {
        async function fetchdata() {
            const req = await axios.get(requests.getNewsBlock);
            setNews(req.data);
            setAmount(req.data.length);
        }
        fetchdata();
    }, []);
    let count = 0;
    news.map((i) => {
        count += 1;
    })
    let word = "";
    if (count === 1) word = "новость"
    else if (count === 2 || count === 3) word = "новости"
    else word = "новостей"


    const handleShowMore = (e) => {
        e.preventDefault();
        setShowmore(true);
        setCounter(counter + 2);
    }
    console.log(amount)
    const numOfItems = showmore ? news.length : 3;

    return (
        <div className="news-wrapper">
            <div className="news-inside">
                <div className="news-top">
                    <p>Новости</p>
                    <span>{count + " " + word}</span>
                </div>
                {news.slice(0, numOfItems).map((item) => {


                    return (
                        <div className="news-block">
                            <img src={requests.imageUrl + item.изображение} />
                            <div>
                                <span>{item.date}</span>
                                <p>{item.название}</p>
                                <p>{item.контент}</p>
                                <a style={{ textDecoration: 'none' }} href={`news/${item.id}`}>
                                    <span id="readmore">Читать статью <div></div></span>
                                </a>
                            </div>
                        </div>
                    );
                })}
                {counter < amount ? (
                    <div className="show-more-wrapper" onClick={handleShowMore}>Показать больше</div>
                ) : (
                    ""
                )}
            </div>
        </div>
    );
}

export default News;