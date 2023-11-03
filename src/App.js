import React, { useState } from 'react';
import './App.css';
import CourseInput from './components/CourseGoals/CourseInput';
import CourseList from './components/CourseGoals/CourseList';

const DUMMY_DATA = [
  {
    id: 'g1',
    text: '리액트 컴포넌트 스타일링 마스터하기',
  },
  {
    id: 'g2',
    text: 'UI 프로그래밍 삽고수되기',
  },
];

const App = () => {
  const [goals, setGoals] = useState(DUMMY_DATA);

  //Input 에게 전달할 함수
  const addGoalHandler = (text) => {
    // console.log('전달받은 텍스트:', text);
    const newGoal = {
      id: Math.random().toString(),
      text: text,
    };

    //상태 변수(배열) 수정
    // setGoals([...goals, newGoal]);
    setGoals((prevGoals) => [...prevGoals, newGoal]); //콜백함수로 썼을 때
  };

  //삭제 이벤트 핸들러를 CourseItem까지 내려보내야 됨.
  const deleteGoalHandler = (id) => {
    // console.log('전달된 id: ', id);
    //삭제 이벤트 하는 방법 1
    // const updateGoals = [...goals]; //상태배열 그대로 복사해서 가져옴
    // const index = updateGoals.findIndex((goal) => goal.id === id);

    // updateGoals.splice(index, 1); //클릭된 해당 배열을 지우기
    //삭제 방법 2
    // const updateGoals = goals.filter((goal) => goal.id !== id);
    setGoals(goals.filter((goal) => goal.id !== id));
  };

  //CourseList 조건부 랜더링 //자바스크립트 객체니까 중괄호를 두개 넣어야 한다.
  let listContent = (
    <p
      style={{
        color: 'red',
        fontSize: '20px',
        textAlign: 'center',
        fontWeight: 'bold',
      }}
    >
      목표를 등록해 주세요!
    </p>
  );
  if (goals.length > 0) {
    listContent = (
      <CourseList
        items={goals}
        onDelete={deleteGoalHandler}
      />
    );
    //props 전달하기 위한 items!
  }

  return (
    <div>
      <section id='goal-form'>
        <CourseInput onAdd={addGoalHandler} />
      </section>
      <section id='goals'>{listContent}</section>
    </div>
  );
};

export default App;
