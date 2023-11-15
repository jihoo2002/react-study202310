//여기서 담아서 Modal에 보낼 것임.
import React, { useContext } from 'react';
import CartModal from '../../UI/Modal/CartModal';
import styles from './Cart.module.scss';
import Cartcontext from '../../../store/cart-context';
import CartItem from './CartItem';

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

  const { items, totalPrice } = useContext(Cartcontext);

  return (
    <CartModal onClose={onClose}>
      {/* 주문내역*/}
      <ul className={cartItemStyle}>
        {items.map((cartItem) => (
          <CartItem
            key={cartItem.id}
            cart={cartItem}
          /> //map에서 객체가 전달될 때마다 컴포넌트가 반복됨
        ))}
      </ul>
      <div className={total}>
        <span>주문 총액</span>
        <span>{new Intl.NumberFormat('ko-KR').format(totalPrice)}원</span>
      </div>
      <div className={actions}>
        <button
          className={btnAlt}
          onClick={onClose}
        >
          닫기
        </button>
        {items.length > 0 && <button className={button}>주문</button>}
      </div>
    </CartModal>
  );
}; // 아이템이 하나도 없다면 주문 버튼이 보이지 않게 하기

export default Cart;
