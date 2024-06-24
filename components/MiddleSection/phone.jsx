import React from "react";
import "./phone.css"
import phonepic from "../img/phone-copy.webp";
import playstore from "../img/google_play_22.png";
import store from "../img/appstore-copy.webp";

export const Phone = () => {
  return (
    <div className="phone-app">
      <div className="phone-pic">
        <img src={phonepic} alt="" />
      </div>
      <div className="text">
        <h1>
          Learning <span>anytime</span> from anywhere
        </h1>
        <p>
          Increase the mobility level with Eziline Technologies LMS App. Take
          your courses in your pocket and access them whenever you want without
          any limits. Make your learning more engaging and productive using
          modern LMS.
        </p>
        <div className="apps">
          <a href="#"><img src={store} alt="" /></a>
          <a href="#"><img src={playstore} alt="" /></a>
        </div>
      </div>
    </div>
  );
};
