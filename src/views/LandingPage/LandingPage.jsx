import React,{ useEffect, useState } from 'react'
import { Banner, FooterBanner, Navbar, Reviews, CategoriesBanner } from '../../components'
import LatestArrival from '../../components/LatestArrival/LatestArrival'
import {Footer} from "../../components/index"
import { commerce } from '../../lib/commerce'
import BuyNowPayLaterBanner from '../../components/BuyNowPayLaterBanner/BuyNowPayLaterBanner'

const LandingPage = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();
    setProducts(data);
  }

  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve())
  }

  const handleAddToCart = async (productId, quantity) => {
    if (quantity) {
      commerce.cart.add(productId, quantity)
        .then(res => {
          setCart(res.line_items)
          window.alert('Succesful')
          window.location.reload(false)
        })
    } else {
      window.alert('Please Select a Shirt Size')
    }

  }


  useEffect(() => {
    
    fetchProducts();
    fetchCart();
  }, [])


  return (
    <div className="LandingPage">
      <BuyNowPayLaterBanner/>
      <Navbar totalItems={cart?.total_items} />
      <Banner/>
      {/* <CategoriesBanner/> */}
      <LatestArrival products={products} handleAddToCart={handleAddToCart}/>
      <Reviews/>
      <FooterBanner/>
      <Footer/>
    </div>
  )
}

export default LandingPage