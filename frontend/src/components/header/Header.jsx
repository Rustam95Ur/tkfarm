import React, { useState, useEffect } from 'react';
import './Header.scss';
import axios from '../../axios';
import requests from '../../requests';
import Language from './Language';
import Menu from './Menu';
import { Link } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
// const [logoactive, setLogo] = useState(false);

const logo = (image) => {
    return (
        <div className="header-logo-block">
            <Link to="/">
                <img src={"http://35.193.52.116:8000" + image} className="header-logo" />
            </Link>
        </div>
    );
}

const info = (address, phone) => {
    return (
        <div className="header-info">
            <div>
                <p>Адрес</p>
                <span>{address}</span>
            </div>
            <div>
                <p>Телефон</p>
                <span>{phone}</span>
            </div>
        </div>
    );
}


const Header = () => {
    const [headerState, setHeaderState] = useState([]);
    const [activeMenuOption, setActiveMenuOption] = useState("Главная");
    const [activeLangOption, setActiveLangOption] = useState("Ру");

    useEffect(() => {
        async function fetchdata() {
            const req = await axios.get(requests.getHeader);
            setHeaderState(req.data[0]);
        }
        fetchdata();
    }, []);

    const nav = React.createRef();
    const ref = React.createRef();

    const handleNavOptionClick = e => {
        const optionName = e.target.getAttribute("data");
        setActiveMenuOption(optionName);
    }

    const handleLangOptionClick = e => {
        const option = e.target.getAttribute("data");
        setActiveLangOption(option);
    }

    const [isOpen, setOpen] = useState(false);
    const [isNavVisible, setNavVisibility] = useState(false);
    const [isSmallScreen, setIsSmallScreen] = useState(false);
    useEffect(() => {
        const mediaQuery = window.matchMedia("(max-width: 1400px)");
        mediaQuery.addListener(handleMediaQueryChange);
        handleMediaQueryChange(mediaQuery);

        return () => {
            mediaQuery.removeListener(handleMediaQueryChange);
        };
    }, []);

    const handleMediaQueryChange = mediaQuery => {
        if (mediaQuery.matches) {
            setIsSmallScreen(true);
        } else {
            setIsSmallScreen(false);
        }
    };

    const toggleNav = () => {
        setNavVisibility(!isNavVisible);
    };

    return (
        <div className="header-wrapper">
            <div className="header-inside">
                {logo(headerState.лого)}
                {info(headerState.адрес, headerState.номер_телефона)}
                <CSSTransition
                    in={!isSmallScreen || isNavVisible}
                    timeout={400}
                    unmountOnExit
                    className="hidden_nav"
                >
                    <div className="menu-lang">
                        <p className="hidden-menu">Меню</p>
                        <Menu ref={nav} current={activeMenuOption} handleNavOptionClick={handleNavOptionClick} />
                        <Language ref={ref} current={activeLangOption} handleLangOptionClick={handleLangOptionClick} />
                    </div>
                </CSSTransition>
                <div className={`burger_btn ${isOpen ? "open" : ""}`} onClick={() => { setOpen(!isOpen); toggleNav() }}>
                    <span className={`${isSmallScreen ? "show" : "hide"}`}>Меню</span>
                    <div className="burger"></div>
                </div>
            </div>
        </div>
    );
}

export default Header;