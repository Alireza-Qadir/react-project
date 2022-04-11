import React from "react";
import Slider from "react-slick";


import "./slider-hero.scss"
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";



const SliderHero = () =>{



    const settings = {
        fade: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 750,
        autoplaySpeed: 2000,
        cssEase: "linear"
      };


      const numOfSlider = [1,2,3,4,5]
return(

<div className="w-full  overflow-hidden" id="slider-hero">
        <Slider {...settings}>


          {

            numOfSlider.map((item,index) => {

                  return(
                  
                  
                  <div key={index}>

                    <img src={`./images/slider-hero/city${item}.jpg`} />
               
                  </div>
                  )



            })
          }
         
        </Slider>
      </div>


)



}

export default SliderHero;