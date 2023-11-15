import React, { useContext, useEffect, useState } from 'react';

import styles from './HeaderCartButton.module.scss';

import CartIcon from '../Cart/CartIcon';
import CartContext from '../../../store/cart-context';

const HeaderCartButton = ({ onShow }) => {
  //bump 애니메이션을 제어하는 상태변수
  const [isBump, setIsBump] = useState(false);

  const { button, icon, badge, bump } = styles;

  const { items } = useContext(CartContext);

  const numberOfCart = items.reduce((accum, item) => {
    return accum + item.amount; //상품의 양만큼 누적 연산
  }, 0); //콜백함수(2개)와 0을 줌 ,

  useEffect(() => {
    if (items.length === 0) return; //상품 수가 0개 라면 애니메이션 금지
    console.log('useEffect in CartBtn!');
    setIsBump(true);

    //애니메이션 시간이 300밀리초니까 그 시간이 지나면 클래스를 제거
    const timer = setTimeout(() => {
      setIsBump(false);
    }, 300); //bump가 계속 유지를 하고 있으면 애니메이션 실행이 안되기 때문에
    return () => {
      clearTimeout(timer);
    };
  }, [items]); //배열을 주지 않으면 최조 랜더링시 딱 한번 실행된다.
  //아이템에 변화가 있을 때마다 setIsBump가 true로 !

  return (
    <button
      className={`${button} ${isBump ? bump : ''}`} //클래스 이름 두개일때 백틱과 달러로 표현
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
