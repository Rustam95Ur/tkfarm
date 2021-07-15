import React, { forwardRef } from 'react';
import './Header.scss';
const lang = [
    {
        id: 1,
        name: "Ру",
    },
    {
        id: 2,
        name: "En",
    },
    {
        id: 3,
        name: "Кк",
    },
]
const Language = forwardRef(
    ({ current, handleLangOptionClick }, ref) => {
        return (
            <div className="header-lang" ref={ref}>
                <p>Смена языка</p>
                <div>
                    {lang &&
                        lang.map(({ id, name }) => {
                            return (
                                <span
                                    key={id}
                                    className={current === name ? "active" : ""}
                                    onClick={handleLangOptionClick}
                                    data={name}
                                >
                                    {name}
                                </span>
                            );
                        })}
                </div>
            </div>
        );
    }
)

export default Language;