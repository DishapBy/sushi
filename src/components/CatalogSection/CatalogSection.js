import React, {useEffect, useState} from "react";
import {catalogSection} from '../../data/сatalogSection';
import CatalogSectionItem from "../CatalogSectionItem/CatalogSectionItem";
import './style.css'

const CatalogSection = (props) => {

    const [countInBasket, setCountInBasket] = useState(0);

    useEffect(() => {
        if(props.goods.length){
            setCountInBasket(props.goods)
        }
    }, [props.goods.length])

    const sectionItemsArray = catalogSection.map((item, index) => (
        <CatalogSectionItem {...item} countInBasket={countInBasket} addGoodsInBasket={props.addGoodsInBasket}
                            removeGoodsBasket={props.removeGoodsBasket} key={index}/>
    ))

    return (
        <div className={'catalogSection'}>
            <div className={'catalogSection__food'}>
                <div className={'catalogSection__header'}>
                    <p className={'catalogSection__header--text'}>Раздел подкаталога</p>
                    <div className={'catalogSection__filter'}>
                        <img src="img/catalogSectionItem/filter.svg" alt=""/>
                        <div className={'catalogSection__filters'}>Фильтры

                        </div>
                    </div>

                </div>
                <div className={'catalogSection__items'}>
                    {sectionItemsArray}
                </div>
            </div>
        </div>
    )

}

export default CatalogSection;