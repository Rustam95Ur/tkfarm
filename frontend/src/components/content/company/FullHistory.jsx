import React, { useState, useEffect, useRef } from "react";
import requests from "../../../requests";
import axios from '../../../axios';


const FullHistory = () => {
    const [info, setInfo] = useState([]);

    useEffect(() => {
        async function fetchdata() {
            const req = await axios.get(requests.getHistory);
            // req.data.map((i) => {
            //     if (i.добавить_на_главную_страницу) {
            //         console.log(i)
            //         info.push(i)
            //         setInfo(info)
            //     }
            // })
            setInfo(req.data)
        };
        fetchdata();
    }, []);
    let cnt = 0;
    let i = 300;

    let r = "";
    let a = "";
    return (
        <div className="main-history-wrapper">
            <div className="main-history-inside">
                <p>История компании</p>
                <div>
                    {info && info.map((item) => {
                        ++cnt;
                        r = item.название;
                        a = item.выделенный_текст;
                        const [before, after] = r.split(a);
                        if (item.название.length > 100) {
                            i = 400;
                        }
                        if (info.indexOf(item) % 2 === 0) {
                            return (
                                <div className="main-history-content">
                                    <div className="wow animate__fadeInLeft main-history-text" data-wow-iteration="1" data-wow-offset="100">
                                        <p>{item.год}</p>
                                        <p>
                                            {before}
                                            {a && <span style={{ color: "#21c69e" }}>{a}</span>}
                                            {after}
                                        </p>
                                        <p>{item.описание}</p>
                                    </div>

                                    <div>
                                        <div
                                            // ref={ref} 
                                            className="history-line wow fade-in-tree-history appear" data-wow-iteration="1" style={{ maxHeight: i, strokeDashArray: i, strokeDashoffset: i }}>
                                            <svg
                                                id="header"
                                                class="path"
                                                width="2"
                                                height={i}
                                                viewBox={`0 0 2 ${i}`}
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path d={`M1 0L1.00001 ${i}`} />
                                            </svg>
                                        </div>
                                        <div
                                            // ref={ref} 
                                            className="history-circle wow fade-in-circle-history appear">
                                            <svg
                                                class="path-circle"
                                                width="100"
                                                height="100"
                                                viewBox="0 0 100 100"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="50" cy="50" r="49.5" />
                                            </svg>
                                            <div className="history-circle-num wow animate__fadeIn"><span>{cnt}</span></div>
                                        </div>
                                    </div>
                                    <div className="main-history-text"></div>
                                </div>
                            );
                        } else {
                            return (
                                <div className="main-history-content">
                                    <div className="main-history-text" ></div>
                                    <div>
                                        <div
                                            className="history-line wow fade-in-tree-history appear" style={{ maxHeight: i, strokeDashArray: i, strokeDashoffset: i }}>
                                            <svg
                                                id="header"
                                                // ref="asd"
                                                class="path"
                                                width="2"
                                                height={i}
                                                viewBox={`0 0 2 ${i}`}
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path d={`M1 0L1.00001 ${i}`} />
                                            </svg>
                                        </div>
                                        <div
                                            className="history-circle wow fade-in-circle-history appear">
                                            <svg
                                                class="path-circle"
                                                width="100"
                                                height="100"
                                                viewBox="0 0 100 100"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="50" cy="50" r="49.5" />
                                            </svg>
                                            <div className="history-circle-num"><span>{cnt}</span></div>
                                        </div>
                                    </div>
                                    <div
                                        className="main-history-text wow animate__fadeInRight" id="right" data-wow-iteration="1">
                                        <p>{item.год}</p>
                                        <p>
                                            {before}
                                            {a && <span style={{ color: "#21c69e" }}>{a}</span>}
                                            {after}
                                        </p>
                                        <p>{item.описание}</p>
                                    </div>
                                </div>
                            );
                        }
                    })}
                    <div
                        className="history-line wow fade-in-tree-bottom-history appear" id="line-bottom">
                        <svg
                            id="header"
                            class="path"
                            width="2"
                            height="150"
                            viewBox="0 0 2 150"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M1 0L1.00001 150" />
                        </svg>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default FullHistory;