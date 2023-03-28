import React from 'react';
import "./banner.scss";
import DeliveryBanner from "../../assets/images/freedeliverybanner.gif";
import azzyhubBanner from "../../assets/images/azzyhubBanner.jpg";

const Banner = () => {
  return (
   <>
    {/* <div className='appBanner'>
     <h6> SEE UPDATES ON OUR REST OF NIGERIA DELIVERY TARIFFS</h6>
     </div> */}
      <div className='deliveryBanner'>
        <img src={DeliveryBanner} alt="deliverybanner"/>
      </div>
      <div className='azzyBanner'>
        <img src={azzyhubBanner} alt="azzyhubBanner"/>
      </div>
   
   </>
  )
}

export default Banner;