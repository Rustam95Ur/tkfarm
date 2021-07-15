import React, { useState, useEffect, useRef } from 'react';
import axios from '../../../axios';
import requests from '../../../requests';
import './Main.scss';
const Clue = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        async function fetchdata() {
            const req = await axios.get(requests.getClue);
            setData(req.data);
        }
        fetchdata();
    }, []);
    let back = "green";

    return (
        <div className="clue-wrapper wow animate__fadeIn" data-wow-iteration="1" data-wow-duration="1s" data-wow-delay="0.1s">
            <div className="clue-inside">
                <p>Вы можете приобрести товар у нас</p>
            </div>
            <div>
                {data.map((item) => {
                    if (data.indexOf(item) % 2 === 0) back = "blue";
                    else back = "green";
                    return (
                        <div className={`${back}`}>
                            <div>
                                <div>
                                    <p>{item.домен}</p>
                                    <span>{item.текст}</span>
                                </div>
                                <div><div></div></div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default Clue;