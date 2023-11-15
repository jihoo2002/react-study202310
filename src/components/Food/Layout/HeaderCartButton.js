import React, { useContext } from 'react';

import styles from './HeaderCartButton.module.scss';

import CartIcon from '../Cart/CartIcon';
import CartContext from '../../../store/cart-context';

const HeaderCartButton = ({ onShow }) => {
  const { button, icon, badge } = styles;

  const { items } = useContext(CartContext);

  const numberOfCart = items.reduce((accum, item) => {
    return accum + item.amount; //상품의 양만큼 누적 연산
  }, 0); //콜백함수(2개)와 0을 줌 ,
  return (
    <button
      className={button}
      onClick={onShow}
    >
      <span className={icon}>
        <CartIcon />
      </span>
      <span>My Cart</span>
      <span className={badge}>{numberOfCart}</span>
    </button>
  );
};

export default HeaderCartButton;
