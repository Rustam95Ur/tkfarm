import React, { useState, useEffect } from 'react';
import ReactDOM from 'react';
import './Carousel.scss';
import requests from '../../../requests';
import axios from '../../../axios';

const { Component } = React;
const { render } = ReactDOM;

const carouselContainer = document.querySelector(".carousel-container");

class CarouselLeftArrow extends Component {
    render() {
        return (
            <a
                href="#"
                id="leftarrow"
                className="carousel__arrow carousel__arrow--left"
                onClick={this.props.onClick}
            >
                <div></div>
            </a>
        );
    }
}

class CarouselRightArrow extends Component {
    render() {
        return (
            <a
                href="#"
                id="rightarrow"
                className="carousel__arrow carousel__arrow--right"
                onClick={this.props.onClick}
            >
                <div></div>
            </a>
        );
    }
}

const CarouselSlide = (props) => {
    let r = "";
    let a = "";
    r += props.slide.название;
    a += props.slide.выделенный_текст_на_главной_странице;
    const [before, after] = r.split(a);
    return (
        <li
            className={
                props.index == props.activeIndex
                    ? "carousel__slide carousel__slide--active"
                    : "carousel__slide"
            }
        >
            <div className="news-main-content">
                <a href={`/news/${props.slide.id}`} >
                    <div>
                        <img src={"http://35.193.52.116:8000" + props.slide.изображение}></img>
                        <div>
                            <p>
                                {before}
                                {a && <span style={{ color: "#21c69e" }}>{a}</span>}
                                {after}
                            </p>
                            <p>{props.slide.контент}</p>
                        </div>
                    </div>
                </a>
            </div>
        </li>
    );

}

const Carousel = (props) => {
    return (
        <div className="carousel">


            <ul className="carousel__slides">
                {props.slides && props.slides.map((slide, index) =>
                    <CarouselSlide
                        key={index}
                        index={index}
                        activeIndex={props.activeIndex}
                        slide={slide}
                    />
                )}
            </ul>
        </div>
    );
}

const NewsMain = () => {
    // const arr = [];
    const [arr, setarr] = useState([]);
    const [news, setNews] = useState([]);
    const [cnt, setCnt] = useState(0);

    const [activeIndex, setActiveIndex] = useState(0);
    const delay = 5000;
    useEffect(() => {
        async function fetchdata() {
            const req = await axios.get(requests.getNewsBlock);
            req.data.map((i) => {
                if (i.добавить_на_главную_страницу) {
                    console.log(i)
                    arr.push(i)
                    setarr(arr)
                }

            })
            setCnt(arr.length);
            setNews(req.data);
        }
        fetchdata();
    }, []);

    const timeoutRef = React.useRef(null);

    function resetTimeout() {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
    }

    React.useEffect(() => {
        resetTimeout();
        timeoutRef.current = setTimeout(
            () =>
                setActiveIndex((prevIndex) =>
                    prevIndex === arr.length - 1 ? 0 : prevIndex + 1
                ),
            delay
        );

        return () => {
            resetTimeout();
        };
    }, [activeIndex]);

    var current = 1;
    let c = 0;
    function goToPrevSlide(e) {
        e.preventDefault();

        let index = activeIndex;
        let slidesLength = arr.length;
        if (index < 1) {
            index = slidesLength;
        }

        --index;
        setActiveIndex(index);
    }
    function goToNextSlide(e) {
        e.preventDefault();

        let index = activeIndex;
        let slidesLength = arr.length - 1;

        if (index === slidesLength) {
            index = -1;
        }

        ++index;

        setActiveIndex(index);
    }

    return (
        <div className="news-main-wrapper wow animate__fadeIn" data-wow-iteration="1" data-wow-duration="1s" data-wow-delay=".01s">
            <div className="news-main-inside">
                <p>Новости </p>
                <div className="news-banner-btns">
                    <CarouselLeftArrow onClick={e => { goToPrevSlide(e) }} activeIndex={activeIndex} />
                    <span>{activeIndex + 1}/{cnt}</span>
                    <CarouselRightArrow onClick={e => goToNextSlide(e)} activeIndex={activeIndex} />
                </div>
            </div>
            <Carousel slides={arr} activeIndex={activeIndex} />

            <div className="small-button">
                <div><div></div></div>
                <span>{current}/{cnt}</span>
                <div><div></div></div>
            </div>
        </div >
    );
}

export default NewsMain;