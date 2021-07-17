import React, { useState } from 'react';
import './Footer.scss';
import { Link } from 'react-router-dom';
import emailjs from 'emailjs-com';

const Footer = () => {
    const [active, setActive] = useState(false);
    const [active2, setActive2] = useState(false);
    const [message, setMessage] = useState("");
    const [isAlertOpen, setAlertOpen] = useState(false);

    function myAlert() {

    }

    function sendEmail(e) {
        e.preventDefault();
        const param = {
            message: message,
        }
        emailjs.send('gmail', 'tkfarm', param, 'user_ivKLzje71DAN0sTTAdXhY')
            .then((result) => {
                myAlert();
                setAlertOpen(true);
            }, (error) => {
                console.log(error.text);
            });
        setMessage("");
    }

    const messageChange = (e) => {
        setMessage(e.target.value);
        console.log(message)
    }
    return (
        <>
            {isAlertOpen &&
                (
                    <div className="alert-wrapper">
                        <div className="alert-left">Ваше сообщение отправлено!</div>
                        <div className="alert-right" onClick={() => { setAlertOpen(false) }}>Отлично!</div>
                    </div>
                )
            }
            <div className="footer-wrapper">
                <div className="footer-inside">
                    <div className="footer-left">
                        <div className="footer-nav">
                            <div className="footer-title" onClick={() => { setActive(!active) }}>Навигация <div className={`${active ? "up" : "bottom"}`}></div></div>
                            <div className={`footnav ${active ? "show" : "hide"}`}>
                                <a style={{ textDecoration: "none" }} href="/">
                                    <p className={`footnav `} id="text-show">Главная</p>
                                </a>
                                <a style={{ textDecoration: "none" }} href="/company">
                                    <p className={`footnav`} id="text-show">О компании</p>
                                </a>
                                <a style={{ textDecoration: "none" }} href="/news">
                                    <p className={`footnav`} id="text-show">Новости</p>
                                </a>
                                <a style={{ textDecoration: "none" }} href="/products">
                                    <p className={`footnav`} id="text-show">Продукция</p>
                                </a>
                                <a style={{ textDecoration: "none" }} href="#">
                                    <p className={`footnav`} id="text-show">Контакты</p>
                                </a>
                            </div>

                        </div>
                        <div className={`footer-contact ${active2 ? "show" : "hide"}`}>
                            <div className="footer-title" onClick={() => { setActive2(!active2) }}>Контакты <div className={`${active2 ? "up" : "bottom"}`} ></div></div>

                            <p className={`footer-main ${active2 ? "show" : "hide"}`} id="text-show">Адрес</p>
                            <p className={`footer-text ${active2 ? "show" : "hide"}`} id="text-show">Фурманова 14A</p>
                            <p className={`footer-main ${active2 ? "show" : "hide"}`} id="text-show">E-mail</p>
                            <p className={`footer-text ${active2 ? "show" : "hide"}`} id="text-show">TKFARM@gmail.com</p>
                        </div>
                        <div className={`footer-phone ${active2 ? "show" : "hide"}`}>
                            <p className={`footer-main ${active2 ? "show" : "hide"}`} id="text-show">Телефон</p>
                            <p className={`footer-text ${active2 ? "show" : "hide"}`} id="text-show">+7 (708) 794 - 23 - 32</p>
                        </div>
                    </div>
                    <div className="footer-right">
                        <p>Обработка писем и притензий</p>
                        <form >
                            <textarea
                                onChange={messageChange}
                                name="message"
                                value={message}
                                placeholder="Суть запроса" />

                        </form>

                        {/* <input type="submit" value="Send" /> */}

                        <div onClick={(e) => { sendEmail(e) }}
                            type="submit"
                        >
                            <span>Отправить письмо</span>
                            <div></div>
                        </div>
                    </div>
                </div>
                <p>2021 ‘’TК фарм’’ все права защищены</p>
            </div>
        </>
    );
}

export default Footer;