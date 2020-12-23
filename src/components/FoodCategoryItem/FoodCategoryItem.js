import React from "react";
import './style.css';


const FoodCategoryItem = ({id, name, image}) => {

    return(
        <div className={'foodCategoryItem'}>
            <img src={image} alt=""/>
            {name}
        </div>
    )
}

export default FoodCategoryItem;