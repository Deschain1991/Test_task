import React, { useState } from "react";
import AddProductModal from "../add-product-modal/Add-product-modal";
import "./Product.scss"
import { useSelector } from "react-redux";
import SingleProduct from "../single-product/Single-product";


const Products = (props) => {

    const [modalActive, setModalActive] = useState(false)
    const products = useSelector(state => state.products.items)

    return (
        <div className="products-wrapper">
            <header>
                <button className='open-btn' onClick={() => setModalActive(true)}>Add product</button>
            </header>
            <div className="products-container">
                {products.map(p => (
                    <SingleProduct
                        name={p.name}
                        image={p.image}
                        id={p.id}
                        count={p.count}
                        weight={p.weight}
                        width={p.width}
                        height={p.height}
                        comments={p.comments}
                        key={p.id}
                    />
                ))}
            </div>

            <AddProductModal active={modalActive} setActive={setModalActive}>
            </AddProductModal>
        </div>
    )
}

export default Products