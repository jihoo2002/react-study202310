import React, { useState } from 'react';
import styles from './AddUsers.module.css';
import Card from '../UI/Card';
import Button from '../UI/Button/Button';

const AddUser = () => {
  const [userValue, setUserValue] = useState({
    userName: '',
    age: '',
  });

  const userNameChangeHandler = (e) => {
    setUserValue((prevUserValue) => ({
      ...prevUserValue,
      userName: e.target.value,
    }));
  };

  const ageChangeHandler = (e) => {
    setUserValue((prevUserValue) => ({
      ...prevUserValue,
      age: e.target.value,
    }));
  };

  const userSubmitHandler = (e) => {
    e.preventDefault();

    //유효성 검사 (이름과 나이를 제대로 입력했는 지 검사할 거임)
    if (userValue.userName.trim() === '' || userValue.age.trim() === '') {
      alert('입력을 해주세요');
      return; //공백 제거한 값이 빈 문자열이니?
    }
    if (+userValue.age < 1) return; //string 타입을 넘버로 바꿔주는 +기호
    console.log(userValue);

    setUserValue({
      userName: '',
      age: '',
    });
  };

  return (
    <Card className={styles.input}>
      <form onSubmit={userSubmitHandler}>
        <label htmlFor='username'>이름</label>
        <input
          id='username'
          type='text'
          onChange={userNameChangeHandler}
          value={userValue.userName}
        />
        <label htmlFor='age'>나이</label>
        <input
          id='age'
          type='number'
          onChange={ageChangeHandler}
          value={userValue.age}
        />
        <Button type='submit'>가입하기</Button>
      </form>
    </Card>
  );
};

export default AddUser;
