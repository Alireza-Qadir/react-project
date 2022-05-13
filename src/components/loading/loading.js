import React from "react";
import Gif from "./loading-gf"


const Loading = () =>{
    return(
        <>
            <style jsx>

                {`
                
                .loading{
                width: 350px;
                height: 350px;
                margin: auto;
                //display:flex;
                //justify-content: center;
                //align-items: center;
                }
                
                `}
            </style>

            <div className="loading">

                <img src={Gif} alt="loading................."/>


            </div>


        </>

    )


}

export default Loading