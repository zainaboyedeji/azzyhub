import React, { useState, useEffect } from 'react'
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Typography from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import Button from '@mui/material/Button';
import AddressForm from "./AddressForm";
import PaymentForm from "./PaymentForm"
import { commerce } from "../../../lib/commerce"
import { Link, useNavigate } from "react-router-dom";
import "./styles.css";

const steps = ['SHIPPING ADDRESS', 'PAYMENT']


const Checkout = ({ cart, order, onCaptureCheckout, error }) => {
  const navigate = useNavigate();
  const [activeStep, setActiveStep] = useState(0);
  const [checkoutToken, setCheckoutToken] = useState(null);
  const [shippingData, setShippingData] = useState({});
  const [isFinished, setIsFinished] = useState(false);




  useEffect(() => {
    const generateToken = async () => {
      try {
        const token = await commerce.checkout.generateToken(cart.id, { type: 'cart' })


        setCheckoutToken(token)
      } catch {
        navigate('/')
        console.log(error)

      }
    }

    generateToken()
  }, [cart, error, navigate]);

  const nextStep = () => setActiveStep((prevActiveStep) => prevActiveStep + 1);
  const backStep = () => setActiveStep((prevActiveStep) => prevActiveStep - 1);



  const next = (data) => {
    setShippingData(data);
    nextStep();
  }

  const timeout = () => {
    setTimeout(() => {
      setIsFinished(true)
    }, 3000);
  }


  let Confirmation = () => (order.customer ? (
    <>
      <div>
        <Typography variant="h5">Thank you for your purchase, {order.customer.firstname} {order.customer.lastname}!</Typography>
        <Typography variant="subtitle2">Order ref: {order.customer_reference}</Typography>
      </div>
      <br />
      <Button component={Link} variant="outlined" type="button" to="/">Back to home</Button>
    </>
  ) : (
    <div>
      <CircularProgress />
    </div>
  ));

  if (error) {
    Confirmation = () => (
      <>
        <Typography variant="h5">Error: {error}</Typography>
        <br />
        <Button component={Link} variant="outlined" type="button" to="/">Back to home</Button>
      </>
    );
  }

  const Form = () => activeStep === 0 ? <AddressForm checkoutToken={checkoutToken} next={next} /> : <PaymentForm shippingData={shippingData} checkoutToken={checkoutToken} nextStep={nextStep} backStep={backStep} onCaptureCheckout={onCaptureCheckout} timeout={timeout} />


  return (
        <main className='mainCheckout'>
            <Stepper activeStep={activeStep}>
              {
                steps.map((step) => (
                  <Step key={step}>
                    <StepLabel>{step}</StepLabel>
                  </Step>
                ))
              }

            </Stepper>
            {activeStep === steps.length ? <Confirmation /> : checkoutToken && <Form />}
        </main>
  )
}

export default Checkout