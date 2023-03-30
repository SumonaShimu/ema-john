import React, { useEffect, useState } from 'react';
import Product from './Product';
import './AllProd.css'
const AllProd = () => {
    const [products,setProducts]=useState([])
    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])
    return (
        <div className='products-container'>
            {products.map(product=><Product data={product}></Product>)}
        </div>
    );
};

export default AllProd;