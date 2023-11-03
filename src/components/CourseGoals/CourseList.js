import React from 'react';
// import './CourseList.css';
import CourseItem from './CourseItem';
import styled from 'styled-components';

const CourseUl = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const CourseList = ({ items, onDelete }) => {
  // Courseul이 ul를 만들어 스타일을 적용함
  return (
    <CourseUl>
      {items.map((item) => {
        return (
          <CourseItem
            key={item.id}
            item={item}
            onDelete={onDelete}
          />
        );
      })}
    </CourseUl>
  );
};

export default CourseList;
