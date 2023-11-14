//여기서 담아서 Modal에 보낼 것임.
import React from 'react';
import CartModal from '../../UI/Modal/CartModal';
import styles from './Cart.module.scss';

const DUMMY_CART = [
  {
    id: 'c1',
    name: '스시',
    amount: 2,
    price: 46000,
  },
  {
    id: 'c2',
    name: '띠드버거',
    amount: 1,
    price: 12000,
  },
];

//만약 이름이 동일하지 않은 경우 '문자열' : 변수 이름 요렇게 사용해야함
const Cart = ({ onClose }) => {
  const {
    'cart-items': cartItemStyle,
    total,
    actions,
    'button--alt': btnAlt,
    button,
  } = styles;

  return (
    <CartModal onClose={onClose}>
      {/* 주문내역*/}
      <ul className={cartItemStyle}>
        {DUMMY_CART.map((cartItem) => (
          <li key={cartItem.id}>{cartItem.name}</li>
        ))}
      </ul>
      <div className={total}>
        <span>주문 총액</span>
        <span>50,000</span>
      </div>
      <div className={actions}>
        <button
          className={btnAlt}
          onClick={onClose}
        >
          닫기
        </button>
        <button className={button}>주문</button>
      </div>
    </CartModal>
  );
};

export default Cart;
