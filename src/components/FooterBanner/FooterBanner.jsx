import React from 'react'
import CreditCard  from '../../assets/images/credit-card.png'
import FastDelivery  from '../../assets/images/fast-delivery.png'
import HeadPhone  from '../../assets/images/headphones.png'
import "./footerbanner.scss"

const FooterBanner = () => {
  return (
    <div className='d-flex w-100 justify-content-between footerBanner'>
      <div className='bannerDesc'>
        <img src={HeadPhone} alt="headphone"/>
        <h6>CUSTOMER SUPPORT</h6>
        <p>Need Assistance?</p>
      </div>
      <div className='bannerDesc'>
      <img src={CreditCard} alt="creditcard"/>
        <h6>SECURED PAYMENT</h6>
        <p>Safe & Fast</p>
      </div>
      <div className='bannerDesc'>
        <img src={FastDelivery} alt="fastdelivery"/>
        <h6>DELIVERIES AND RETURNS</h6>
        <p>Hassle Free</p>
      </div>
    </div>
  )
}

export default FooterBanner