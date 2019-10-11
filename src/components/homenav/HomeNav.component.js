import React from 'react';
import { Link } from 'react-router-dom';
import './HomeNav.styles.scss';

const HomeNav = () => (
  <nav className="home-nav">
    <div className='home-nav__brand'>
      3Sixty
    </div>
    <div className='home-nav__auth-buttons'>
      <span className='login'>
        <Link to='/signin'>Login</Link>
      </span>
      <span className='signup'>
        <Link to='/signup'>Signup</Link>
      </span>
    </div>
  </nav>
);

export default HomeNav;
