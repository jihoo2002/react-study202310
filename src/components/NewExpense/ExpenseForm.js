import React, { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = ({ onSaveExpense, onToggle }) => {
  const [userInput, setUserInput] = useState({
    title: '',
    price: '',
    date: '',
  });

  const titleChangeHandler = (e) => {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        title: e.target.value,
      };
    });
  };

  const priceChangeHandler = (e) => {
    setUserInput({
      ...userInput,
      price: e.target.value,
    });
  };

  const dateChangeHandler = (e) => {
    setUserInput({
      ...userInput,
      date: e.target.value,
    });
  };

  const formSubmitHandler = (e) => {
    e.preventDefault(); // submit 차단

    const newExpense = {
      title: userInput.title,
      price: +userInput.price, //number타입은 + 붙이면 정수로 변환 가능
      date: new Date(userInput.date),
    };

    onSaveExpense(newExpense);

    // 입력창 리셋
    setUserInput({
      title: '',
      price: '',
      date: '',
    });
    onToggle(); //등록이 완료되고 난후 등록 창이 자동으로 닫히게 함
  };

  const cancleInsertHandler = () => {
    console.log('취소 버튼 누름');
    onToggle();
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input
            type='text'
            onChange={titleChangeHandler}
            value={userInput.title}
          />
        </div>
        <div className='new-expense__control'>
          <label>Price</label>
          <input
            type='number'
            min='100'
            step='100'
            onChange={priceChangeHandler}
            value={userInput.price}
          />
        </div>
        <div className='new-expense__control'>
          <label>Date</label>
          <input
            type='date'
            min='2019-01-01'
            max='2025-12-31'
            onChange={dateChangeHandler}
            value={userInput.date}
          />
        </div>
      </div>
      <div className='new-expense__actions'>
        <button
          type='button'
          onClick={cancleInsertHandler}
        >
          cancel
        </button>
        <button type='submit'>Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
