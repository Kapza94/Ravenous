import React from "react";
import PropTypes from "prop-types";
import restaurantsImage from "./assets/steak.jpg";
import "./business.css";

const Business = ({ name, address, category, city, rating, reviewCount, postcode }) => {
  return (
    <div id="business-card" className="main-card">
      <div className="top-card">
        <img
          src={restaurantsImage}
          alt="cover image with search bar beneath"
          className="cover-img"
        />
      </div>
      <div className="bottom-card">
        <h3>{name}</h3>
        <div className="flex justify-between">
          <p>{address}</p>
          <p>{category}</p>
        </div>
        <div className="flex justify-between">
          <p>{city}</p>
          <p>{rating}</p>
        </div>
        <div className="flex justify-between">
          <p>{postcode}</p>
          <p>{reviewCount}</p>
        </div>
      </div>
    </div>
  );
};

Business.propTypes = {
  name: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  reviewCount: PropTypes.number.isRequired,
  postcode: PropTypes.string.isRequired,
};

export default Business;
