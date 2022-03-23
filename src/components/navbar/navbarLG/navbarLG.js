import React , {useState} from "react";
import {ReactComponent as LogoSvg} from '../diamond.svg'
import 'hover.css'






const NavbarLG = () =>
{

    const [logoHover , setlogoHover] = useState(false)

return(

<nav className="w-full h-auto flex justify-evenly  items-center" id="navbar">

    <div className="w-2/12 flex justify-center  ">
    
      <img src='./images/logo.jpg' alt='logo'  className='w-3/4 cursor-pointer'/>
    
    </div>

<ul className="w-8/12 flex justify-evenly text-gray-600 ">
    <li className="cursor-pointer py-1 px-0.5 hvr-underline-from-center">Home</li>
    <li className="cursor-pointer py-1 px-0.5 hvr-underline-from-center">Services</li>
    <li className="cursor-pointer py-1 px-0.5 hvr-underline-from-center">Products</li>
    <li className="cursor-pointer py-1 px-0.5 hvr-underline-from-center">About Us</li>
    <li className="cursor-pointer py-1 px-0.5 hvr-underline-from-center">Contact Us</li>
     
</ul>


<div className="w-2/12">

   <button 
   onMouseEnter={()=>setlogoHover(true)} 
   onMouseLeave={()=>setlogoHover(false)} 
   className="flex items-center hover:bg-gray-600 bg-indigo-400 transition duration-400 py-2 px-4 font-bold text-white rounded">

       {

      logoHover === true ? 
      <img src="./images/logo.gif" alt="basket-shop-cart" style={{height:'40px'}}/>
           :

            <LogoSvg style={{height:'40px'}}/> 

       }
     
     
       <span>
           your cart
       </span>
     
   </button>

</div>


</nav>



)




}

export default NavbarLG;