import "./Shop.css";
import React, { useState } from 'react';
import fakeData from "../../fakeData";
import Product from "../Product/Product";
import Cart from "../Cart/Cart";
import { addToDatabaseCart, getDatabaseCart } from "../../utilities/databaseManager";
import { useEffect } from "react";
import { Link } from 'react-router-dom';


const Shop = () => {
    const first10 = fakeData.slice(0, 10);
    const [products, setProducts] = useState(first10);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        const savedData = getDatabaseCart();
        const productKeys = Object.keys(savedData);
        const gettingProduct = productKeys.map(key => {
            const product = fakeData.find(pd => pd.key === key);
            product.quantity = savedData[key]
            return product;
        }, [])
        setCart(gettingProduct)



    }, [])

    const handleAddCart = (product) => {
        const tobeAdded = product.key;
        const sameProduct = cart.find(pd => pd.key === tobeAdded);

        let count = 1;
        let newCart;
        if (sameProduct) {
            count = sameProduct.quantity + 1;
            sameProduct.quantity = count;
            const otherProduct = cart.filter(pd => pd.key !== sameProduct.key);
            newCart = [...otherProduct, sameProduct]
        }
        else {
            product.quantity = 1;
            newCart = [...cart, product]
        }
        setCart(newCart);
        addToDatabaseCart(product.key, count)
    }
    return (
        <div className="twin-container">
            <div className="products-container">
                {
                    products.map(product => <Product showingButton={true} key={product.key} product={product} handleAddCart={handleAddCart}></Product>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}>
                    <Link to="/review">
                        <button className="orderReviewButton">Order Review</button>
                    </Link>
                </Cart>
            </div>
        </div >
    );
};

export default Shop;