import React from "react";
import {catalogSection} from '../../data/сatalogSection';
import CatalogSectionItem from "../CatalogSectionItem/CatalogSectionItem";
import './style.css'

const CatalogSection = () => {

    const sectionItemsArray = catalogSection.map((item, index) => (
        <CatalogSectionItem {...item} key={index}/>
    ))

    return (
        <div className={'catalogSection'}>
            <div className={'catalogSection__header'}>
                <p className={'catalogSection__header--text'}>Раздел подкаталога</p>
                <div className={'catalogSection__header--filter'}>
                    <img src="img/catalogSectionItem/filter.svg" alt=""/>
                    <p className={'catalogSection__header--filters'}>Фильтры</p>
                </div>
                
            </div>
            <div className={'catalogSection__items'}>
                {sectionItemsArray}
            </div>
        </div>
    )

}

export default CatalogSection;