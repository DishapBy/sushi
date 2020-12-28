import React, {useState} from 'react';
import './style.css';
import {Link} from "react-router-dom";
import Popup from "../Popup/Popus";

const Header = () => {

    const openPopup = () => {
        setPopupActive(true);
    };

    const closePopup = () => {
      setPopupActive(false);
    };

    const [popupActive, setPopupActive] = useState(false);
    return (
        <>
            <div className={'header'} id={'header'}>
                <div className="header__logo">
                    <img src="img/header/Logo.png" alt="logo"/>
                </div>
                <div className={'header__nav'}>
                    <div className={'header__nav-item active'}>
                        <Link to={'/'}>
                            <span className={'nav-item__text'}>Меню</span>
                        </Link>
                    </div>

                    <div className={'header__nav-item'}>
                        <Link to={'/'}>
                            <span className={'nav-item__text'}>Акции</span>
                        </Link>
                    </div>

                    <div className={'header__nav-item'}>
                        <Link to={'/'}>
                            <span className={'nav-item__text'}>Новости</span>
                        </Link>
                    </div>

                    <div className={'header__nav-item'}>
                        <Link to={'/'}>
                            <span className={'nav-item__text'}>О нас</span>
                        </Link>
                    </div>

                    <div className={'header__nav-item'}>
                        <Link to={'/'}>
                            <span className={'nav-item__text'}>Карьера</span>
                        </Link>
                    </div>

                    <div className={'header__nav-item'}>
                        <Link to={'/'}>
                            <span className={'nav-item__text'}>Отзывы</span>
                        </Link>
                    </div>
                </div>
                <div className={'header__number'}>
                    <div className={'number-img'}>
                        <img src="img/header/ic_phone.png" alt="telephone"/>
                    </div>
                    <div className={'number-phone'}>
                        <a href={'tel:+375 (29) 321 00 00'}>+375 (29) 321 00 00</a>
                    </div>
                </div>
                <div className={'header__search'}>
                    <input type="text" className={'header__search-input'} placeholder={'Поиск'}/>
                </div>
                <div className={'header__buttons'}>
                    <div className={'button__item'}>
                        <img src="img/header/ic_Language.png" alt="language" className="header-btn"/>
                    </div>
                    <div className={'button__item'} onClick={() => openPopup()}>
                        <img src="img/header/ic_user.png" alt="user" className="header-btn"/>
                    </div>
                </div>
            </div>

            {popupActive ? <Popup closePopup={closePopup}/> : null}
        </>
    )
}

export default Header;