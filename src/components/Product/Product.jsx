import './product.scss'
import {Link} from "react-router-dom";

const Product = ({ product }) => {
  return (
    <Link to={{
      pathname: `/product-description/${product.id}`}} className='appProduct'>
      <img src={product.image.url} alt={product.name} />
      <div className='mt-1 capitalize'>
        {product.name}
      </div>
      <div className='mb-5'>
        {product.price.formatted_with_symbol}
      </div>
    </Link>
  )
};

export default Product