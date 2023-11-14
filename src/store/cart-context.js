import React from 'react';

//장바구니에 담기거나 제외되는 항목들을 상태관리하는 컨텍스트
//컨텍스트에 들어가는 초기 객체는 뭘 담을 것인지에 대한 정의.
const cartContext = React.createContext({
  items: [], //장바구니에 담긴 항목 배열
  addItem: (item) => {},
  removeItem: (id) => {}, //함수의 형태다 라는 것만 알려주기 위해
});

export default cartContext;
