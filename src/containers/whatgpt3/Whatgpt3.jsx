import React from "react";
import "./whatgpt3.css";
import { Feature } from "../../components";

const Whatgpt3 = () => {
  return (
    <div className="whatgpt3-section_margin" id="whpt3">
      <div className="whatgpt3-features">
        <Feature />
      </div>
      <div className="whatgpt3-header">
        <h1 className="gradient-text">
          The possibilities are beyond your imagination
        </h1>
        <p>Explore The Library</p>
      </div>
      <div className="whatgpt3-container">
        <Feature />
        <Feature />
        <Feature />
      </div>
    </div>
  );
};

export default Whatgpt3;
