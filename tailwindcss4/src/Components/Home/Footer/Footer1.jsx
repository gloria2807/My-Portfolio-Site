import React from 'react';
import './Footer.css';
import dividerImg from './wavesNegative.svg';

const Footer = () => {
  return (
    <div className="footer-container">
        <div className="footer-parent">
            <img src={dividerImg}
            alt='no internet connection' />
            </div>
    </div>
  )
}

export default Footer