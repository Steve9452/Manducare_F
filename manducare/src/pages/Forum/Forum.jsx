import React from 'react'
import Footer from "../../components/footer/Footer";
import Carousel from "../../components/carousel/Carousel";
import Statistics from "../../components/statistics/Statistics";
import Navbar from "../../components/header/Navbar";
import Cards from '../../components/cards/Cards';
export default function Forum() {
    return (
        <div>
          <Navbar />
          <Carousel />
          <Cards/>
          <Footer />
        </div>
    )
}