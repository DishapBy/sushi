import React, {useState} from "react";
import './style.css';

const Popup = (props) => {

    return(
        <div className={'popup'}>
            <div className={'popup__content'}>
                <h3 className={'popup__title'}>Ваша локация </h3>
                <img className={'popup__close'} src="img/popup/btn_close.svg" alt="close" onClick={props.closePopup}/>
                <div className={'popup__textContent'}>
                    <div className={'popup__img'}>
                        <img src="img/popup/Машина.svg" alt=""/>
                    </div>
                    <div className={'popup__text'}>
                        <div>
                            <p>Ваш адрес:</p>
                            <strong>ул. Тимирязева, 72/1</strong>
                        </div>
                        <div>
                            <p>Время доставки:</p>
                            <strong>через 95 минут (в 12:28)</strong>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Popup;