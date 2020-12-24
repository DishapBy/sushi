import React from "react";
import './style.css';

const GoodsItem = (props) => {
    return (
        <div className={'goodsItem'}>
            <div className={'goodsItem__title'}>
                <p className={'goodsItem__name'}>{props.name}</p>
                <p className={'goodsItem__sum'}>{props.price * props.countGoods} руб.</p>
            </div>
            <div className={'goodsItem__edit'}>
                <button className={'catalogSectionItem__minus'}></button>
                <p className={'goodsItem__countGoods'}>{props.countGoods}</p>
                <button className={'catalogSectionItem__plus'}></button>
            </div>
        </div>
    )
}

export default GoodsItem;