import React from 'react'
import { Checkout,OrderSummary,CheckoutFooter } from '../../components'
import { Link } from "react-router-dom";
import './checkoutview.scss'

const CheckoutView = ({ cart, order, onCaptureCheckout, error }) => {
    return (
        <>
        <Link to="/" className='checkoutNav'>
          <h6>A Z Z Y   H U B</h6>
        </Link>
        <div className='d-flex justify-content-between orderBody'>
            <Checkout cart={cart} order={order} onCaptureCheckout={onCaptureCheckout} error={error} />
            <OrderSummary cart={cart}/>
        </div>
        <CheckoutFooter/>
        </>
       
    )
}

export default CheckoutView