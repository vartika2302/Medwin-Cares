import React from "react";
import { Link } from "react-router-dom";
import "./doctorSignin.scss";

const DoctorSignup = () => {
  return (
    <div className="doctor-signin">
      <div className="doctor-signin-wrapper">
        <img
          src="http://localhost:3000/assets/images/medwin-cares.png"
          alt="hospital-logo"
          className="doctor-signup-image"
        />
        <form>
          <input type="email" placeholder="Email" required/>
          <input type="password" placeholder="Password" required/>
          <input type="password" placeholder="Confirm Password" required/>
          <button type="submit">LOGIN</button>
        </form>
        <p className="register-info">
          Are you new here? 
          <Link to="/doctor/register">
            <span> Register</span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default DoctorSignup;
