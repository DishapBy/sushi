import React, {useState} from "react";
import './style.css';
import CatalogSection from "../CatalogSection/CatalogSection";
import Basket from "../Basket/Basket";


const MainSection = () => {

    const [goods, setGoods] = useState([]);


    const removeGoodsBasket = (newItem) => {
        if(goods.length){
            console.log('Goods', goods);
            console.log("newItem", newItem);

            let findItem = goods.find(item => item.name === newItem.name);

            let newGoodsArray = goods.map(item => {
                if(item.name === newItem.name && item.countGoods > 0){
                    item.countGoods -= 1;
                }
                return item;
            })
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

    console.log(goods)

    return (
        <div className={'mainSection'}>
            <CatalogSection addGoodsInBasket={addGoodsInBasket} removeGoodsBasket={removeGoodsBasket}/>
            <Basket goods={goods}/>
        </div>
    )
}

export default MainSection;