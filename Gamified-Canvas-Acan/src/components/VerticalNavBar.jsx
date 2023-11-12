// VerticalNavbar.js
import React from "react";
import { Link } from "react-router-dom";
import "./VerticalNavBar.css";

const VerticalNavBar = () => {
  return (
    <div className="vertical-navbar">
      <Link to="/Syllabus">Syllabus</Link>
      <Link to="/Zoom">Zoom</Link>
      <Link to="/RewardCenter">Reward Center</Link>
    </div>
  );
};

export default VerticalNavBar;