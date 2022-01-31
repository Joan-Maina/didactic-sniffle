import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Bio from "./components/Bio";
import Sidebar from "./components/Sidebar";
import { AiOutlineMenuFold } from "react-icons/ai";
import React, { useState } from "react";
import Contact from "./components/Contact";
import Blog from "./components/Blog";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  const [show, setShow] = useState(false);
  const handleShow = () => {
    setShow(!show);
  };
  console.log(show);
  return (
    <>
      <div className="maincontainer">
        <span
          class="iconify"
          data-icon="bx:bx-menu-alt-left"
          style={{
            margin: "50px",
            backgroundColor: "#000080",
            color: "white",
            padding: "10px",
            width: "500px",
          }}
          onClick={() => handleShow()}
        ></span>
        {show && (
          <div className="sidebardiv">
            <Sidebar />
          </div>
        )}
        <div className="main">
          <Navbar />
          <div className="content">
            <Bio />
            <Blog />

            <div id="contact">
              <Contact />
            </div>
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
