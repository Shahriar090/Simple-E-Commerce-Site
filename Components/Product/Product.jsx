import React from 'react';
import './Product.css'

const Product = ({product}) => {
    console.log(product)
    const {img, seller, quantity, price, name} = product;
    return (
        <div className='product-container'>
            <img src={img} alt="ProductImg" />
            <h3>Product Name : {name}</h3>
            <h3>Manufacturer : {seller}</h3>
            <h4>Quantity : {quantity}</h4>
            <h4>Price : {price}</h4>
            <button className='btn-add-cart'>Add To Cart</button>
            
        </div>
    );
};

export default Product;