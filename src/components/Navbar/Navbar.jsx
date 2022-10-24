import React from 'react'
import { Link } from "react-router-dom"
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
import './navbar.scss'
import ShoppingBagImg from '../../assets/images/shopping-bag.png'
import LikeImg from '../../assets/images/like.png'
import UserImg from '../../assets/images/user.png'
import searchImg from "../../assets/images/search.png"



const Navbar = ({ totalItems }) => {
  return (
    <>
      <div className='d-flex navbar'>
        <div className='navbarInput'>
          <InputGroup className="mb-3">
            <Form.Control
              placeholder="Search..."
              aria-label="Search"
              aria-describedby="basic-addon2"
            />
            <InputGroup.Text id="basic-addon2"><img src={searchImg} alt="searchImg"/></InputGroup.Text>
          </InputGroup>
        </div>

        <Link to="/" className='navbarName'>
          <h6>A Z Z Y   H U B</h6>
        </Link>

        <div className='d-flex navbarIcons'>
          <Link to=""><img className="iconStyle" src={UserImg} alt="user" /></Link>
          <Link to=""><img className="iconStyle" src={LikeImg} alt="like" /></Link>
          <Link to="/cart" className="bagStyle"><img src={ShoppingBagImg} alt="shopping-bag" /><span>{!totalItems ? "0" : totalItems}</span></Link>
        </div>


      </div>

      <div className='d-flex w-100 justify-content-between navbarLinks'>
        <Link to="/">ALL</Link>
        <Link to="/">MAIN CHARACTER ENERGY</Link>
        <Link to="/">BESTSELLERS</Link>
        <Link to="/">JEWELLERY & WATCHES</Link>
        <Link to="/">BAGS & PURSES</Link>
        <Link to="/">SHOES</Link>
        <Link to="/">ACCESORIES</Link>
        <Link to="/">CLOTHING</Link>
      </div>

    </>
  )
}

export default Navbar