import React from 'react'
import {Product} from "../index"
import "./latestarrival.scss"

const LatestArrival = ({ products, handleAddToCart }) => {
    return (
        <div className='appFeaturedCollection' >
            <h3 className='mb-5 mt-5'>LATEST ARRIVALS</h3>
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