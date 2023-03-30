import React, { useEffect, useState } from 'react';
import Product from './Product';
import Cart from './Cart';
import './Shop.css'
import { addToDb } from '../../public/utilities/fakedb';

const Shop = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    const [cart,setCart]=useState([]);

    const addtocart = (product) => {
        const newCart=[...cart,product];
        setCart(newCart);
        addToDb(product.id);
    }
    return (
        <div className='shopping-container'>
            <div className='products-container'>
                {products.map(product => <Product data={product} key={product.id} addtocart={addtocart}></Product>)}
            </div>
            <Cart cart={cart}></Cart>
        </div>

    );
};

export default Shop;