import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from '@mui/material/Button';
import { Elements, CardElement, ElementsConsumer } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';


const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY);

const PaymentForm = ({ checkoutToken, nextStep, backStep, shippingData, onCaptureCheckout }) => {
  const handleSubmit = async (event, elements, stripe) => {
    event.preventDefault();

    if (!stripe || !elements) return;

    const cardElement = elements.getElement(CardElement);

    const { error, paymentMethod } = await stripe.createPaymentMethod({ type: 'card', card: cardElement });

    if (error) {
      console.log('[error]', error);
    } else {
      const orderData = {
        line_items: checkoutToken.live?.line_items,
        customer: { firstname: shippingData.firstName, lastname: shippingData.lastName, email: shippingData.email },
        shipping: { name: 'International', street: shippingData.address1, town_city: shippingData.city, county_state: shippingData.shippingSubdivision, postal_zip_code: shippingData.zip, country: shippingData.shippingCountry },
        fulfillment: { shipping_method: shippingData.shippingOption },
        payment: {
          gateway: 'stripe',
          stripe: {
            payment_method_id: paymentMethod.id,
          },
        },
      };

      onCaptureCheckout(checkoutToken.id, orderData);

      nextStep();
    }
  };

  return (
    <div>
      <div className='pb-3 mt-5 d-flex justify-content-between appDivider'>
        <h6 className='appBold'>Subtotal</h6>
        <h6 className='appBold'>{checkoutToken?.subtotal?.formatted_with_symbol}</h6>
      </div>

      <div className='pb-3 pt-3 d-flex justify-content-between appDivider'>
        <h6 className='appBold'>Shipping</h6>
        <h6>Shipping is based on your location</h6>
      </div>
      <div className='mt-3'>
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label className='appBold'>Delivery Note</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>
        </Form>
      </div>

      <div className='mt-5'>
        <Elements stripe={stripePromise}>
          <ElementsConsumer>{({ elements, stripe }) => (
            <form onSubmit={(e) => handleSubmit(e, elements, stripe)}>
              <CardElement />
              <br /> <br />
              <div className='d-flex justify-content-between'>
                <Button className='paymentBack' onClick={backStep}>Back</Button>
                <Button className='paymentPay' type="submit" disabled={!stripe} color="primary">
                  Pay {checkoutToken?.subtotal?.formatted_with_symbol}
                </Button>
              </div>
            </form>
          )}
          </ElementsConsumer>
        </Elements>
      </div>
    </div>
  );
};

export default PaymentForm;