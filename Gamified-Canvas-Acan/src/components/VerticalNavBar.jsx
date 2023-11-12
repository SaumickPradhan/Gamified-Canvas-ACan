// VerticalNavBar.js
import React from "react";
import { Link } from "react-router-dom";
import "./VerticalNavBar.css";

const VerticalNavBar = () => {
  return (
    <ul className="nav flex-column">
      <li className="nav-item">
        <a className="nav-link active" href="/ModulesPage">
          Modules
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/Syllabus">
          Syllabus
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/GradeBook">
          Grades
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/AssignmentPage">
          Assignments
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/Zoom">
          Zoom
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/RewardCenter">
          Rewards Center
        </a>
      </li>
    </ul>
  );
};

export default VerticalNavBar;
