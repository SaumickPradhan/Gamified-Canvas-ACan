import React, { useState, useEffect } from "react";
import "./LoginPage.css";
import bearcat from "../assets/bearcatFace.png";
const LoginPage = () => {
  // State for the mascot image URL
  const [mascotImage, setMascotImage] = useState("");

  useEffect(() => {
    // Create a new image element for the mascot
    const mascot = new Image();
    mascot.onload = () => {
      setMascotImage(mascot.src);
    };

    // Assign the variable directly to the src property
    mascot.src = bearcat;
  }, []);

  return (
    <div className="user-login-page">
      {/* Add the mascot image above the login form */}
      {mascotImage && <img src={mascotImage} alt="Mascot" className="mascot-image" />}

      <h1>User Profile Page</h1>
      <form className="user-login-form">
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <button type="submit">Log In</button>
      </form>
    </div>
  );
};

export default LoginPage;