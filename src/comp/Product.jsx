import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
const Product = (props) => {
    const product = props.data;
    const { name, img, id, price, stock, seller } = product;
    const { addtocart } = props;
    return (
        <div className='product' key={id}>
            <img src={img} alt="" />
            <h3>{name}</h3>
            <p>Price: <span>${price}</span>  Stock: <span>{stock}</span></p>
            <button onClick={() => addtocart(product)} style={{ color: 'whitesmoke' }}>
                Add to cart <FontAwesomeIcon icon={faShoppingCart} />
            </button>
        </div>
    );
};

export default Product;