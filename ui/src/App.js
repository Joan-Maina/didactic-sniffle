import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Bio from "./components/Bio";
import Sidebar from "./components/Sidebar";
import { AiOutlineMenuFold } from "react-icons/ai";
import React, { useState } from "react";
import Contact from "./components/Contact";
import Blog from "./components/Blog";
import Navbar from "./components/Navbar";
// import About from "./components/About";

function App() {
  const [show, setShow] = useState(false);
  const handleShow = () => {
    setShow(!show);
  };
  return (
    <>
      <AiOutlineMenuFold
        className="menu"
        onClick={() => handleShow()}
        style={{
          margin: "20px",
          backgroundColor: "#000080",
          color: "white",
          padding: "10px",
        }}
      />
      <Navbar />
      <div className="main">
        {show && (
          <div className="side">
            <Sidebar />
          </div>
        )}
        <div className="content">
          <Bio />

          <div id="contact">
            <Contact />
          </div>

          {/* <Blog /> */}
        </div>
      </div>
    </>
  );
}

export default App;
