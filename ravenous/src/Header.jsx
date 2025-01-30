// import React from "react";
import "./header.css";
import BlurText from "./BlurText";
import ShinyText from "./ShinyText";

const Header = () => {
  const handleAnimationComplete = () => {
    console.log("Animation completed!");
  };

  return (
    <>
      <div className="header-container img-bckround flex flex-col justify-between items-center pb-36 pt-36">
        <div className="blurred-background"></div>
        <div className="heading-block">
          <BlurText
            text="Ravenous"
            delay={200}
            animateBy="letters"
            direction="top"
            onAnimationComplete={handleAnimationComplete}
            className="text-8xl text-white font-extrabold tracking-wide"
          />
        </div>
        <div className="filter-container">
          <div className=" bordered flex justify-around">
            <div className=" flex justify-center items-center flex-col">
              <h3 className="filter-text text-white">Best</h3>
              <h3 className="filter-text text-white">Match</h3>
            </div>
            <div className=" flex justify-center items-center flex-col">
              <h3 className="filter-text text-white">Highest</h3>
              <h3 className="filter-text text-white">Rated</h3>
            </div>
            <div className=" flex justify-center items-center flex-col">
              <h3 className="filter-text text-white">Most</h3>
              <h3 className="filter-text text-white">Reviewed</h3>
            </div>
          </div>
        </div>
        <div className="search-block">
          <input
            type="text"
            placeholder="Search Businesses?"
            className="input-field mr-5 rounded-2xl drop-shadow-md pl-4 pr-40 pt-2 pb-2 bg-slate-200 outline-none"
            id="biz-id"
          />
          <input
            type="text"
            placeholder="Where?"
            className="input-field rounded-2xl drop-shadow-md pl-4 pr-40 pt-2 pb-2 bg-slate-200 outline-none"
            id="where-id"
          />
        </div>
        <div className="btn-block">
          <button className="bg-white pl-10 pr-10 pt-1 pb-1 rounded-lg">
            {" "}
            <ShinyText text="Search" disabled={false} speed={5} className="bg-white " />
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;
