import React, { useState, useEffect } from 'react';
import { useForm, FormProvider } from "react-hook-form";
import FormInput from './FormInput';
import { commerce } from '../../../lib/commerce';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import FloatingLabel from 'react-bootstrap/FloatingLabel';

const AddressForm = ({ checkoutToken, next }) => {
  const [shippingCountries, setShippingCountries] = useState([]);
  const [shippingCountry, setShippingCountry] = useState('');
  const [shippingSubdivisions, setShippingSubdivisions] = useState([]);
  const [shippingSubdivision, setShippingSubdivision] = useState('');
  const [shippingOptions, setShippingOptions] = useState([]);
  const [shippingOption, setShippingOption] = useState('');


  const methods = useForm();

  const countries = Object.entries(shippingCountries).map(([code, name]) => ({ id: code, label: name }));
  const subdivisions = Object.entries(shippingSubdivisions).map(([code, name]) => ({ id: code, label: name }));
  const options = shippingOptions.map((sO) => ({ id: sO.id, label: `${sO.description} - (${sO.price.formatted_with_symbol})` }))

  const fetchShippingCountries = async (checkoutTokenId) => {
    const { countries } = await commerce.services.localeListShippingCountries(checkoutTokenId)
    setShippingCountries(countries)
    setShippingCountry(Object.keys(countries)[0]);

  }

  const fetchSubdivisions = async (countryCode) => {
    const { subdivisions } = await commerce.services.localeListSubdivisions(countryCode);

    setShippingSubdivisions(subdivisions);
    setShippingSubdivision(Object.keys(subdivisions)[0])
  }

  const fetchShippingOptions = async (checkoutTokenId, country, region = null) => {
    const options = await commerce.checkout.getShippingOptions(checkoutTokenId, { country, region })
    setShippingOptions(options);
    setShippingOption(options[0].id)
  }


  useEffect(() => {
    fetchShippingCountries(checkoutToken.id)
  }, [checkoutToken.id])

  useEffect(() => {
    if (shippingCountry) { fetchSubdivisions(shippingCountry) }
  }, [shippingCountry])


  useEffect(() => {
    if (shippingSubdivision) { fetchShippingOptions(checkoutToken.id, shippingCountry, shippingSubdivision) }
  }, [shippingSubdivision, checkoutToken.id, shippingCountry])
  return (
    <div className='addressForm mt-5'>
      <FormProvider {...methods}>
        <Form onSubmit={methods.handleSubmit((data) => next({ ...data, shippingCountry, shippingSubdivision, shippingOption }))}>

          <Row className="g-2">
            <Col md>
              <FormInput name="firstName" label="First Name" required />
            </Col>
            <Col md>
              <FormInput name="lastName" label="Last Name" required />
            </Col>
          </Row>

          <Row className="g-2">
            <Col md>
              <FormInput name="email" label="Email" required />
            </Col>
            <Col md>
              <FormInput name="phonenumber" label="Phone Number" required />
            </Col>
          </Row>



          <FormInput name="address1" label="Address" required />



          <FormInput name="company" label="Company" required />



          <Row className="g-2">
            <Col md>
              <Form.Select aria-label="Floating label select example" value={shippingCountry} onChange={(e) => setShippingCountry(e.target.value)} fullwidth="true">
                {

                  countries.map((country) => (
                    <option key={country.id} value={country.id}>
                      {country.label}
                    </option>
                  ))
                }
              </Form.Select>
            </Col>
            <Col md>
              <Form.Select aria-label="Floating label select example" value={shippingOption} onChange={(e) => setShippingOption(e.target.value)} fullwidth="true">
                {

                  options.map((option) => (
                    <option key={option.id} value={option.id}>
                      {option.label}
                    </option>
                  ))
                }
              </Form.Select>
            </Col>
          </Row>


          <Row className="g-2 mt-3">
            <Col md>
              <FormInput name="city" label="City" required />
            </Col>
            <Col md>
              <FloatingLabel controlId="floatingSelect" label="Contry/Region">
                <Form.Select aria-label="Floating label select example" value={shippingSubdivision} onChange={(e) => setShippingSubdivision(e.target.value)} fullwidth="true">
                  {

                    subdivisions.map((subdivision) => (
                      <option key={subdivision.id} value={subdivision.id}>
                        {subdivision.label}
                      </option>
                    ))
                  }
                </Form.Select>
              </FloatingLabel>
            </Col>
            <Col md>
              <FormInput name="zip" label="Postal Code" required />
            </Col>
          </Row>

     

          <div className='d-flex justify-content-end'>
            <button className="saveContinue" type="submit">SAVE & CONTINUE</button>
          </div>

        </Form>
      </FormProvider>
    </div>
  )
}

export default AddressForm