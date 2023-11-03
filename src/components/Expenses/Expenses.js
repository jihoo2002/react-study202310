import React, { useState } from 'react';
import ExpenseItem from './ExpenseItem';
import './Expenses.css';
import ExpensesFilter from './ExpensesFilter';
import Card from '../UI/Card';
import ExpenseChart from './ExpenseChart';

const Expenses = ({ items }) => {
  console.log('items: ', items);
  // 선택된 연도 상태값 관리
  const [filteredYear, setFilteredYear] = useState(
    new Date().getFullYear().toString()
  );

  // 자식 컴포넌트 ExpenseFilter에 있는 선택 연도를 끌어올리는 함수
  const filterChangeHandler = (selectedYear) => {
    // console.log('Expenses:', selectedYear);
    setFilteredYear(selectedYear); //상태변수는 항상 setter 변수로 바꿔야 한다.
  };

  // ExpenseItem을 동적 렌더링 하기
  const iterateExpenseItem = () => {
    //iterateExpenseItem를 부러면 ExpenseItem 컴포넌트가 호출된다.
    // 자바스크립트 배열의 메서드 map(배열 요소에 적용할 함수 여기서는 item )
    //콜백 함수의 매개값으로 배열의 요소가 하나씩 전달됨.
    //콜백 함수는 배열 요소의 개수만큼 반복됨
    //map의 리턴값 : 함수가 적용된 각 요소가 담긴 새로운 배열이 리턴됨.
    //items의 개수 10 이면 콜백함수 item도 10번 반복
    // return items.map(
    //   (
    //     item //1개일때만 ()괄호 쓰고 두개 이상일때는 쓸 필요는 없다.
    //   ) => (
    //     <ExpenseItem //괄호 쓰는 기준이 뭐지?? ->값이 하나일 때만 ()를 쓴다.
    //       key={item.id}
    //       title={item.title}
    //       price={item.price}
    //       date={item.date}
    //     />
    //   )
    // ); //요소가 담긴 배열이 리턴된다.
    //리턴하는 곳은 아래쪽에    {iterateExpenseItem()} 이쪽이다.
  };
  //filteredYear를 쓰면 값이 변경될 때 그 상태를 리액트에게 알려줄 수 있음

  const filteredItems = items.filter(
    (item) => item.date.getFullYear().toString() === filteredYear
  );
  //조건부 렌더링을 위한 변수
  let expenseContent = <p>아직 등록된 지출이 없습니다.</p>;

  if (filteredItems.length > 0) {
    expenseContent = filteredItems.map(
      (
        item //1개일때만 ()괄호 쓰고 두개 이상일때는 쓸 필요는 없다.
      ) => (
        <ExpenseItem //괄호 쓰는 기준이 뭐지?? ->값이 하나일 때만 ()를 쓴다.
          key={item.id}
          title={item.title}
          price={item.price}
          date={item.date}
        />
      )
    );
  }
  return (
    <Card className='expenses'>
      <ExpensesFilter onChangeFilter={filterChangeHandler} />
      <ExpenseChart expenses={filteredItems} />
      {expenseContent}
    </Card>
  );
};

export default Expenses;
