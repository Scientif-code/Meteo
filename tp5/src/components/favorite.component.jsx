import React from 'react';
import '../assets/style/favorite.style.css';
import starOffImg from '../assets/images/star_off.png';
import starOnImg from '../assets/images/star_on.png';

const Favorite = ({ isSelected, onClick }) => {
  return (
    <img
      src={isSelected ? starOnImg : starOffImg}
      alt="Favorite"
      onClick={onClick}
      style={{ cursor: 'pointer' }}
    />
  );
};

export default Favorite;
