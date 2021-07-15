import React, { useState, useEffect } from 'react';
import { Switch, Route, useLocation } from "react-router-dom";
import Header from '../header/Header';
import Main from './main/Main';
import News from './news/News';
import NewsPage from './newsPage/NewsPage';
import Company from './company/Company';
import Products from './products/Products';
import Footer from '../footer/Footer';
import WOW from 'wowjs';



const Content = () => {
    const [urlId, setUrl] = useState([]);

    useEffect(() => {
        new WOW.WOW().init();
    })

    // const fadersRight = document.querySelectorAll('.fade-in-right');


    // fadersRight && fadersRight.forEach(fader => {
    //     appearOnScroll.observe(fader);
    // })
    return (
        <>
            <Header />
            <Switch>
                <Route path={`/news/:id`} component={NewsPage}>
                    <NewsPage urlId={urlId} setUrl={setUrl} />
                </Route>
                <Route path={`/news`} component={News}>
                    <News urlId={urlId} setUrl={setUrl} />
                </Route>
                <Route path={`/company`}>
                    <Company />
                </Route>
                <Route exact path={`/products`}>
                    <Products />
                </Route>
                <Route path={`/`}>
                    <Main />
                </Route>
            </Switch>
            {/* <NewsPage /> */}
            <Footer />
        </>
    );
}

export default Content;