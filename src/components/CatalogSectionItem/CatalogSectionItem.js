import React, {useState} from "react";
import './style.css'

const CatalogSectionItem = ({name, image, price}) => {

    const [count, setCount] = useState(0);

    console.log(image)

    return (
        <div className={'catalogSectionItem'}>
            <img className={'catalogSectionItem__image'} src={image} alt="Catalog Section Item Image"/>
            <p className={"catalogSectionItem__name"}>{name}</p>
            <p className={'catalogSectionItem__price'}><strong>{price}</strong> за 1 порцию (1шт)</p>
            <div className={"catalogSectionItem__buttons"}>
                <button className={'catalogSectionItem__minus'}></button>
                <p className={'catalogSectionItem__count'}>{count}</p>
                <button className={'catalogSectionItem__plus'}></button>
            </div>

            {/*<img src="img/catalogSectionItem/minus.png" alt="" />*/}
        </div>
    )

}

export default CatalogSectionItem;