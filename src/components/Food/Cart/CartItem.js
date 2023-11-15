import React, { useContext } from 'react';

import styles from './CartItem.module.scss';
import CartContext from '../../../store/cart-context';

const CartItem = ({ cart }) => {
  //상품 객체 자체를 넘기고 있다.
  const { id, name, price, amount } = cart;

  const { addItem, removeItem } = useContext(CartContext); //그럼 이쪽에서 addItem 쓸수있음
  console.log('cart에 아이디가 있니? ', cart);

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

  const cartRemoveItemHandler = () => {
    removeItem(id);
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
        <button onClick={cartRemoveItemHandler}>-</button>
        <button onClick={cartAddItemHandler}>+</button>
      </div>
    </li>
  );
};

export default CartItem;
