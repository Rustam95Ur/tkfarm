import React, { useState, useEffect } from 'react';
import axios from '../../../axios';
import requests from '../../../requests';
import MainCompany from './MainCompany';
import './Main.scss';
import Path from './History';
import NewsMain from './Carousel';
import Clue from './Clue';

// const NewsMain = () => {
//     const arr = [];
//     const [news, setNews] = useState([]);
//     const [cnt, setCnt] = useState(0);
//     useEffect(() => {
//         async function fetchdata() {
//             const req = await axios.get(requests.getNewsBlock);
//             req.data.map((i) => {
//                 if (i.добавить_на_главную_страницу) {
//                     arr.push(i);

//                 }
//             })
//             setCnt(arr.length);
//             setNews(req.data);
//             console.log(news)
//         }
//         fetchdata();
//     }, []);
//     // console.log(arr)
//     var current = 1;
//     let c = 0;
//     return (
//         <div className="news-main-wrapper">
//             <div className="news-main-inside">
//                 <p>Новости </p>
//                 <div>
//                     <div><div></div></div>
//                     <span>{current}/{cnt}</span>
//                     <div><div></div></div>
//                 </div>
//             </div>
//             {
//                 news.map((item) => {
//                     c++;
//                     if (c == 1) {
//                         return (
//                             <div className="news-main-content"
//                             // style="display: grid"
//                             >
//                                 <div>
//                                     <img src={requests.imageUrl + item.изображение}></img>
//                                     <div>
//                                         <p><span></span> {item.название}</p>
//                                         <p>{item.контент}</p>
//                                     </div>
//                                 </div>

//                             </div>
//                         )

//                     }
//                 })}

//             <div className="small-button">
//                 <div><div></div></div>
//                 <span>{current}/{cnt}</span>
//                 <div><div></div></div>
//             </div>
//         </div >
//     );
// }

const Main = () => {
    const [mainState, setMainState] = useState([]);
    useEffect(() => {
        async function fetchdata() {
            const req = await axios.get(requests.getMain);
            setMainState(req.data[0]);

        }
        fetchdata();
    }, []);

    let r = "";
    r += mainState.название;
    let a = mainState.выделенный_текст
    const [before, after] = r.split(a);

    return (
        <>
            <div className="main-wrapper">
                <div className="main-inside">
                    <div className="main-left wow animate__fadeInLeft">
                        <p>
                            {before}
                            {a &&
                                <span style={{ color: "#21C69E" }}>{a}</span>}
                            {after}
                        </p>
                        <p>{mainState.описание}</p>
                        <div>
                            <div className="left-first">
                                <p>{mainState.текст1}</p>
                                <span>{mainState.подтекст1}</span>
                            </div>
                            <div className="left-second">
                                <p>{mainState.текст2}</p>
                                <span>{mainState.подтекст2}</span>
                            </div>
                        </div>
                    </div>
                    <div className="main-right wow animate__fadeInRight">
                        <img src={requests.imageUrl + mainState.изображение}></img>
                    </div>
                </div>
            </div>
            <MainCompany />
            <Path />
            <Clue />
            <NewsMain />
        </>
    );
}

export default Main;