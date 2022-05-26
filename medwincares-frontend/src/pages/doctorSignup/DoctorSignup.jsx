import React from "react";
import "./doctorSignup.scss";

const DoctorSignup = () => {
  return (
    <div className="doctor-signup">
      <div className="doctor-signup-wrapper">
        <img
          src="http://localhost:3000/assets/images/medwin-cares.png"
          alt="hospital-logo"
          className="doctor-signup-image"
        />
        <form>
          <input type="text" placeholder="First name" />
          <input type="text" placeholder="Last name" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <input type="specialization" placeholder="Specialization" />
          <input type="cell" placeholder="Phone no." />
          <input type="text" placeholder="Passcode" />
          <button type="submit">REGISTER</button>
        </form>
      </div>
    </div>
  );
};

export default DoctorSignup;
