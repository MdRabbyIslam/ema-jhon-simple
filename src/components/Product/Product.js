import React from 'react';
import "./Product.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons'


const Product = (props) => {
    const { product } = props;
    const { features } = product;
    return (
        <div className="products">
            {
                // console.log(product)
            }
            <div className="product-photo">
                <img className="product-img" src={product.img} alt="" />
            </div>
            <div className="product">
                <h3 className="products-name">{product.name}</h3>
                <br />
                <h5>by: {product.seller}</h5>
                <div className="product-information">
                    <div className="price-part">
                        <br />
                        <h4>${product.price}</h4>
                        <br />
                        <h5>only {product.stock} left in stock - order soon</h5>
                        <br />
                        <button onClick={() => props.handleAddCart(product)} className="add-to-cart-btn"><FontAwesomeIcon icon={faShoppingCart} />  Add to cart</button>
                    </div>
                    <div className="feature-part">
                        <br /><br />
                        <h3>Features</h3>
                        <br />
                        <ul className="features-ul">
                            {
                                features.map(singleFeature => <li>{singleFeature.description}: {singleFeature.value}</li>)
                            }
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Product;