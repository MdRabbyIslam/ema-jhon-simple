import React from 'react';
import "./ReviewItem.css"

const ReviewItem = (props) => {
    // console.log(props)
    const { name, img, quantity, price, key } = props.product
    return (

        <div className="review-item" >
            <div className="productInfo">
                <h2 >{name}</h2>
                <br />
                <p>Quantity : {quantity}</p>
                <br />
                <p>Price : {price * quantity}</p>
                <br />
                <button onClick={() => props.removeItems(key)} className="main-btn"> Remove</button>
            </div>
            <div className="photo">
                <img src={img} alt="" />
            </div>

        </div>
    );
};

export default ReviewItem;