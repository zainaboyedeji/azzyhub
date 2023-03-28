import React from 'react'
import { Product } from "../index"
import { Link } from "react-router-dom"
import "./latestarrival.scss"

const LatestArrival = ({ products, handleAddToCart }) => {
    return (
        <div className='appFeaturedCollection' >
            <div className='d-flex justify-content-between p-5 appFeaturedCollectionHeader'>
                {/* <h3 className='mb-5 mt-5'>SHOP THE LATEST</h3>
                <Link to="/">View all</Link> */}
                <p>SHOP THE LATEST</p>
                <Link to="/">View all</Link>
            </div>
            <div className="container">
                <div className="row">
                    {
                        products?.map((product) => (
                            <div key={product.id} className="col-sm">
                                <Product product={product} handleAddToCart={handleAddToCart} />
                            </div>
                        ))}
                </div>
            </div>
        </div>
    )
}

export default LatestArrival