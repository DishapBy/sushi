import React, {useEffect, useState} from "react";
import './style.css';
import GoodsItem from "../GoodsItem/GoodsItem";

const Basket = ({goods, addGoodsInBasket, removeGoodsBasket}) => {

    const [goodsInBasket, setGoodsInBaskets] = useState([]);

    useEffect(() => {
        setGoodsInBaskets(goods);
    }, [goods])

    const resultBasket = goodsInBasket.length || goodsInBasket.length === 0 ? goodsInBasket.map((item, index) => {

        return <GoodsItem {...item} addGoodsInBasket={addGoodsInBasket} removeGoodsBasket={removeGoodsBasket} key={index}/>
        })
        : <p style={{textAlign: 'center'}}>Корзина пуста</p>

    return (
        <div className={'basket'} id={'basket'}>
            <p className={'basket__title'}>
                Корзина
            </p>
            <div className={'basket__goods'}>
                {resultBasket}
                <div className={'basket__order'}>
                    <img className={'basket__icon'} src="img/basket/basket.svg" alt=""/>
                    Оформить заказ
                </div>
            </div>
        </div>
    )
}

export default Basket;