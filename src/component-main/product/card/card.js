import React from "react";
import Button from "./button";



// import './card.css';

const Card = ({item}) => {

    return (

        <div className="max-w-sm flex flex-col items-center justify-between rounded  p-5 bg-violet-200 ">

            {/*  AVATAR   */}
            <div className="rounded-full   h-32 w-32 " id='avatar-box'>

                <img src={item.image} alt="product image" className="w-full h-full relative -top-4 "/>
            </div>

            {/*  Full Name   */}
            <div className="mb-4">
                <span className="text-lg font-medium mr-2">{item.first_name}</span>
                <span className="text-lg font-medium">{item.last_name}</span>
            </div>

            <div className="bg-violet-300 rounded-xl py-5 border-y-indigo-500 border-y-2 w-full flex justify-between items-center">



                {/*  Price  */}

                <div className="flex justify-between pl-5 flex-col">
                    <span className="text-neutral-700 text-sm">Price</span>
                    <span className="text-gray-700 font-medium">{item.price} <span className="text-green-700">$</span></span>
                </div>

                {/* Rate  */}
                <div className="flex justify-between pr-5 flex-col">
                    <span className="text-neutral-700  text-sm">Rate</span>
                    <span className="text-gray-700 font-medium">{item.rate+".37"}</span>
                </div>



            </div>
            <div className="w-11/12">

                <Button />

            </div>

        </div>

    )


}


export default Card