import React from "react";
import './style.css';

const Footer = () => {
    return (
        <>
            <div className={'footer'} id={'footer'}>
                <div className="footer__first">
                    <div className="footer__contact">
                        <div className={'footer__logo'}>
                            <img src="img/header/Logo.png" alt="logo"/>
                        </div>
                        <div className="footer__contacts">
                            <p>Прием заказов: +375 29 321 00 00, +375 33 321 00 00</p>
                            <p>E-mail: feedback@sushivesla.by</p>
                        </div>
                    </div>
                    <div className="footer__address">
                        <p>Адреса OOO “Кузница вкуса”:</p>
                        <p>г.Минск, пр. Машерова, 78 (11.00-23.00)</p>
                        <p>г.Минск, ул. Я. Коласа, 37 ТЦ "Айсберг" (круглосуточно)</p>
                        <p>г.Минск, ул. Притыцкого, 83 (11.00-23.00)</p>
                        <p>г.Минск, ул. Шафарнянская, 11 (11.00-23.00)</p>
                        <p>г.Минск, ул. Уманская, 54 ТЦ "Глобо" (пн- чт, вс 11.00-23.00, пт-сб круглосуточно)</p>
                        <p>г.Минск, пр. Партизанский, 150а ТЦ "Момо" (10.00-23.00)</p>
                        <p>г.Минск, пр. Победителей, 9 ТРЦ "Galleria Minsk" (10.00-22.00)</p>
                    </div>
                    <div className={'footer__details'}>
                        <p className={'details__text'}>Подробнее условия оплаты и доставки</p>
                        <img src="img/footer/Платежные системы.svg" alt=""/>
                    </div>
                </div>
                <div className="footer__second">
                    <p className={'footer__info'}>ООО «Кузница Вкуса» <br/>Зарегистрировано решением Минского районного
                        исполнительного комитета от 25.05.2018г. в Едином государственном регистре юридических лиц и
                        индивидуальных предпринимателей. Свидетельство о государственной регистрации юридического лица
                        №193083807</p>
                    <p className={'footer__info'}>Интернет-магазин sushivesla.by зарегистрирован в Торговом реестре
                        Республики Беларусь 14.01.2016 г. Регистрационный номер 301081. УНП 190790821</p>
                    <p className={'footer__info'}>Интернет-магазин takeaway.sushivesla.by зарегистрирован в Торговом
                        реестре
                        Республики Беларусь 05.03.2019 г. Регистрационный номер 442605. УНП 19308380</p>
                    <p className={'footer__legalAddress'}>
                        Юридический и почтовый адрес:
                        220036, г. Минск, ул. К. Либкнехта, 45-17а
                    </p>
                </div>
            </div>
            <div>
                <span className={'footer__company'}>© 2007- 2020 "СУШИ ВЕСЛА".</span>
                <span className={'footer__company'}>Разработка сайта - Gik Media</span>
            </div>
        </>
    )
}

export default Footer;