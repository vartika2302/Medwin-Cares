import React from "react";
import Navbar from "../../components/navbar/Navbar";
import "./patientRegister.scss";

const PatientRegister = () => {
  return (
    <div>
      <Navbar />
      <div className="patient-register">
        <div className="patient-register-wrapper">
          <img
            src="http://localhost:3000/assets/images/medwin-cares.png"
            alt="website logo"
          />
          <form className="patient-register-form">
            <input type="text" placeholder="First name" required />
            <input type="text" placeholder="Last name" required />
            <input type="text" placeholder="Phone number" required />
            <button type="submit">REGISTER</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PatientRegister;
