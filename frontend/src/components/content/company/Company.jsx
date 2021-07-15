import React, { useState, useEffect } from 'react';
import MainCompany from '../main/MainCompany';
import FullHistory from './FullHistory';
import './Company.scss';
import requests from '../../../requests';
import axios from '../../../axios';
import Gallery from './Gallery';
const Company = () => {
    const [cert, setCert] = useState([]);
    const [ceo, setSEO] = useState([]);
    // const [list, setList] = useState([])
    // function splitData() {
    //     let s = "";
    //     console.log(ceo.данные_в_виде_списка)

    //     ceo.данные_в_виде_списка &&
    //         setList(ceo.данные_в_виде_списка.split(/\r?\n/)[0])

    //     // list.push(s)

    // }
    // splitData();
    // console.log(list.length)
    useEffect(() => {
        async function fetchdata() {
            const req = await axios.get(requests.getCertificate);
            setCert(req.data);
        };
        fetchdata();
    }, [])

    useEffect(() => {
        async function fetchdata() {
            const req = await axios.get(requests.getCEO);
            setSEO(req.data[0]);
        }
        fetchdata();
    }, [])


    return (
        <>
            <MainCompany />
            <FullHistory />
            <div className="ceo">
                <div className="ceo-inside">
                    <p>Руководство</p>
                </div>
                <div>
                    <div className="ceo-inside" id="qwerty">
                        <div className="ceo-left">
                            <p>{ceo.ФИО}</p>
                            <p>{ceo.позиция}</p>
                            <ul className="ceo-ul">

                                {
                                    ceo.данные_в_виде_списка &&

                                    ceo.данные_в_виде_списка.split(/\r?\n/).map((i) => {
                                        return (
                                            <li>{i}</li>
                                        );
                                    })
                                }
                            </ul>
                            <p>{ceo.данные}</p>
                        </div>
                        <div className="ceo-right">
                            <img src={requests.imageUrl + ceo.изображение} />
                        </div>
                    </div>
                </div>
            </div>
            <Gallery />
            <div className="certificate-wrapper">
                <div className="certificate-inside">
                    <p>Наши сертификаты</p>
                    <div>
                        {cert.map((item) => {
                            return (
                                <div >
                                    <div>
                                        <img src={requests.imageUrl + item.изображение} />
                                    </div>
                                    <p>{item.название}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Company;