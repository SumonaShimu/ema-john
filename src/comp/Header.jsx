import React from 'react';
import './Header.css'
const Header = () => {
    return (
        <div className='header'>
            <img src="../public/images/logo.svg" alt="" />
            <div style={{display:'flex',gap:'20px',textDecoration:'none'}}>
                <a href="/Order">Order</a>
                <a href="/Review">Review</a>
                <a href="/Inventory">Inventory</a>
                <a href="/Login">Login</a>
            </div>
        </div>
    );
};

export default Header;