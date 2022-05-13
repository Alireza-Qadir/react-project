import React, {useState, useEffect} from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import axios from "axios";
import Card from "./card/card";
import Loading from "../../components/loading/loading";
import {ALL_PRODUCT} from "../../api";


const Product = () => {

    const [product,setProduct] = useState([]);
    const [loading,setLoading] = useState(true);





      function getAllProduct (name){

          setLoading(true)
          if (name == null || name == undefined || name.length == 0)
          {
          axios.get(ALL_PRODUCT)
              .then(response=>{
                  return response.data

              })

              .then(data =>{
                  setProduct(data);
                  setLoading(false);



              })

          }
          else {
              axios.get(ALL_PRODUCT)
                  .then(response=>{
                      return response.data

                  })

                  .then(data =>{
                      const newProducts = data.filter(product => product.first_name.toLowerCase().includes(name.toLowerCase()))
                      setProduct(newProducts);
                      setLoading(false);



                  })


          }
      }
    useEffect(()=>{
        getAllProduct()
    },[])



    return(
        <>

            <div className="lg:w-6/12 md:w-6/12 sm:w-full text-center w-full flex justify-center items-center flex-col">
            <h2 className=" w-full text-3xl font-semibold my-5">Search your Robot</h2>

            <TextField

                className="w-full"
                id="filled-required"
                label="robo name"
                onChange={(e)=>getAllProduct(e.target.value)}
                variant="filled"
            />


        </div>
            {


                loading ? <Loading/> :


                    <div className="w-full grid  lg:grid-cols-4 md:grid-cols-2 md:gap-2 sm:grid-cols-1 grid-cols-1 gap-4 mt-3">

                        {
                            product.map((item , index)=>{
                                return(
                                    <Card key={item.id}  item={item}/>

                                )
                            })
                        }
                    </div>
            }
        </>
    )

}


export default Product