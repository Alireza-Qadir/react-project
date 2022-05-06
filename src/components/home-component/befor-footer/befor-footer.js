import React from "react";
import Slider from "react-slick";

import "./befor-footer.css";


const TitleBox = () =>{



    const settings = {
        fade: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 3000,
        arrows: false,
        cssEase: "linear"
      };



      const picsNum =[1,2,3,4]

    return(

        <section className='' id="">
            <div className='w-7/12  m-auto mt-10 text-center py-5 h-20 bg-gradient-to-r from-indigo-500 to-gray-500' id="title">
                <h3 className="text-2xl font-semibold">   
                   LOREM
                </h3>
           </div>



           <div className="flex justify-between w-full mt-10 ">

             <div className="w-6/12">               
             
                <Slider {...settings}>
              {
                picsNum.map((item,index) =>{

                return(
                <div >
                     <div key={index} className="text-center h-64 mt-4  m-auto" id='parent'>
                      <img src={`./images/small-slider/1${item}.jpg`} alt="nothing" className="w-full h-full"/>
                  
                     </div>
                </div>
                )
              })


            }
         
                </Slider>

               </div>




               <div className='w-6/12'>
                   
                  
                   <h3 className="text-center text-2xl font-serif font-bold">Touch The Quality With Us</h3>
                  <p className="mt-4 text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus sed vulputate odio ut enim blandit volutpat maecenas volutpat. Natoque penatibus et magnis dis parturient montes nascetur ridiculus. Nec ullamcorper sit amet risus nullam eget felis eget nunc. Neque gravida in fermentum et sollicitudin ac. Ipsum consequat nisl vel pretium lectus quam. Tellus rutrum tellus pellentesque eu tincidunt tortor aliquam nulla facilisi. Ut venenatis tellus in metus. Tempus urna et pharetra pharetra massa massa ultricies mi quis.</p>
                  <span>read more</span>
                  </div>
           
           
           
           
           </div>







        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        </section>





    )
}



export default TitleBox