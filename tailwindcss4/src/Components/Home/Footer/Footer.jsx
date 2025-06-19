import React from 'react';
import './Footer.css';
import dividerImg from './wavesNegative.svg';

const Footer = () => {
  return (
    <div className="footer-container">
        <div className="footer-parent 
    transform-[rotate(180deg)]">
            <img src={dividerImg}
            alt='no internet connection' />
            </div>
    </div>
  )
}

export default Footer