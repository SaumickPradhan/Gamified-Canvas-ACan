import { useParams } from 'react-router-dom';
import { useNavigate } from "react-router-dom";


import React from 'react';
import './Dashboard.css';
const Dashboard = () => {
    const navi = useNavigate();



  const { userInput } = useParams();

    const handleCourseClick = (courseName) => {
        // alert(`Clicked on ${courseName}`);
        navi(`/UserInterface`);
        // Add your logic for handling the button click here
    };

    const handleRewardsCenterClick = () => {
        alert('Clicked on Rewards Center');
        // Add your logic for handling the button click here
    };

    const handleRewardsHistoryClick = () => {
        alert('Clicked on Rewards History');
        // Add your logic for handling the button click here
    };

    return (
        <div className = "main-cont"> <h1>Welcome Back { userInput }</h1>
        <div className="dashboard-container">
            
            <div className="points-component">
                {/* Left Component with Points */}
                <div className="points-box">
                    <h3>ACan Stats:</h3>
                    <p>Acan Points</p> {/* Replace with actual points */}
                    <p>100 pts</p>
                    <button className="points-button" onClick={handleRewardsCenterClick}>
                        Rewards Center
                    </button>
                    <button className="points-button" onClick={handleRewardsHistoryClick}>
                        Rewards History
                    </button>
                </div>
            </div>
            <div className="courses-component">
                {/* Middle Component with Course Names and Progress Bars */}
                <div className="course-box">
                    <button className="course-button" onClick={() => handleCourseClick("Course 1")}>
                        Course 1
                    </button>
                    <div className="progress-container">
                        <span className="progress-number">60%</span>
                        <div className="progress-bar" style={{ backgroundColor: '#0000'}}>
                            <div className="progress" style={{ width: '60%'}}></div>
                        </div>
                    </div>
                </div>
                <div className="course-box">
                    <button className="course-button" onClick={() => handleCourseClick("Course 2")}>
                        Course 2
                    </button>
                    <div className="progress-container">
                        <span className="progress-number">80%</span>
                        <div className="progress-bar" style={{ backgroundColor: '#0000'}}>
                            <div className="progress" style={{ width: '80%'}}></div>
                        </div>
                    </div>
                </div>
                <div className="course-box">
                    <button className="course-button" onClick={() => handleCourseClick("Course 1")}>
                        Course 3
                    </button>
                    <div className="progress-container">
                        <span className="progress-number">20%</span>
                        <div className="progress-bar" style={{ backgroundColor: '#0000'}}>
                            <div className="progress" style={{ width: '20%' }}></div>
                        </div>
                    </div>
                </div>
                {/* Add more course boxes as needed */}
            </div>
        </div>
        </div>
    );
}

export default Dashboard;




