import {addToCartItem} from '../../store/cart/cart.action';
import {selectCartLists} from '../../store/cart/cart.selector';
import {useAppDispatch, useAppSelector} from '../../store/hooks/hooks';
import {ProductList} from '../productlists/productlists.component';

const ProductCard = ({
  category,
  image,
  price,
  rating,
  title,
  id,
}: ProductList) => {
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector(selectCartLists);
  const handleAddtoCart = () => {
    dispatch(addToCartItem(cartItems, {title, image, price, id}));
  };

  return (
    <div className="product-card">
      <img src={image} alt={title} className="product-card-image" />
      <span className="product-card-category">{category}</span>
      <h6 className="product-card-title">{title}</h6>
      <div className="product-card-price-wrapper">
        <p className="product-card-price">₹ {price}</p>
        <div className="product-card-rating">
          <div>
            {rating.rate} ({rating.count})
          </div>
          <button
            onClick={handleAddtoCart}
            type="button"
            className=" ml-2 mt-2 text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="carticon">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
              />
            </svg>
            Buy
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
