import React from "react";
import "../styles/Blog.css";
function Blog() {
  return (
    <div className="projects">
      <div className="tiles">
        <div className="tileone">
          <h3>
            Nguo e-commerce
            <span class="iconify" data-icon="emojione:womans-clothes"></span>
          </h3>
          <p>
            A website where shoppers can shop clothings at the comfort of their
            home.
          </p>
        </div>
        <div className="tiletwo">
          <h3>
            BikeApp <span class="iconify" data-icon="akar-icons:bicycle"></span>
          </h3>
          <p>
            Bicycles have become more and popular since the 1980's. Not everyone
            is able to own their own bicycles. BikeApp is here to assist such
            people. Want to ride a bicycle from point A to point B and leave it
            there? BikeApp got you!
          </p>
        </div>
        <div className="tilethree">
          <h3>
            Applyjo<span class="iconify" data-icon="eos-icons:job"></span>
          </h3>
          <p>
            Unemployment is a big problem all over the world. Want to look for
            jobs or advertise a job? Applyjo got you! This is my latest project.
            I can't wait to see the end-product.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Blog;
