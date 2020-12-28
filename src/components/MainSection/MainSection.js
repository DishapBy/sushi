import React, {useState} from "react";
import './style.css';
import CatalogSection from "../CatalogSection/CatalogSection";
import Basket from "../Basket/Basket";


const MainSection = () => {

    const [goods, setGoods] = useState([]);

    const removeGoodsBasket = (newItem) => {
        if(goods.length > 0){
            let newGoodsArray = goods.map(item => {
                if(item.name === newItem.name && item.countGoods > 0){
                    item.countGoods -= 1;
                }
                return item;
            });
            newGoodsArray = newGoodsArray.filter(item => item.countGoods !== 0);
            setGoods(() => newGoodsArray)
        }
    }

    const addGoodsInBasket = (newItem) => {
        if (goods.length) {
            let findItem = goods.find(item => item.name === newItem.name);

            if (findItem) {
                let newGoodsArray = goods.map(item => {
                    if(item.name === newItem.name){
                        item.countGoods += 1;
                    }
                    return item;
                })
                setGoods(() => newGoodsArray)
            }
            else {
                setGoods((prev) => {
                    return [...goods, newItem];
                })
            }
        } else {
            setGoods((prev) => {
                return [newItem];
            })
        }
    }

    return (
        <div className={'mainSection'} id={'mainSection'}>
            <CatalogSection goods={goods} addGoodsInBasket={addGoodsInBasket} removeGoodsBasket={removeGoodsBasket}/>
            <Basket addGoodsInBasket={addGoodsInBasket} removeGoodsBasket={removeGoodsBasket} goods={goods}/>
        </div>
    )
}

export default MainSection;