import React from 'react';
import styles from './Header.module.scss';
import mealsImage from '../../../assets/meals.jpg';
import HeaderCartButton from './HeaderCartButton';

const Header = ({ onShowCart }) => {
  const { header, 'main-image': mainImage } = styles;
  //변수 선언해서 scss를 담는다. 스타일들이 어떻게 들어가지??
  return (
    <>
      <header className={header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton onShow={onShowCart} />
      </header>
      <div className={mainImage}>
        <img
          src={mealsImage}
          alt='Looks very delicious meals'
        />
      </div>
    </>
  );
};

export default Header;
