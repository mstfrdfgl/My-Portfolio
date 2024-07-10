// src/components/Header.js
import React from "react";
import "./Header.css";
import headerRight from "../../assets/hero-right.png";

export default function Header() {
  return (
    <header>
      <div className="header-top">
        <span className="brand">almila</span>
        <div className="controls">
          <button className="language-switch">TÜRKÇE'YE GEÇ</button>

          <button className="dark-mode-toggle">
            {/* <label>
              <input type="checkbox" className="theme-checkbox"></input>
            </label> */}
            DARK MODE
          </button>
        </div>
      </div>
      <div className="header-content">
        <div className="text-section">
          <h1>I am a Frontend Developer...</h1>
          <p>
            ...who likes to craft solid and scalable frontend products with
            great user experiences.
          </p>
          <div className="buttons">
            <button className="btn github">Github</button>
            <button className="btn linkedin">LinkedIn</button>
          </div>
        </div>
        <div className="image-section">
          <img src={headerRight} alt="Profile" />
        </div>
      </div>
    </header>
  );
}
