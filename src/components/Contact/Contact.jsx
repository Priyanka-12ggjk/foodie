import React from 'react';
import './contact.css';

const ContactForm = () => {
  return (
    <div className="container">
      <form action="">
        <div className="row">
          <div className="col col1">
            <label htmlFor="fullName"></label><br />
            <input type="text" placeholder="Enter Your Full Name" id="fullName" />
          </div>
          <div className="col col2">
            <label htmlFor="email"></label><br />
            <input type="text" placeholder="Enter Email" id="email" />
          </div>
        </div>
        <div className="row">
          <div className="col col1">
            <label htmlFor="address"></label><br />
            <input type="text" placeholder="Enter Address" id="address" />
          </div>
          <div className="col col2">
            <label htmlFor="mobile"></label><br />
            <input type="text" placeholder="Enter Mobile Number" id="mobile" />
          </div>
        </div><br />
        <textarea placeholder="Write Your Query"></textarea><br /><br />
        <input type="submit" value="Contact Now" /><br /><br />
      </form>
    </div>
  );
};

export default ContactForm;
