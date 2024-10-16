import React from "react";
import "../assets/Shopping/Shopping.css";

const Shopping = () => {
  return (
      <div className="shopping-container">
        <h2 className="shop-title">
          Why you'll love shopping with us
        </h2>
        <div className="features-container">
          <div className="feature">
            <i className="fas fa-smile"></i>
            <p>Friendly Customer Service</p>
          </div>
          <div className="feature">
            <i className="fas fa-truck"></i>
            <p>7 Days Delivery Available</p>
          </div>
          <div className="feature">
            <i className="fas fa-leaf"></i>
            <p>5 Days Freshness</p>
          </div>
          <div className="feature">
            <i className="fas fa-gift"></i>
            <p>Wide Range Of Gifts</p>
          </div>
        </div>
      </div>
  );
};

export default Shopping;
