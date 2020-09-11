import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { getDatabaseCart, removeFromDatabaseCart, processOrder } from '../../utilities/databaseManager';
import fakeData from '../../fakeData';
import ReviewItem from '../ReviewItem/ReviewItem';
import Cart from '../Cart/Cart';
import { Link } from 'react-router-dom';
import happyImg from "../../images/giphy.gif"


const Review = () => {
    const [cart, setCart] = useState([]);
    const [placedOrder, setPlacedOrder] = useState(false)
    const removeItems = (productKey) => {
        // console.log(productKey);
        const newCart = cart.filter(pd => pd.key !== productKey)
        setCart(newCart)
        removeFromDatabaseCart(productKey);
    }
    useEffect(() => {
        const savedData = getDatabaseCart();
        const productKeys = Object.keys(savedData);
        const gettingProduct = productKeys.map(key => {
            const product = fakeData.find(pd => pd.key === key);
            product.quantity = savedData[key]
            return product;
        })
        setCart(gettingProduct)
    }, []);

    const handlePlaceOrder = () => {
        setCart([]);
        setPlacedOrder(true)
        processOrder();
    }
    let thankyou;
    if (placedOrder) {
        thankyou = <img src={happyImg} alt="" />
    }

    return (
        <div className="twin-container">
            <div className="products-container">
                <h2 style={{ textAlign: "center" }}>Total Item :  {cart.length}</h2>
                {
                    cart.map(pd => <ReviewItem removeItems={removeItems} key={pd.key} product={pd}></ReviewItem>)
                }
                {
                    thankyou
                }

            </div>
            <div className="cart-container">
                <Cart cart={cart}>

                    <button onClick={handlePlaceOrder} className="orderReviewButton"> Place Order</button>

                </Cart>
            </div>
        </div>
    );
};

export default Review;