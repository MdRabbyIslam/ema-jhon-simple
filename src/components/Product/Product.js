import React from 'react';
import "./Product.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';


const Product = (props) => {
    // console.log(props)
    const { product } = props;
    const { features, name, img, stock, price, key } = product;

    return (
        <div className="products">
            <div className="product-photo">
                <img className="product-img" src={img} alt="" />
            </div>
            <div className="product">
                <h3 className="products-name"><Link to={'/product/' + key}>{name}</Link></h3>
                <br />
                <h5> by: {product.seller}</h5>
                <div className="product-information">
                    <div className="price-part">
                        <br />
                        <h4>${price}</h4>
                        <br />
                        <h5>only {stock} left in stock - order soon</h5>
                        <br />
                        {props.showingButton && <button onClick={() => props.handleAddCart(product)} className="add-to-cart-btn"><FontAwesomeIcon icon={faShoppingCart} />  Add to cart</button>}                    </div>
                    <div className="feature-part">
                        <br /><br />
                        <h3>Features</h3>
                        <br />
                        <ul className="features-ul">
                            {
                                features.map(singleFeature => <li key={features.indexOf(singleFeature)}>{singleFeature.description}: {singleFeature.value}</li>)
                            }
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Product;