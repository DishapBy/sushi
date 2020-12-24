import React from 'react'
import Header from "./components/Header/Header";
import {BrowserRouter} from "react-router-dom";
import Slider from "./components/Slider/Slider";
import 'bootstrap/dist/css/bootstrap.min.css';
import Delivery from "./components/Delivery/Delivery";
import FoodCategory from "./components/FoodCategory/FoodCategory";
import Footer from "./components/Footer/Footer";
import MainSection from "./components/MainSection/MainSection";

function App() {

    return (
        <div className="App">
            <BrowserRouter>
                <Header/>
                <Slider/>
                <Delivery/>
                <FoodCategory/>
                <MainSection />
                <Footer/>
            </BrowserRouter>
        </div>
    );
}

export default App;
