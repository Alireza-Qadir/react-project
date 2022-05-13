import React from 'react';

import './under-hero.scss';




const UnderHero = () =>{



    const numOfBoxes = [1,2,3,4]

    return(

     <div>
        <h1 className="text-2xl text-center my-2" id="title"> 
           NEW COLLECTION
        </h1>
        <div id='under-hero' className='grid lg:grid-cols-4 gap-1 md:grid-cols-2  '>


    {


        numOfBoxes.map((item,index) =>{
            return(

                <div key={index} id='box' className='h-64' >
  
                    
                    <img src={`./images/under-hero/car0${item}.jpg`} alt='nothing' className='w-full cursor-pointer h-full rounded-xl lg:grayscale' id="box-child" />

                
                </div>

            )
        })
    }




</div>
</div>




    )
}


export default UnderHero;