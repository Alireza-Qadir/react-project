import React from 'react';

import './under-hero.scss';




const UnderHero = () =>{



    const numOfBoxes = [1,2,3,4]

    return(


<div id='under-hero' className='grid lg:grid-cols-4 md:grid-cols-2  '>

    {


        numOfBoxes.map((item,index) =>{
            return(

                <div key={index} id='box' className='h-64 m-2' >
  
                    
                    <img src={`./images/under-hero/car0${item}.jpg`} className='w-full h-full rounded-xl lg:grayscale   ' id="box-child" />

                
                </div>

            )
        })
    }




</div>




    )
}


export default UnderHero;