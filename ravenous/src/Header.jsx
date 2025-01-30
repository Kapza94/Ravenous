// import React from "react";
import "./header.css";
import BlurText from "./BlurText";

const Header = () => {
  const handleAnimationComplete = () => {
    console.log("Animation completed!");
  };
  return (
    <>
      <div className="header-container img-bckround flex flex-col justify-between items-center pb-36 pt-36">
        <div className="heading-block">
          <BlurText
            text="Ravenous"
            delay={300}
            animateBy="letters"
            direction="top"
            onAnimationComplete={handleAnimationComplete}
            className="text-8xl text-white font-extrabold"
          />
        </div>
        <div className="search-block">
          <input type="text" className="input-field mr-5 rounded-sm drop-shadow-md" id="biz-id" />
          <input type="text" className="input-field rounded-sm drop-shadow-md" id="where-id" />
        </div>
        <div className="btn-block">
          <button className="btn bg-white ">Search</button>
        </div>
      </div>
    </>
  );
};

export default Header;
