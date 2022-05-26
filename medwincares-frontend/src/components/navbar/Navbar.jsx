import React, { useContext } from "react";
import "./navbar.scss";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";

const Navbar = () => {
  const { doctor, dispatch } = useContext(Context);

  const handleLogout = () => {
    console.log("clicked")
    dispatch({ type: "LOGOUT" });
  };

  return (
    <div className="navbar">
      <div className="navbar-wrapper">
        <div className="left">
          <img
            src="http://localhost:3000/assets/images/medwin-cares.png"
            alt="hospital-logo"
            className="hospital-logo"
          />
        </div>
        <div className="middle">
          <Link to="/" className="link">
            <span className="middle-item">Home</span>
          </Link>
          <Link to="/about" className="link">
            <span className="middle-item">About Us</span>
          </Link>
          <Link to="/guidelines" className="link">
            <span className="middle-item">Guidelines</span>
          </Link>
          <Link to="/patient/register" className="link">
            <span className="middle-item">Register a patient</span>
          </Link>
          {doctor && (
            <Link to="/allReports" className="link">
              <span className="middle-item">View all reports</span>
            </Link>
          )}
        </div>
        <div className="right">
          {doctor ? (
            <button onClick={handleLogout} className="nav-btn">Log out</button>
          ) : (
            <Link to="/doctor/login">
              <button className="nav-btn">Log in</button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
