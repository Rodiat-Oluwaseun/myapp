import React from "react";
import "./header.css";
import people from "../../assets/people.png";
import AI from "../../assets/ai.png";

const Header = () => {
  return (
    <div className="header-section-padding" id="home">
      <div className="header-content">
        <h1 className="gradient-text">
          Let's Build Someting amazing with GPT-3 OpenAI
        </h1>
        <p>
          Yet bed any for travelling assistance Indulgence unpleasing Not
          thought all exercise blessing indulgence way everything joy alteration
          boisterous the attachement .Party we years to order allowed asked of.
        </p>

        <div className="header-content-input">
          <input type="email" placeholder="your email address" />
          <button type="button">Get started</button>
        </div>

        <div className="header-content-people">
          <img src={people} alt="people" />
          <p>1,600 people required access visit in the last 24 hoours</p>
        </div>
      </div>
      <div className="header-image">
        <img src={AI} alt="ai" />
      </div>
    </div>
  );
};

export default Header;
