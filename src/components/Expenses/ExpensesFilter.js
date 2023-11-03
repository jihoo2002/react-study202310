import React from 'react';
import './ExpensesFilter.css';
const ExpensesFilter = ({ onChangeFilter }) => {
  const dropdownChangeHandler = (e) => {
    //selected된 year 값을 Expense에서 사용할 수 있도록
    //올려보내 주세요
    //날짜를 클릭했을 때 그 이벤트 값을 selectedYear에다 넣고
    //onChangeFilter에게 매개값으로 전달
    const selectedYear = e.target.value;
    onChangeFilter(selectedYear);
  };
  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select onChange={dropdownChangeHandler}>
          <option value='2023'>2023</option>
          <option value='2022'>2022</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
          <option value='2019'>2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
