import React, { useState } from 'react';
import Input from '../../../UI/Input/Input';
import styles from './MealItemForm.module.scss';

const MealItemForm = ({ id, onAddToCart }) => {
  // 수량의 상태를 관리하는 변수. onAddToCart라는 이름의 더미객체가 날라옴
  const [amount, setAmount] = useState(1); //초기 상태 0인 amount를 만들어주자

  // 담기 버튼을 누르면 발동하는 함수.
  const formSubmitHandler = (e) => {
    e.preventDefault(); //일단 submit을 막고 수량을 전달해줘야 한다.
    onAddToCart(amount); // context에게 확정된 수량을 전달해 주자.
  };

  // 수량이 변경될 때마다 발동하는 함수.
  const amountHandler = (amt) => {
    console.log(`선택된 수량: ${amt}`);
    setAmount(amt);
  };

  return (
    <form
      className={styles.form}
      onSubmit={formSubmitHandler}
    >
      <Input
        onAdd={amountHandler}
        label='수량'
        input={{
          id: 'amount_' + id,
          type: 'number',
          min: '1',
          max: '5',
          step: '1',
          defaultValue: '1',
        }}
      />
      <button>담기</button>
    </form>
  );
};

export default MealItemForm;
