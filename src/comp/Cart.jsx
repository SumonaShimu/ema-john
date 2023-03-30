import React from 'react';
import './Cart.css'
const Cart = ({cart}) => {
    const total = Object.values(cart).reduce((t, {price}) => t + price, 0)
    return (
        <div className='cart'>
            <h3>Order Summary</h3>
            <div>
                <p>Total products: {cart.length}</p>
                <p>Price: {total}</p>
            </div>
        </div>
    );
};

export default Cart;