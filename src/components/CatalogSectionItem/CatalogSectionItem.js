import React, {useEffect, useState} from "react";
import './style.css'

const CatalogSectionItem = ({name, image, price, countInBasket, addGoodsInBasket, removeGoodsBasket}) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if(countInBasket.length) {
            let findName = countInBasket.find(item => item.name === name);
            if(findName !== undefined) {
                // setFulledItem(() => findName);
                setCount(() => findName.countGoods)
            }
        }
    })

    return (
        <div className={'catalogSectionItem'}>
            <img className={'catalogSectionItem__image'} src={image} alt="Catalog Section Item Image"/>
            <p className={"catalogSectionItem__name"}>{name}</p>
            <p className={'catalogSectionItem__price'}><strong>{price}</strong> за 1 порцию (1шт)</p>
            <div className={"catalogSectionItem__buttons"}>

                <button
                    className={'catalogSectionItem__minus'}
                    onClick={() => {
                        if (count > 0) {
                            setCount(count - 1)
                            let countGoods = count - 1;
                            removeGoodsBasket({name, price, countGoods})
                        }
                    }}
                ></button>

                <p className={'catalogSectionItem__count'}>{count}</p>

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

export default CatalogSectionItem;