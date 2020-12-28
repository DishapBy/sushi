import React from "react";
import './style.css';
import {foodCategory} from '../../data/foodCategory'
import FoodCategoryItem from "../FoodCategoryItem/FoodCategoryItem";

const FoodCategory = () => {

    const foodArray = foodCategory.map((item, index) => (
        <FoodCategoryItem {...item} key={index}/>
    ))

    return(
        <div className={'foodCategory'} id={'foodCategory'}>
            {foodArray}
        </div>
    )

}

export default FoodCategory;