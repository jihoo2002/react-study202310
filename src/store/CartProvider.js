import React, { useReducer } from 'react';
import CartContext from './cart-context';

const defaultState = {
  items: [],
  totalPrice: 0,
};
// 리듀서 함수 정의: 여러가지 복잡한 상태관리를 중앙 집중화
// state: 업데이트 하기 전의 상태값
// action: 어떤 업데이트를 하는지에 대한 정보와 필요값들이 들어있음. -> 상품 객체
const cartReducer = (state, action) => {
  if (action.type === 'ADD') {
    //신규 아이템
    const newCartItem = action.item;
    //기존 장바구니에 등록된 메뉴인지 아닌지에 따라 처리를 다르게 해야할 것 같다.
    const index = state.items.findIndex((item) => item.id === newCartItem.id);
    //기존 아이템
    const existingItems = [...state.items]; //기존 배열을 복사
    const prevCartItem = existingItems[index]; //위에서 찾은 인덱스로 요소를 하나만 지목.
    //state.items라는 배열에서 요소 하나만 지목

    let updatedItem; //기존에 배열 값은 유지하되 새로운 아이템을 추가시켜줘야 한다.

    //id가 일치하는 배열의 인덱스를 index에 저장, 만약 존재하지 않으면 -1을 반환
    if (index === -1) {
      //기존에 있던 상품이 아닌 신규 아이템이라는 소리.

      //상품 추가할때마다 발동하는 함수
      updatedItem = [...state.items, newCartItem]; //초기값에 newCartItem으로 넘어온 배열을 추가함
    } else {
      //기존 모달에 존재하던 아이템임 -> 수량을 1 올려주면 되겠다.
      prevCartItem.amount += newCartItem.amount; //복사된 아이템의 수량을 늘러줌
      //만약 ++이라고 작성한다면 모달에서는 하나씩 수량이 올라가지만 바깥 메인에서는 2개든 3개든 하나씩만 올라간다는 보장이 없다.
      //그래서 +=로 작성하는 게 안전하다.

      //기존 아이템의 amount에다가 새로운 amount
      updatedItem = [...existingItems]; //새롭게 복사 배열을 갱신.
    }

    console.log(updatedItem);
    const updatedPrice =
      state.totalPrice + newCartItem.price * newCartItem.amount;
    return {
      //여기서 리턴된 값이 cartState로 전달된다.
      items: updatedItem, //추가한 상품
      totalPrice: updatedPrice, //상품이 추가될때마다 가격이 올라가야함
    }; // 이 액션에 대한 업데이트된 새로운 상태 반환.
  } else if (action.type === 'REMOVE') {
    //기존 배열을 복사
    const existingItems = [...state.items];
    //지금 제거대상의 인덱스를 찾자.
    const index = existingItems.findIndex((item) => item.id === action.id);
    //제거 대상 아이템을 가져옴
    const delTargetItem = existingItems[index];
    //총액 계산
    const updatePrice = state.totalPrice - delTargetItem.price; //제거된 장바구니 아이템의 가격을 빼주면 됨

    //업데이트 전의 수량이 1이라면 filter로 배열에서 아예 빼버리는 것이 맞다..
    //근데 1보다 크다면 filter로 제거하면 안되고,
    //기존 배열에서 수량만 1 내린채로 업데이트 해야함
    let removedItems;
    if (delTargetItem.amount === 1) {
      removedItems = state.items.filter((item) => item.id !== action.id);
    } else {
      delTargetItem.amount--; //수량을 감소시키는 것은 모달 내부에서만 가능하기에 증감연산자 사용해도 된다.
      removedItems = [...existingItems];
    }
    //filter는 기존의 배열에 id가 일치한다면 배열에서 빼버림
    return {
      items: removedItems,
      totalPrice: updatePrice, //사용자가 취소한 상품의 금액만큼 빼고 남은 금액 전달
    };
  }

  return defaultState;
};

const CartProvider = ({ children }) => {
  // 리듀서 사용
  const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultState);

  // Provider의 value는 실제로 관리할 데이터 객체.
  const cartContext = {
    items: cartState.items, // 장바구니에 담긴 항목 배열
    totalPrice: cartState.totalPrice, //totalPrice를 cartState로 전달된 것을 꺼내야 모달에 표현
    addItem: (item) => {
      // 액션함수는 반드시 무슨 액션을 하는지와 액션에 필요한 값을 전달.
      dispatchCartAction({
        type: 'ADD',
        item: item,
      }); //action으로 넘어감 아이템 하나씩 넘겨오기 때문에 item
    },
    removeItem: (id) => {
      dispatchCartAction({
        type: 'REMOVE',
        id: id,
      });
    },
  };

  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  );
};

export default CartProvider;
