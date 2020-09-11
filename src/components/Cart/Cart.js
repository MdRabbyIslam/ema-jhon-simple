import React from 'react';
import "./Cart.css"

const Cart = (props) => {
    const cart = props.cart;
    // console.log(cart)
    const total = cart.reduce((total, pro) => {
        // if (pro.quantity === undefined) return total + pro.price;
        return total + (pro.price * pro.quantity);

    }, 0);

    let shipping = 0;
    if (total > 35) {
        shipping = 0;
    }
    else if (total > 15) {
        shipping = 4.99
    }
    else if (total > 0) {
        shipping = 12.99
    }
    // console.log(shipping)
    const tax = Math.round(total / 10);
    const grandTotal = (total + tax + Number(shipping)).toFixed(2)


    return (
        <div>
            <div className="cart-information">

                <h3>Order Summery</h3>
                <h4>Items ordered: {props.cart.length}</h4>
                <p><small>Shipping:	{shipping.toFixed(2)}</small></p>
                <p><small>Total before tax:{total.toFixed(2)}	</small></p>
                <p><small>Estimated Tax:{tax}	</small></p>
                <h3>Total:{grandTotal} </h3>
                {
                    props.children
                }
            </div>


        </div>
    );
};

export default Cart;