import React from 'react';
import AllProd from './AllProd';
import Cart from './Cart';

import './Shop.css'
const Shop = () => {
    return (
        <div className='shopping-container'>
           <AllProd></AllProd>
            <Cart></Cart>
        </div>
        
    );
};

export default Shop;