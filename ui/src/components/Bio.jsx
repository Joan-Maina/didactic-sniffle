import React from "react";
import "../styles/Bio.css";
function Bio() {
  return (
    <>
      <div className="bio">
        <div className="aboutjoan">
          <h1>Joan Wanini Maina</h1>
          <h3>Software developer</h3>
          <p className="aboutdescription">
            I solve user problems using javascript <br /> All things tech! I
            enjoy talking to computers :)
            <br />I enjoy training too. <br /> We learn best by teaching others.
          </p>
        </div>
        <div className="joanimage">
          <img
            src="https://thejitu.com/wp-content/uploads/2021/10/Joan-Maina.jpg"
            alt="bio photo"
          />
        </div>
      </div>
    </>
  );
}

export default Bio;
