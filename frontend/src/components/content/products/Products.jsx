import React, { useState, useEffect } from 'react';
import './Products.scss';
import axios from '../../../axios';
import requests from '../../../requests';

const Products = () => {
    const [prod, setProd] = useState([]);

    useEffect(() => {
        async function fetchdata() {
            const req = await axios.get(requests.getProducts);
            setProd(req.data);
        }
        fetchdata();
    }, []);

    return (
        <div className="products-wrapper">
            <div className="products-inside">
                <p>Продукция</p>
                {prod.map((item) => {
                    return (
                        <div className="item-wrapper">
                            <div className="item-left">
                                <img src={requests.imageUrl + item.изображение} />
                            </div>
                            <div className="item-right">
                                <p>{item.объем}</p>
                                <p>{item.название}</p>
                                <p>{item.тип}</p>
                                <div></div>
                                <p>{item.описание}</p>
                                <span>Приобрести товар на сайте партнера<div></div></span>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default Products;