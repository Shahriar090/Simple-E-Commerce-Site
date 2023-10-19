import React from 'react';
import './Header.css'
import navImg from '../../src/images/Logo.svg'
import { AiOutlineSearch, } from "react-icons/ai";

const Header = () => {
    return (
        <nav className='header'>
            <div className="nav-img">
                <img src={navImg} alt="" />
            </div>
            <div className="search">
                <input type="search" placeholder='Search For Products & Others' name="nav-search" id="nav-search" />
                <h3 id='nav-search-icon'><AiOutlineSearch></AiOutlineSearch></h3>
            </div>
            <div className="nav-items">
            <ul>
                <li><a href="/order">Order</a></li>
                <li><a href="/order-review">Order Review</a></li>
                <li><a href="/manage-inventory">Manage Inventory</a></li>
                <li><a href="/login">Login</a></li>
            </ul>
            </div>
        </nav>
    );
};

export default Header;