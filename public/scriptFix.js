let headerHeight = document.getElementById('header').clientHeight;
let carouselHeight = document.getElementById('carousel').clientHeight;
let deliveryHeight = document.getElementById('delivery').clientHeight;
let foodCategoryHeight = document.getElementById('foodCategory').clientHeight;
let mainSectionHeight = document.getElementById('mainSection').clientHeight;
let basket = document.getElementById('basket');

let dawnScroll = headerHeight + carouselHeight + deliveryHeight + foodCategoryHeight + mainSectionHeight / 2;

document.getElementsByTagName('body')[0].onscroll = () => {
    if(document.documentElement.scrollTop >= dawnScroll){
        basket.classList.add('fix');
    }
    else {
        basket.classList.remove('fix');
    }
};