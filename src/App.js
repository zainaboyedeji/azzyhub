import React,{ useEffect, useState } from 'react';
import { Cart } from './components';
import CheckoutView from './views/CheckoutView/CheckoutView';
import { commerce } from './lib/commerce';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LandingPage, ProductDescription, NotFoundPage } from './views';
import SubscribeModal from "./components/Modals/SubscribeModal/SubscribeModal";

const App = () => {
  const [cart, setCart] = useState({});
  const [order, setOrder] = useState({});
  const [product, setProduct] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();
    setProducts(data);
  }

  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve())
  }


  const handleUpdateCartQty = async (productId, quantity) => {
    const { cart } = await commerce.cart.update(productId, { quantity });
    setCart(cart)
  }

  const fetchSingleProduct = async (productId) => {
    const data = await commerce.products.retrieve(productId);
    setProduct(data)
  }

  const handleRemovefromCart = async (productId) => {
    const { cart } = await commerce.cart.remove(productId);

    setCart(cart)
  }


  const handleEmptyCart = async () => {
    const { cart } = await commerce.cart.empty();
    window.location.reload(false)
    setCart(cart)
  }

  const refreshCart = async () => {
    const newCart = await commerce.cart.refresh();
    setCart(newCart)
  }

  const handleCaptureCheckout = async (checkoutTokenId, newOrder) => {
    try {
      const incomingOrder = await commerce.checkout.capture(checkoutTokenId, newOrder);
      setOrder(incomingOrder)
      refreshCart()
    } catch (error) {
      setErrorMessage(error.data.error.message)

    }
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
    fetchCart();
    fetchProducts();
  }, [])


  return (
    <>
      <SubscribeModal /> 
      <Router>
        <Routes>
          <Route index path="/" element={<LandingPage />} />
          <Route path="/product-description/:productId" element={<ProductDescription fetchSingleProduct={fetchSingleProduct} product={product} handleAddToCart={handleAddToCart} products={products} />} />
          <Route path="/cart" element={<Cart cart={cart} handleEmptyCart={handleEmptyCart} handleRemovefromCart={handleRemovefromCart} handleUpdateCartQty={handleUpdateCartQty} />} />
          <Route path="/checkout" element={<CheckoutView cart={cart} order={order} onCaptureCheckout={handleCaptureCheckout} error={errorMessage} />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Router>
    </>
  )
}

export default App