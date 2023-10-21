import React from 'react';
import './Cart.css'
import {  FaArrowRight, FaRegTrashAlt } from 'react-icons/fa';


const Cart = ({cart}) => {
    console.log(cart)
   let total = 0;
   for(const product of cart){
    total = total + product.price;
   }
    return (
        <div>
           <div className="order-summary">
           <h1>Order summary</h1>
            <h4>Selected Items : {cart.length}</h4>
            <h4>Total Price : ${total}</h4>
            <h4>Total Shipping Charge : </h4>
            <h4>Tax : </h4>
            <h3>Grand Total : </h3>

            <div className='order-cart-buttons'>
            <button id='btn-clear-cart'>Clear Cart <span><FaRegTrashAlt></FaRegTrashAlt></span></button>
            <button id='btn-review-order'>Review Order <span><FaArrowRight></FaArrowRight></span></button>
           </div>
           </div>
           
        </div>
    );
};

export default Cart;