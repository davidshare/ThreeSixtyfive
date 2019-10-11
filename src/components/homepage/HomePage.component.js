/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Link } from 'react-router-dom';
import HomeNav from '../homenav/HomeNav.component';
import './HomePage.styles.scss';
import CardBox from '../cardBox/CardBox.components';

const HomePage = () => (
  <div className="homepage-container">
    <HomeNav />
    <div className="main">
      <div className="intro-group">
        <h3 className="page-title">
          You can't really manage time, but you can take small steps that count
          in the long run.
        </h3>
        <ul className="features">
          <li className="feature-item">
            <span className="feature-bullets">{'>>'}</span>
            Track your daily activities
          </li>
          <li className="feature-item">
            <span className="feature-bullets">{'>>'}</span>
            Save important notes or code snippets you are likely to use
          </li>
          <li className="feature-item">
            <span className="feature-bullets">{'>>'}</span>
            Keep a diary of your daily activities
          </li>
        </ul>
        <span className="get-started">
          <Link to="signup">Get Started</Link>
        </span>
      </div>
      <div className="card-group">
        <CardBox
          extraClass="top-box"
          title="Track your todos status."
          backgroundClass="bg-top-box"
        />
        <CardBox
          extraClass="left-box"
          title="Jot down reuseable code snippets."
          backgroundClass="bg-left-box"
        />
        <CardBox
          extraClass="right-box"
          title="Jot down your daily activities."
          backgroundClass="bg-right-box"
        />
      </div>
    </div>
  </div>
);

export default HomePage;
