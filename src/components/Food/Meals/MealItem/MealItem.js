import React, { useContext } from 'react';
import styles from './MealItem.module.scss';
import MealItemForm from './MealItemForm';
import CartContext from '../../../../store/cart-context';

const MealItem = ({ id, price, description, name }) => {
  //AvailbleMeals에서 전달된 더미 데이터
  // context에서 필요한 데이터 or 함수를 소비하기 위해 꺼내기.
  // addItem -> 장바구니에 상품을 추가하는 함수를 얻어옴.
  const { addItem } = useContext(CartContext); //useContext 를 통해 CartContext안 설정한 데이터를 꺼낼 수 있음 그걸 addItem에다 저장?
  //CartProvider에서 가져온 addItem!
  const addToCartHandler = (amount) => {
    //수량을 누가 주는 거지? mealItemForm에서 !
    const item = {
      id: id,
      name: name,
      price: price,
      amount: +amount, //문자를 숫자형으로 변환
    };
    addItem(item);
  };

  const { meal, description: desc, price: priceStyle } = styles;

  const formatPrice = new Intl.NumberFormat('ko-KR').format(price);

  return (
    <li className={meal}>
      <div>
        <h3>{name}</h3>
        <div className={desc}>{description}</div>
        <div className={priceStyle}>{formatPrice}원</div>
      </div>
      <div>
        <MealItemForm
          id={id}
          onAddToCart={addToCartHandler}
        />
      </div>
    </li>
  );
};

export default MealItem;
