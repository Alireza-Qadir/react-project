import React , {useState} from "react";
import {Link , BrowserRouter as Router} from "react-router-dom";
import 'remixicon/fonts/remixicon.css'
import {ReactComponent as LogoSvg} from './diamond.svg';
import "./navbar.scss"
import 'hover.css';



   
        const Navbar = () =>
        {
          const [logoHover , setlogoHover] = useState(false)
     
       return(
     
     <Router>
         <nav className="w-full h-auto flex lg:flex-row  md:flex-col sm:flex-col flex-col md:flex-col justify-evenly  items-center" id="navbar">
       
           <div className="lg:w-2/12 md:w-full sm:w-full flex justify-center">
           <Link>  
              <img src='./images/logo.jpg' alt='logo' className='w-3/4 cursor-pointer' style={{     width:"200px"}}/>
           </Link>
         
         </div>
     
     <ul className="lg:w-6/12  flex lg:flex-row md:flex-col sm:flex-col flex-col justify-evenly text-gray-600 ">
         <li className="cursor-pointer py-1 px-0.5 hvr-underline-from-center">
             <Link to="/#" className="text-base">
                <i class="ri-home-7-line relative top-0.5 right-0.5"/>
                 Home
             </Link>
         </li>
     
         <li className="cursor-pointer py-1 px-0.5 hvr-underline-from-center">
             <Link to="/#" className="text-base">
                 <i class="ri-customer-service-2-line relative top-0.5 right-1"/>
                 Services
             </Link>
         </li>
     
         <li className="cursor-pointer py-1 px-0.5 hvr-underline-from-center">
             <Link to="/#" className="text-base">
                 <i class="ri-shopping-bag-3-line relative top-0.5 right-0.5"/>
                 Products
             </Link>
         </li>
     
         <li className="cursor-pointer py-1 px-0.5 hvr-underline-from-center">
             <Link to="/#" className="text-base">
                 <i class="ri-information-line relative top-0.5 right-0.5"/>
                 About Us
             </Link>
         </li>
     
         <li className="cursor-pointer py-1 px-0.5 hvr-underline-from-center">
             <Link to="/#" className="text-base">
                 <i class="ri-contacts-book-line relative top-0.5 right-1"/>
                 Contact Us
             </Link>
         </li>
          
     </ul>
     
     
     <div className="lg:w-2/12 md:w-full sm:w-full flex justify-center">
     
        <button 
        onMouseEnter={()=>setlogoHover(true)} 
        onMouseLeave={()=>setlogoHover(false)} 
        className="flex items-center hover:bg-gray-600 bg-indigo-400 transition duration-400 py-2 px-4 font-bold text-white rounded">
     
            {
     
           logoHover === true 
             ? 
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
     
     </Router>
     
     )
     
     
     
     
     }

    






export default Navbar