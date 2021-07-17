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
    const [comp, setComp] = useState([]);

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
    useEffect(() => {
        async function fetchdata() {
            const req = await axios.get(requests.getMainCompanyBlock);
            setComp(req.data);
        }
        fetchdata();
    })

    let r = "";
    r += comp.название;
    let a = "";
    a += comp.выделенный_текст;

    return (
        <>
            <div className="company-wrapper ">
                <div className="company-inside">
                    <p className="wow animate__fadeIn" data-wow-iteration="1" data-wow-offset="10">О компании</p>
                </div>
                <div className="main-company-block">
                    <div className="main-company-inside" id="content">
                        {comp && comp.map((item) => {
                            r = item.название;
                            a = item.выделенный_текст;
                            const [before, after] = r.split(a);
                            if (comp.indexOf(item) % 2 === 0) {
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