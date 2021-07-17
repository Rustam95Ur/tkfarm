import React, { useState, useEffect } from 'react';
import './Header.scss';
import axios from '../../axios';
import requests from '../../requests';
import Language from './Language';
import Menu from './Menu';
import { Link } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
// const [logoactive, setLogo] = useState(false);

const logo = () => {
    return (
        <div className="header-logo-block">
            <Link to="/">
                <div>
                    <svg width="130" height="47" viewBox="0 0 130 47" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M96.4178 5.42688C98.4185 7.92022 99.096 11.2906 99.2495 17.0724C90.7218 17.0621 84.9313 17.3162 81.0877 14.2104C84.7186 18.7378 91.8708 19.4055 101.584 19.4158C101.398 12.3529 99.3593 7.80642 96.4178 5.42688ZM96.4178 5.42688C92.7868 0.903696 85.59 0.00857421 75.877 0C76.0605 7.063 78.1461 11.835 81.0877 14.2104C79.0904 11.7213 78.6512 8.13984 78.5003 2.3615C87.0289 2.37027 92.5801 2.32526 96.4178 5.42688Z" fill="url(#paint0_linear)" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M106.632 17.0723C106.779 11.2904 107.46 7.9201 109.459 5.42676C106.521 7.80629 104.478 12.3528 104.295 19.4157C114.01 19.4053 121.158 18.7376 124.793 14.2103C120.949 17.3161 115.155 17.062 106.632 17.0723Z" fill="#FAAE00" />
                        <path d="M109.459 5.42688C113.301 2.32526 118.851 2.37008 127.379 2.3615C127.227 8.13984 126.792 11.7213 124.793 14.2104C127.734 11.835 129.817 7.063 130 0C120.29 0.00876907 113.09 0.903696 109.459 5.42688Z" fill="url(#paint1_linear)" />
                        <path d="M124.793 27.377C126.792 29.865 127.227 33.4483 127.379 39.2266C118.851 39.2178 113.301 39.2628 109.459 36.1596C113.09 40.6844 120.29 41.5778 130 41.5865C129.817 34.5243 127.734 29.7531 124.793 27.377Z" fill="#FAAE00" />
                        <path d="M124.793 27.3768C121.158 22.8493 114.01 22.1807 104.295 22.1704C104.478 29.2334 106.521 33.7815 109.459 36.1594C107.46 33.6677 106.779 30.2949 106.632 24.5155C115.155 24.5243 120.949 24.2718 124.793 27.3768Z" fill="#FAAE00" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M11.4265 26.876V28.9402H6.99014V41.1579H4.43545V28.9402H0V26.876H11.4265Z" fill="#3F4746" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M16.2402 26.876V33.0722H16.8593L22.2038 26.876H25.3477L19.1491 33.3376C21.4414 33.5737 22.8212 35.1081 23.937 37.6764C24.3195 38.6197 24.8186 40.006 25.466 41.1579H22.7621C22.3813 40.5375 21.8822 39.4167 21.4414 38.2355C20.4723 35.9352 19.1491 34.872 16.7428 34.872H16.2402V41.1579H13.688V26.876H16.2402Z" fill="#3F4746" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M42.4377 20.2065V26.6105C46.5799 26.906 49.5754 29.5311 49.5754 33.9862C49.5754 38.679 46.4041 41.1577 42.4377 41.423V46.9999H40.0888V41.4524C35.9767 41.187 32.9512 38.5903 32.9512 34.1344C32.9512 29.414 36.0951 26.9344 40.0888 26.6105V20.2065H42.4377ZM40.0888 28.381C37.2099 28.7635 35.5067 31.125 35.5067 34.0456C35.5067 36.9955 37.2691 39.2976 40.0888 39.6525V28.381ZM42.4377 39.6525C45.2876 39.2684 47.0198 36.9085 47.0198 33.9862C47.0198 31.0363 45.2876 28.7936 42.4377 28.381V39.6525Z" fill="#3F4746" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M60.6755 41.1574L60.4696 39.3567H60.383C59.5897 40.4785 58.0615 41.4822 56.0351 41.4822C53.1562 41.4822 51.688 39.4455 51.688 37.3804C51.688 33.9282 54.741 32.0388 60.2347 32.0681V31.7734C60.2347 30.5931 59.9113 28.4686 57.0042 28.4686C55.6818 28.4686 54.3019 28.8821 53.3037 29.5308L52.7145 27.8198C53.892 27.0531 55.5951 26.5508 57.3866 26.5508C61.7328 26.5508 62.7902 29.5308 62.7902 32.3937V37.7336C62.7902 38.9742 62.8494 40.1839 63.0252 41.1574H60.6755ZM60.2938 33.8688C57.4741 33.8092 54.2728 34.3107 54.2728 37.0849C54.2728 38.7666 55.3893 39.5636 56.71 39.5636C58.5615 39.5636 59.7356 38.3833 60.1472 37.1736C60.2347 36.9082 60.2938 36.6127 60.2938 36.3474V33.8688Z" fill="#3F4746" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M66.959 31.5374C66.959 29.7075 66.8998 28.2325 66.8423 26.8755H69.1612L69.2795 29.3249H69.3387C70.3953 27.5838 72.0701 26.5508 74.3899 26.5508C77.8271 26.5508 80.411 29.4714 80.411 33.8092C80.411 38.9441 77.2979 41.4822 73.95 41.4822C72.0701 41.4822 70.4245 40.6551 69.5737 39.2379H69.5145V46.9996H66.959V31.5374ZM69.5145 35.3437C69.5145 35.7271 69.5737 36.0821 69.6312 36.4068C70.1028 38.2066 71.6585 39.4455 73.5092 39.4455C76.2406 39.4455 77.8271 37.2037 77.8271 33.9282C77.8271 31.0653 76.3288 28.6168 73.5974 28.6168C71.8351 28.6168 70.1903 29.8858 69.6904 31.8329C69.6038 32.1577 69.5145 32.5403 69.5145 32.8952V35.3437Z" fill="#3F4746" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M83.8175 26.876H86.9888L89.571 34.076C89.926 35.1382 90.5434 36.8794 90.865 37.9994H90.9242C91.2467 36.938 92.0399 34.6661 92.5983 33.1024L94.8889 26.876H98.0919L99.0901 41.1579H96.622L96.3004 34.3413C96.2113 32.8069 96.0946 30.977 96.0354 29.2357H95.9471C95.5663 30.535 95.183 31.686 94.3897 33.8692L91.6583 41.0682H89.7794L87.252 34.0165C86.813 32.6596 86.1956 30.5936 85.843 29.2659H85.7247C85.6655 30.9468 85.5798 32.8362 85.4915 34.4007L85.1381 41.1579H82.7583L83.8175 26.876Z" fill="#3F4746" />
                        <defs>
                            <linearGradient id="paint0_linear" x1="-280.508" y1="-205.811" x2="-295.994" y2="-217.427" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#20ABDD" />
                                <stop offset="1" stop-color="white" />
                            </linearGradient>
                            <linearGradient id="paint1_linear" x1="-25.2874" y1="-441.781" x2="-15.0671" y2="-451.605" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#20ABDD" />
                                <stop offset="1" stop-color="white" />
                            </linearGradient>
                        </defs>
                    </svg>
                </div>
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
    // const [isNavVisible, setNavVisibility] = useState(false);
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

    return (
        <div className="header-wrapper">
            <div className="header-inside">
                {logo()}
                {info(headerState.адрес, headerState.номер_телефона)}

                <div className="desktop-menu">
                    <Menu ref={nav} current={activeMenuOption} handleNavOptionClick={handleNavOptionClick} />
                    <Language ref={ref} current={activeLangOption} handleLangOptionClick={handleLangOptionClick} />
                </div>

                <CSSTransition
                    in={isOpen}
                    timeout={400}
                    unmountOnExit
                    className="hidden_nav"
                >
                    <div className="menu-lang">
                        <div>
                            <p className="hidden-menu">Меню</p>
                            <Menu ref={nav} current={activeMenuOption} handleNavOptionClick={handleNavOptionClick} />
                        </div>
                        <Language ref={ref} current={activeLangOption} handleLangOptionClick={handleLangOptionClick} />
                    </div>
                </CSSTransition>
                <div className={`burger_btn ${isOpen ? "open" : ""}`} onClick={() => { setOpen(!isOpen); }}>
                    <span className={`${isSmallScreen ? "show" : "hide"}`}>Меню</span>
                    <div className="burger"></div>
                </div>
            </div>
        </div>
    );
}

export default Header;