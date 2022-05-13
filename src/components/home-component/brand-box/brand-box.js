import React from "react";


import './brand-box.css'
import {Link} from "react-router-dom";

const BrandBox = () => {

    // const randColor = () =>  {
    //     return "#" + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0').toUpperCase();
    // }
    //
    // console.log(randColor());


    return(
<div>
        <div className='w-full bg-gray-600 mt-20 text-center' id='brand-box'>
          <section className='text-center text-7xl' id='brand-parent'>
           <span> DOLCE & GABBANA</span> <br/>
            <span> GUCCI </span> <br/>
            <span> LOUIS VUITTON </span> <br/>
            <span> LACOSTE </span> <br/>
            <span> Calvin Klein</span> <br/>
            <span> GIVENCHY </span> <br/>
            <span> roberto cavalli</span> <br/>
            <span> VERSACE</span> <br/>
            <span> BALENCIAGA</span>

          </section>
        </div>

        <div className='w-full mt-10 grid grid-cols-5 gap-1'>
            <Link to='/#'>
            <div ><img src="./images/brands-logo/LV.png" alt="Louis Vuitton"/></div>
            </Link>
            <Link to='/#'>
                <div ><img src="./images/brands-logo/roberto-cavalli.png" alt="Roberto Cavalli"/></div>
            </Link>
            <Link to='/#'>
                <div ><img src="./images/brands-logo/versace.png" alt="Versace"/></div>
            </Link>
            <Link to='/#'>
            <div ><img src="./images/brands-logo/gucci.png" alt="gucci"/></div>
            </Link>
            <Link to='/#'>
                <div ><img src="./images/brands-logo/lacoste.png" alt="Lacoste"/></div>
            </Link>
            <Link to='/#'>
                <div ><img src="./images/brands-logo/givenchy.png" alt="Givenchy"/></div>
            </Link>
            <Link to='/#'>
                <div ><img src="./images/brands-logo/balenciaga.png" alt="Balenciaga"/></div>
            </Link>
            <Link to='/#'>
                <div ><img src="./images/brands-logo/ck.png" alt="Calvin Klein"/></div>
            </Link>
            <Link to='/#'>
                <div ><img src="./images/brands-logo/D&G.png" alt="Dolce & Gabbana"/></div>
            </Link>

        </div>

</div>

    )

}


export default BrandBox