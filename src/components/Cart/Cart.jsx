import React from 'react'
import { Navbar, Footer, } from '../../components/index';
import Table from 'react-bootstrap/Table';
import { Link } from "react-router-dom";
import { BsTrash } from "react-icons/bs";
import "./cart.scss"

const Cart = ({ cart, handleUpdateCartQty, handleRemovefromCart, handleEmptyCart }) => {

    const EmptyCart = () => {
        <h1>
            You have no items in your shopping cart,start adding some!
            <Link to="/">Start adding </Link>
        </h1>
    };

    const FilledCart = () => (
        <div className='d-flex w-100 filledCart'>
            <Table>
                <tbody>
                    {
                        cart?.line_items.map((item) => (
                            <tr key={item.id}>
                                <td className='d-flex'>
                                    <div className='imgProduct'><img src={item.image?.url} alt={item.name} /></div>
                                    <div className='deetProduct'>
                                        <p>{item.name}</p>
                                        <div className="styleProduct">Price:{item.price.formatted_with_code}</div>
                                        <div className="styleProduct">Color:Orange</div>
                                        <div onClick={() => handleRemovefromCart(item.id)} className="trashProduct"><BsTrash />Remove</div>
                                    </div>

                                </td>

                                <td className='cartProduct'>
                                    <button type="button" size="small" onClick={() => handleUpdateCartQty(item.id, item.quantity + 1)}> + </button>
                                    <p className='itemQuantity'>{item.quantity}</p>
                                    <button type="button" size="small" onClick={() => handleUpdateCartQty(item.id, item.quantity - 1)}> - </button>
                                </td>

                            </tr>))}



                </tbody>
            </Table>
            <div className='totalCart'>
                <h5>Summary</h5>
                <div className='mt-5 total d-flex justify-content-between'>
                    <p>Subtotal</p>
                    <p>{cart.subtotal.formatted_with_symbol}</p>
                </div>

                <div className='mt-3 total d-flex justify-content-between'>
                    <p>Total</p>
                    <p>{cart.subtotal.formatted_with_symbol}</p>
                </div>
                <div className='cartButtons'>
                    <div className='mb-2'><Link to="/checkout"> <button>PROCEED TO CHECK OUT</button></Link></div>
                    <button onClick={() => handleEmptyCart(cart.id)}>EMPTY CART</button>
                </div>
            </div>
        </div>
    );

    if (!cart?.line_items) return 'Loading...';
    return (
        <div className='cart'>
            <Navbar />
            <div className='banner'>
                <h6>NEED YOUR ORDER URGENTLY IN LAGOS?OPT FOR SAME OR NEXT DAY DELIVERY IN LAGOS.</h6>
            </div>
            <h1> Your Cart </h1>
            {!cart?.line_items.length ? <EmptyCart /> : <FilledCart />}
            <Footer />
        </div>
    )
}

export default Cart