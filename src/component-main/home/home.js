import React from "react";
import SliderHero from '../../components/home-component/slider-hero/slider-hero';
import UnderHero from '../../components/home-component/under-hero/under-hero';
import SecondSlider from '../../components/home-component/second-slider/second-slider';
import TitleBox from '../../components/home-component/befor-footer/befor-footer';
import BrandBox from "../../components/home-component/brand-box/brand-box";


const Home = () => {

    return (

        <div>

            <SliderHero/>
            <UnderHero/>
            <SecondSlider/>
            <TitleBox/>
            <BrandBox/>


        </div>


    )
}

export default Home;