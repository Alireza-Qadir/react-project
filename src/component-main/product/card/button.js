import React from "react";
import "./button.css"

const Button = () =>{
    return(

        <div id="container" className="w-full mt-4 ">
            <button className="learn-more flex items-center">
                 <span className="circle rounded-l-2xl" aria-hidden="true">
                  <span className="icon arrow"></span>
                 </span>
                 <span className="button-text relative top-2">Learn More</span>
            </button>
        </div>

    )



}

export default Button