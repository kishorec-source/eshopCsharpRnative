import { useSelector, useDispatch } from 'react-redux';

const CartScreen = () => {
    const cart = useSelector(state => state.cart);
    const dispatch = useDispatch();

    const addToCart = (product) => {
        dispatch({ type: 'ADD_TO_CART', payload: product });
    };

    return (
    // Render cart items
  );
};

// ===========================================================

// CartScreen.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBasket, addItemToBasket } from './actions/basketActions';

const CartScreen = ({ userId }) => {
    const dispatch = useDispatch();
    const basket = useSelector(state => state.basket.basket);

    useEffect(() => {
        dispatch(fetchBasket(userId));
    }, [dispatch, userId]);

    const handleAddItem = (item) => {
        dispatch(addItemToBasket(userId, item));
    };

    return (
    // Render basket items and provide a way to add items to the basket
  );
};
