import React from 'react'
import Header from "./components/Header/Header";
import {BrowserRouter} from "react-router-dom";
import Slider from "./components/Slider/Slider";
import 'bootstrap/dist/css/bootstrap.min.css';
import Delivery from "./components/Delivery/Delivery";
import FoodCategory from "./components/FoodCategory/FoodCategory";
import CatalogSection from "./components/CatalogSection/CatalogSection";
import Footer from "./components/Footer/Footer";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Header/>
                <Slider />
                <Delivery />
                <FoodCategory />
                <CatalogSection />
                <Footer />
            </BrowserRouter>
        </div>
    );
}

export default App;
