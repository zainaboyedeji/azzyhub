import React from 'react'
import { Link } from "react-router-dom"
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
import { FaWhatsapp, FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa"
import Divider from '@mui/material/Divider'
import "./footer.scss"

const Footer = () => (
  <>
    <div className='footer'>
      <div className='footerInfo d-flex w-100 justify-content-between'>
        <div className='subStyle'>
          <h6>SUBSCRIBE TO OUR NEWSLETTER.</h6>
          <p className='mt-4'>Get all the latest information on events, sales and offers. Sign up for newsletter today.</p>

          <InputGroup className="mb-3 mt-3">
            <Form.Control
              placeholder="Enter Your Email..."
              aria-label="Enter your email"
              aria-describedby="basic-addon2" />
            <InputGroup.Text id="basic-addon2">SUBSCRIBE</InputGroup.Text>
          </InputGroup>
          <div className='footerFa'>
         <Link to=""> <FaFacebookF /></Link>
         <Link to=""><FaInstagram /></Link>
         <Link to=""><FaTwitter /></Link>
         <Link to=""><FaWhatsapp /></Link>
            </div>
        </div>
        <div className='footerList'>
          <h6>PRODUCTS</h6>
          <ul>
            <li>Shoes</li>
            <li>Accessories</li>
            <li>Jewellery</li>
            <li>Bags</li>
          </ul>
        </div>


        <div className='footerList'>
          <h6>INFORMATION</h6>
          <ul>
            <li>About us</li>
            <li>Delivery and Returns</li>
            <li>Contact Us</li>
            <li>FAQ</li>
            <li>Blog</li>
          </ul>
        </div>


        <div className='footerList'>
          <h6>LEGAL</h6>
          <ul>
            <li>Privacy Policy</li>
            <li>Delivery and Returns</li>

          </ul>
        </div>


      </div>
    </div>
    <Divider />
    <div className='copyright'>© Azzyhub. 2022. All Rights Reserved By Zainab Oyedeji</div>
  </>
)

export default Footer