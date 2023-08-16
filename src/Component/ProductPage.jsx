import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react';
import { callAPI } from '../utils/CallApi';

const ProductPage = () => {
    const {id} = useParams();
    const [product,setProduct] = useState(null);

    // how to configure API-related settings and configurations in a JavaScript application.
    // https://medium.com/bb-tutorials-and-thoughts/how-to-make-api-calls-in-react-applications-7758052bf69
    const getProduct = () => {
        callAPI(`data/products.json`)
        .then((productResults)=>{
            setProduct(productResults[id]);
        })
    }

    useEffect(()=>{
        getProduct();
    },[]);

    if (!product?.title) return <h1>Loading Product ...</h1>;

    return ( 
        product && (
            <div className='h-screen bg-amazonclone-background'>
                <div className='min-w-[1000px] max-w-[1500px] m-auto bg-orange-400'>
                    <div className='grid grid-cols-10'>
                        {/* left */}
                        <div className='col-span-3'>
                            <img src={`${product.image}`}/>
                        </div>
                        {/* middle */}
                        <div className='col-span-5'>

                        </div>
                        {/* right */}
                        <div className='col-span-2'>

                        </div>
                    </div>
                </div>
            </div>
        )
    )
}

export default ProductPage