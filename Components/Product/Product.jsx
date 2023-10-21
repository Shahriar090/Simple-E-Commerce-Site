import React from 'react';
import './Product.css'

const Product = ({product}) => {
    console.log(product)
    const {img, seller, quantity, price, name,ratings} = product;
    return (
        <div className='product-container'>
            <img src={img} alt="ProductImg" />
           <div className="product-info">
           <h3 className='product-name'>Product Name : {name}</h3>
            <h3>Manufacturer : {seller}</h3>
            <h4>Quantity : {quantity}</h4>
            <h4>Price : ${price}</h4>
            <h4>Ratings : {ratings}/5</h4>
           </div>
            <button className='btn-add-cart'>Add To Cart</button>
            
        </div>
    );
};

export default Product;