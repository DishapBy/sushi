import React from "react";
import {catalogSection} from '../../data/сatalogSection';
import CatalogSectionItem from "../CatalogSectionItem/CatalogSectionItem";
import './style.css'
import Basket from "../Basket/Basket";

const CatalogSection = (props) => {

    const sectionItemsArray = catalogSection.map((item, index) => (
        <CatalogSectionItem {...item} addGoodsInBasket={props.addGoodsInBasket} removeGoodsBasket={props.removeGoodsBasket} key={index}/>
    ))

    return (
        <div className={'catalogSection'}>
            <div className={'catalogSection__food'}>
                <div className={'catalogSection__header'}>
                    <p className={'catalogSection__header--text'}>Раздел подкаталога</p>
                    <div className={'catalogSection__filter'}>
                        <img src="img/catalogSectionItem/filter.svg" alt=""/>
                        <p className={'catalogSection__filters'}>Фильтры</p>
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