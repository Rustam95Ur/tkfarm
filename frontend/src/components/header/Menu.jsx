import React, { forwardRef, useState, useEffect } from 'react';
import './Header.scss';
import { Link } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import Language from './Language';

const navOption = [
    {
        id: 1,
        name: "Главная",
        a: "/"
    },
    {
        id: 2,
        name: "О компании",
        a: "/company",
    },
    {
        id: 3,
        name: "Новости",
        a: "/news",
    },
    {
        id: 4,
        name: "Продукция",
        a: "/products"
    }
]

const Menu = forwardRef(
    ({ current, handleNavOptionClick }, ref) => {

        return (
            <div className="header-menu">
                <nav ref={ref}>
                    {navOption &&
                        navOption.map(({ id, name, a }) => {
                            return (
                                <a
                                    href={`${a}`}
                                    // href={`${a}`}
                                    key={id}
                                    className={current === name ? "active" : "a"}
                                    onClick={handleNavOptionClick}
                                    data={name}
                                >
                                    {name}
                                </a>
                            )
                        })
                    }
                </nav>

            </div>
        );
    }
)

export default Menu;