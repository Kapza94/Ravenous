// import React from "react";
import PropTypes from "prop-types";
import Business from "./Business";

const BusinessList = ({ businesses }) => {
  return (
    <div className="grid grid-cols-3 gap-4">
      {businesses.map((biz) => (
        <Business key={biz.name} {...biz} />
      ))}
    </div>
  );
};

BusinessList.propTypes = {
  businesses: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      address: PropTypes.string.isRequired,
      city: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
      reviewCount: PropTypes.number.isRequired,
      postcode: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default BusinessList;
