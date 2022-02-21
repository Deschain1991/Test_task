import React from "react";
import "./Single-product.scss"


const SingleProduct = (props) => {
    return (
        <div className="single-roduct-wrapper">
            <div className="single-product-image">
                <img src={props.image} alt="Product" />
            </div>
            <div className="single-product-info" >
                <div>
                    <h2>{props.name}</h2>
                    <div>{props.comments}</div>
                </div>
                <div>
                    <div>{props.count}</div>
                </div>
            </div>
        </div>
    )
}




export default SingleProduct;

