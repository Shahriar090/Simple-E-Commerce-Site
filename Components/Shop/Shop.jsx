import React, { useEffect, useState } from 'react';
import './Shop.css'
import Product from '../Product/Product';
import Cart from '../Cart/Cart';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(()=>{
        const url = 'https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json'
        fetch(url)
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])

    const handleAddToCart =(product)=>{
        let newCart = [...cart, product];
        setCart(newCart);
    }
    return (
        <div id='parent'>
           <div className="products">
           {
            products.map(product => <Product
            key={product.id}
            product={product}
            handleAddToCart={handleAddToCart}
            ></Product>)
           }
           </div>

           <div>
           <Cart cart={cart}></Cart>
           </div>
        </div>
    );
};

export default Shop;