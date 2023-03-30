import React from 'react';
import './Product.css'
const Product = (props) => {
    const {name,img,id,price,stock}=props.data;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <h3>{name}</h3>
        </div>
    );
};

export default Product;