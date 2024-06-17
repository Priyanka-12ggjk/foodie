import React from 'react';
import './subscribe.css';

const subscribe = () => {
  return (
    <div className="subscribe-form">
      <div className="left">
        <img src="image1.jpg" alt="Subscription" />
      </div>
      <div className="right">
        <h2>Subscribe For Get Update & Many More</h2>
        <p>
          One in which customers are charged a recurring fee for access to a
          product instead of a one-time expense.
        </p>
        <div className="form">
          <div className="input">
            <label htmlFor="email"></label>
            <input type="email" id="email" placeholder="Enter Email" />
          </div>
          <div className="button">
            <button>Subscribe Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default subscribe;
