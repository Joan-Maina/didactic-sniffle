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
          </p>
        </div>
        <div className="joanimage">
          <img
            src="https://images.unsplash.com/photo-1640878588131-4a5f39371d0b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80"
            alt="bio photo"
          />
        </div>
      </div>
    </>
  );
}

export default Bio;
