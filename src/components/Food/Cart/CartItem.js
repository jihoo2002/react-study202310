import React, { useContext } from 'react';

import styles from './CartItem.module.scss';
import CartContext from '../../../store/cart-context';

const CartItem = ({ cart }) => {
  const { name, price, amount } = cart;

  const { addItem } = useContext(CartContext); //그럼 이쪽에서 addItem 쓸수있음

  const {
    'cart-item': cartItem,
    summary,
    price: priceStyle,
    amount: amountStyle,
    actions,
  } = styles;
  const formatPrice = new Intl.NumberFormat('ko-KR').format(price);

  //+ 버튼 누르면 무조건 amount는 하나다!!!!!
  const cartAddItemHandler = () => {
    addItem({ ...cart, amount: 1 }); //기존의 cart 배열을 뿌린다음 amount의 값만 1로 고정시킨다. 그럼 +를 누를 때 1씩
  };

  return (
    <li className={cartItem}>
      <div>
        <h2>{name}</h2>
        <div className={summary}>
          <span className={priceStyle}>{formatPrice}</span>
          <span className={amountStyle}>x {amount}</span>
        </div>
      </div>
      <div className={actions}>
        <button>−</button>
        <button onClick={cartAddItemHandler}>+</button>
      </div>
    </li>
  );
};

export default CartItem;
