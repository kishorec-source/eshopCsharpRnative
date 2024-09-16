import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductDetails } from './api';

const ProductDetails = ({ productId }) => {
    const dispatch = useDispatch();
    const productDetails = useSelector(state => state.products.productDetails);

    useEffect(() => {
        fetchProductDetails(productId).then(data => {
            dispatch({ type: 'SET_PRODUCT_DETAILS', payload: data });
        });
    }, [dispatch, productId]);

    return (
    // Render product details
  );
};

export default ProductDetails;
