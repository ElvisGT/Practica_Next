import { useState } from 'react';

const initialState = {
  cart: [],
  orderIsOpen: false,
  menuIsOpen: false,
  sumTotal:0
};

const useInitialState = () => {
  const [state, setState] = useState(initialState);

  const addToCart = (payload) => {
    setState(prev => ({
      ...state,
      cart: state.cart.includes(payload) ? state.cart : [...state.cart, payload],
      sumTotal:prev.sumTotal + payload.price
    
    }));
  };

  const removeFromCart = (payload) => {
    setState(prev => ({
      ...state,
      cart: state.cart.filter((items) => items.id !== payload.id),
      sumTotal:Math.max(prev.sumTotal - payload.price, 0)
    }));
  };

  const toggleOrder = () => {
    setState({
      ...state,
      orderIsOpen: !state.orderIsOpen,
    });
  };

  const toggleMenu = () => {
    setState({
      ...state,
      menuIsOpen: !state.menuIsOpen,
    });
  };

 

  return {
    state,
    addToCart,
    removeFromCart,
    toggleOrder,
    toggleMenu,
  };
};

export default useInitialState;
