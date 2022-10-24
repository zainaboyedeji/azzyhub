import React from 'react'

const OrderSummary = ({ cart }) => {
    return (
        <div className='mainCheckout'>
            <h5  className='appBold appDivider pb-3'>
                SUMMARY
            </h5>

            <div>
                {
                    cart?.line_items.map((item) => (
                        <div className="d-flex mt-3" key={item.name}>
                            <img className="sumImage" src={item.image.url} alt={item.name} />
                            <div>
                                <span>{item.name}</span>
                                <div>
                                    <div>Price</div>
                                    <div className='appBold'>{item.line_total.formatted_with_symbol}</div>
                                </div>
                                <p>Color</p>
                            </div>

                        </div>
                    ))
                }

            </div>

            <div className='mt-5'>
                <div className='d-flex w-100 justify-content-between appDivider'>
                    <p className='appBold'>Subtotal</p>
                    <p className='appBold'>{cart.subtotal.formatted_with_symbol}</p>
                </div>
                <div className='d-flex w-100 justify-content-between appDivider pt-3'>
                    <p className='appBold'>Shipping</p>
                    <p className='appBold'>{cart.subtotal.formatted_with_symbol}</p>
                </div>
                <div className='d-flex w-100 justify-content-between appDivider pt-3'>
                    <p className='appBold'>Total</p>
                    <p className='appBold'>{cart.subtotal.formatted_with_symbol}</p>
                </div>
            </div>

        </div>
    )
}

export default OrderSummary