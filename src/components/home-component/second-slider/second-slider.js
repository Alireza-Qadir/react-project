import React from "react";
import Slider from "react-slick";

// import ReadMoreIcon from '@mui/icons-material/ReadMore';

import "./second-slider.css"
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";




const SecondSlider = () =>{
 
 
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const NumOfSecondSlider =[1,2,3,4,5]


 
  return(


     <div className='w-11/12 m-auto mt-10 text-center'>
        <h1 className="my-4 font-bold text-2xl">lorem ipsummmmmmm</h1>
        <Slider {...settings}>
           {

               NumOfSecondSlider.map((item,index) => {

                  return(
                  
                  
      

                  
<div key={index} class="max-w-sm  h-96 bg-gray-400 rounded-lg ">
<section className="h-64" >
<img class="m-auto h-full rounded-xl px-2 pt-1 " src={`./images/second-slider/0${item}.jpg`} alt="product image" />

</section>
<div class="px-5 pb-5">
<h5 class="text-sm tracking-tight text-gray-900">Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport</h5>

<div class="flex items-center mt-2.5 mb-5">


</div>
<div class="flex justify-between items-center">
<a href="" class="text-white bg-blue-700 hover:bg-blue-800  w-full   font-medium rounded-lg text-sm px-5 py-2.5 text-center">more</a>
</div>
</div>
</div>

                  )



            })
          }
        </Slider>
      </div>
   

  )
}


export default SecondSlider