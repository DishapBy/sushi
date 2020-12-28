import React, {useEffect, useState} from "react";
import './style.css';

const GoodsItem = ({name, price, countGoods, addGoodsInBasket, removeGoodsBasket}) => {

    const [count, setCount] = useState(countGoods);

    useEffect(() => {
        setCount(() => countGoods)
    },[countGoods])

    return (
        <div className={'goodsItem'}>
            <div className={'goodsItem__title'}>
                <p className={'goodsItem__name'}>{name}</p>
                <p className={'goodsItem__sum'}>{(price * countGoods).toFixed(2)} руб.</p>
            </div>
            <div className={'goodsItem__edit'}>

                <button
                    className={'catalogSectionItem__minus'}
                    onClick={() => {
                        if (count >= 0) {
                            console.log('MINUS', count)
                            setCount(count - 1)
                            let countGoods = count - 1;
                            removeGoodsBasket({name, price, countGoods})
                        }
                    }}
                ></button>

                <p className={'goodsItem__countGoods'}>{countGoods}</p>

                <button
                    className={'catalogSectionItem__plus'}
                    onClick={() => {
                        setCount(count + 1);
                        let countGoods = count + 1;
                        addGoodsInBasket({name, price, countGoods})
                    }}
                ></button>

            </div>
        </div>
    )
}

export default GoodsItem;