import React from "react";
import "./header.css";

function Header({ children }) {
  return (
    <header className="header">
      <div className="wrapper">
        <div className="header-grid">
          <h1>Social Media Dashboard</h1>
          <p className="header-total">Total Followers: 10.000</p>
        </div>
      </div>
    </header>
  );
}

export default Header;
