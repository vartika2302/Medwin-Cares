import React from "react";
import "./vaccination.scss";

const Vaccination = () => {
  return (
    <div className="vaccination">
      <div className="vaccination-wrapper">
        <h2 className="vaccination-heading">Covid-19 Test and Vaccination</h2>
        <div className="vaccination-list">
          <div className="vaccination-item">
            <div className="vaccination-top">
              <img
                src="http://localhost:3000/assets/images/testcovidsanitario.jpg"
                alt="rapid test"
                className="vaccination-image"
              />
            </div>
            <p className="vaccination-bottom">RAPID TEST</p>
          </div>
          <div className="vaccination-item">
            <div className="vaccination-top">
              <img
                src="http://localhost:3000/assets/images/pcr.jpg"
                alt="pcr test"
                className="vaccination-image"
              />
            </div>
            <p className="vaccination-bottom">PCR TEST</p>
          </div>
          <div className="vaccination-item">
            <div className="vaccination-top">
              <img
                src="http://localhost:3000/assets/images/drive-thru.jpg"
                alt="drive thru test"
                className="vaccination-image"
              />
            </div>
            <p className="vaccination-bottom">DRIVE THRU TEST</p>
          </div>
          <div className="vaccination-item">
            <div className="vaccination-top">
              <img
                src="http://localhost:3000/assets/images/vaccination.avif"
                alt="vaccination"
                className="vaccination-image"
              />
            </div>
            <p className="vaccination-bottom">VACCINATION</p>
          </div>
        </div>
        <button>Register</button>
      </div>
    </div>
  );
};

export default Vaccination;
