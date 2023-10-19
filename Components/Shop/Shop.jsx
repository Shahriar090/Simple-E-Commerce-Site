import React, { useEffect, useState } from 'react';
import './Shop.css'
import Product from '../Product/Product';

const Shop = () => {
    const [products, setProducts] = useState([]);

    useEffect(()=>{
        const url = 'https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json'
        fetch(url)
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])
    return (
        <div id='parent'>
           <div className="products">
           {
            products.map(product => <Product
            key={product.id}
            product={product}
            ></Product>)
           }
           </div>

           <div className="order-summary">
            <h1>Order sumary here</h1>
           </div>
        </div>
    );
};

export default Shop;