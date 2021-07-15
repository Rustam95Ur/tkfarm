import React, { useState, useEffect } from 'react';
import ReactDOM from 'react';
import './Gallery.scss';
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
                className="gal-carousel__arrow galcarousel__arrow--left"
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
                className="gal-carousel__arrow gal-carousel__arrow--right"
                onClick={this.props.onClick}
            >
                <div></div>
            </a>
        );
    }
}

class CarouselSlide extends Component {
    render() {
        return (
            <li
                className={
                    this.props.index == this.props.activeIndex
                        ? "gal-carousel__slide gal-carousel__slide--active"
                        : "gal-carousel__slide gal-hide-carousel"
                }
            >
                <div className="slide-block">
                    <img src={requests.imageUrl + this.props.slide.изображение} />
                </div>
            </li>
        );
    }
}

const Carousel = (props) => {
    return (
        <div className="gal-carousel">
            <ul className="gal-carousel__slides">
                {props.slides.map((slide, index) =>
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

const Gallery = () => {
    const [gal, setGal] = useState([]);
    const [cnt, setCnt] = useState(0);

    const [activeIndex, setActiveIndex] = useState(0);
    const delay = 5000;

    useEffect(() => {
        async function fetchdata() {
            const req = await axios.get(requests.getGallery);

            setGal(req.data);
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
                    prevIndex === gal.length - 1 ? 0 : prevIndex + 1
                ),
            delay
        );

        return () => {
            resetTimeout();
        };
    }, [activeIndex]);

    function goToPrevSlide(e) {
        e.preventDefault();

        let index = activeIndex;
        let slidesLength = gal.length;
        if (index < 1) {
            index = slidesLength;
        }

        --index;
        setActiveIndex(index);
    }
    function goToNextSlide(e) {
        e.preventDefault();

        let index = activeIndex;
        let slidesLength = gal.length - 1;

        if (index === slidesLength) {
            index = -1;
        }

        ++index;

        setActiveIndex(index);
    }

    return (
        <div className="gallery-wrapper">
            <div className="gallery-inside">
                <p>Галерея</p>
                <div className="gallery-banner-btns">
                    <CarouselLeftArrow onClick={e => { goToPrevSlide(e) }} activeIndex={activeIndex} />
                    <CarouselRightArrow onClick={e => goToNextSlide(e)} activeIndex={activeIndex} />
                </div>

                <Carousel slides={gal} activeIndex={activeIndex} />
            </div>
        </div >
    );
}

export default Gallery;