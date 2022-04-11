import React from 'react';

import './under-hero.scss';




const UnderHero = () =>{



    const numOfBoxes = [1,2,3,4]

    return(


<div id='under-hero' className='flex'>

    {


        numOfBoxes.map((item,index) =>{
            return(

                <div key={index} id='box' className='w-1/4 h-64' >
  
                    
                    <img src={`./images/under-hero/car0${item}.jpg`} className='w-full h-full' />

                
                </div>

            )
        })
    }




</div>




    )
}


export default UnderHero;