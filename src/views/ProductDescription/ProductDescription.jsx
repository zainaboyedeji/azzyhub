import React, { useEffect } from 'react';
import { Navbar, Footer, AddReviews, YouMayAlsoLike } from "../../components/index";
import { useParams } from "react-router-dom";
import Dropdown from 'react-bootstrap/Dropdown';
import "./productdescription.scss";
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import ratingsImage from "../../assets/images/ratingsImg.png";
import { MdOutlineHome } from "react-icons/md";
import { AiFillHeart } from "react-icons/ai";
import LikeImg from '../../assets/images/like.png';
import RulerImg from '../../assets/images/ruler.png';

function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

const ProductDescription = ({ handleAddToCart, fetchSingleProduct, product, products }) => {
  const params = useParams();
  const onAddToCart = () => handleAddToCart(params.productId, 1);

  useEffect(() => {
    fetchSingleProduct(params.productId)
  }, [params.productId])

  return (
    <>
      <div className='productDescription'>
        <Navbar />
        <div className='banner'>
          <h6>NEED YOUR ORDER URGENTLY IN LAGOS?OPT FOR SAME OR NEXT DAY DELIVERY IN LAGOS.</h6>
        </div>
        <Stack spacing={2}>
          <Breadcrumbs separator="›" aria-label="breadcrumb">
            <Link>  <MdOutlineHome /></Link>,
            <Link underline="hover" key="1" color="inherit" href="/" onClick={handleClick}>
              {product.name}
            </Link>,
            <Link
              underline="hover"
              key="2"
              color="inherit"
              href="/material-ui/getting-started/installation/"
              onClick={handleClick}
            >
              {product.name}
            </Link>,
          </Breadcrumbs>
        </Stack>
        <div className="productDescriptionMain">
          <div className='d-flex w-100 justify-content-between mainDiv'>
            <div className='smallProductImage'>
              <div>
                <div> <img src={product.image?.url} alt={product.name} /></div>
                <div><img src={product.image?.url} alt={product.name} /></div>
                <div><img src={product.image?.url} alt={product.name} /></div>
              </div>
            </div>
            <div className='mainProductImage'>
              <img src={product.image?.url} alt={product.name} />
            </div>
            <div className='orderSummary'>
              <p>{product.name}</p>
              <div className='reviewDiv d-flex'><img src={ratingsImage} alt="ratingsImg" /> <p>(0 Reviews)</p></div>
              <div className='priceDiv'>
                <p>PRICE</p>
                <div className='boldPrice'>{product.price?.formatted_with_symbol}</div>

              </div>
              <div className='colorsDiv'>
                <label>Select Colors:</label>
                <div className="colorsStyle d-flex flex-wrap mb-1 mt-1">
                  <div className='roundStyle'></div>
                  <div className='roundStyle'></div>
                  <div className='roundStyle'></div>
                </div>
              </div>

              <div className='sizesDiv'>
                <label>Select Sizes:</label>
                <div className="sizesStyle d-flex flex-wrap mb-1 mt-1">
                  <div className='roundStyle'>Small</div>
                  <div className='roundStyle'>Medium</div>
                  <div className='roundStyle'>Large</div>
                </div>
              </div>
              <div className='d-flex w-100 dropSize'>

                <Dropdown>
                  <Dropdown.Toggle variant="success" id="dropdown-basic">
                    1
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">2</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">3</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">4</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                <div className='d-flex justify-content-between addToCartDiv'>
                  <button onClick={onAddToCart}>ADD TO CART</button>
                  <span><AiFillHeart/></span>
                  </div>
                <img src={LikeImg} alt="likeimg" />
              </div>
              <div className='sizeGuide'>
                <img src={RulerImg} alt="ruler" /><span>Size Guide</span>
              </div>
              <div className='mt-5 descDiv'>
                <p>DESCRIPTION</p>
                <div className='descMain'>
                  <h6>{product.description}</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
        <AddReviews />
        <YouMayAlsoLike products={products} />
      </div>
      <Footer />
    </>
  )
}

export default ProductDescription