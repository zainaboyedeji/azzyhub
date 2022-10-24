import React from 'react'
import {Product} from "../index"
import "./YouMayAlsoLike.scss"

const YouMayAlsoLike = ({ products }) => {
    return (
        <div className='appYouMayAlsoLike p-5' >
            <h6 className='mb-5'>YOU MAY ALSO LIKE</h6>
            <div className="container">
                <div className="row">
                    {
                        products?.map((product) => (
                            <div key={product.id} className="col-sm">
                                <Product product={product}/>
                            </div>
                        ))}
                </div>
            </div>
        </div>
    )
}

export default YouMayAlsoLike