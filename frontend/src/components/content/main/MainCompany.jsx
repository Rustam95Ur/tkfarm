import React, { useEffect, useState, useRef } from 'react';
import axios from '../../../axios';
import requests from '../../../requests';
import './Main.scss';
import WOW from 'wowjs';
const MainCompany = () => {
    const [mcState, setMcState] = useState([]);
    useEffect(() => {
        async function fetchdata() {
            const req = await axios.get(requests.getMainCompanyBlock);
            setMcState(req.data);
        }
        fetchdata();
    }, []);

    useEffect(() => {
        new WOW.WOW().init();
    })

    let r = "";
    let a = "";


    return (
        <div className="main-company-wrapper ">
            <div className="main-company-inside">
                <p className="wow animate__fadeIn" data-wow-iteration="1" data-wow-offset="10">О компании</p>
            </div>
            <div className="main-company-block">
                <div className="main-company-inside" id="content">
                    {mcState && mcState.map((item) => {
                        r = item.название;
                        a = item.выделенный_текст;
                        const [before, after] = r.split(a);
                        if (mcState.indexOf(item) % 2 === 0) {
                            return (
                                <div>
                                    <div className="wow animate__fadeInLeft" data-wow-iteration="1" data-wow-offset="100" >
                                        <p>
                                            {before}
                                            {a && <span style={{ color: "#21C69E;" }}>{a}</span>}
                                            {after}
                                        </p>
                                        <p>{item.описание}</p>
                                    </div>
                                    <img className="wow animate__fadeInRight"
                                        data-wow-iteration="1" data-wow-offset="100"
                                        src={requests.imageUrl + item.изображение}></img>
                                </div>
                            );
                        } else {
                            return (
                                <div>
                                    <img className="wow animate__fadeInLeft"
                                        data-wow-iteration="1" data-wow-offset="50"
                                        src={requests.imageUrl + item.изображение}></img>
                                    <div className="wow animate__fadeInRight"
                                        data-wow-iteration="1" data-wow-offset="50">
                                        <p>
                                            {before}
                                            {a && <span style={{ color: "#21C69E" }}>{a}</span>}
                                            {after}
                                        </p>
                                        <p>{item.описание}</p>
                                    </div>
                                </div>
                            );
                        }
                    })}
                </div>
            </div>
        </div>
    );
}
export default MainCompany;