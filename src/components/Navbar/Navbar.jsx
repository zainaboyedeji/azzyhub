import React from 'react'
import { Link } from "react-router-dom"
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
import './navbar.scss'
import ShoppingBagImg from '../../assets/images/shopping-bag.png'
import LikeImg from '../../assets/images/like.png'
import UserImg from '../../assets/images/user.png'
import searchImg from "../../assets/images/search.png"
import GoogleSingleSignOn from "../../components/GoogleSingleSignOn/GoogleSingleSignOn"
import { FiSearch } from "react-icons/fi"
import { TfiUser } from "react-icons/tfi"
import { CgShoppingCart } from "react-icons/cg";

const Navbar = ({ totalItems }) => {
  return (
    <>
      <div className='d-flex navbar w-100 justify-content-between'>
        <div className='d-flex navbarLinks justify-content-evenly'>
          <Link to="/">
            <h3>A Z Z Y   H U B</h3>
          </Link>
          <Link to=""> <p>HOME</p></Link>
          <Link to=""> <p>PRODUCTS</p></Link>
          <Link to="/cart"> <p>BLOG</p></Link>
          <Link to=""> <p>ABOUT US</p></Link>
          <Link to=""> <p>FAQ</p></Link>
          <Link to="/cart"> <p>TERMS AND CONDITIONS</p></Link>
        </div>

        <div className='navbarIcons d-flex justify-content-evenly'>
          <FiSearch />
          <TfiUser />
          <CgShoppingCart />
        </div>
      </div>
    </>
  )
}

export default Navbar