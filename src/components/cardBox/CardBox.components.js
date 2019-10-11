import React from 'react';
import './CardBox.styles.scss';
import PropTypes from 'prop-types';

const CardBox = (props) => (
  <div className={`home-card ${props.extraClass}`}>
    <div className='dots'>
    </div>
    <div className='image-box'>
      <div className={`image-container ${props.backgroundClass}`}>
      </div>
      <p>{props.title}</p>
    </div>
  </div>
);

CardBox.propTypes = {
  extraClass: PropTypes.string,
  title: PropTypes.string,
  backgroundClass: PropTypes.string,
};

export default CardBox;
