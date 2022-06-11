import axios from "axios";
import React, { useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import "./patientRegister.scss";

const PatientRegister = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    try {
      const res = await axios.post(
        "http://localhost:5000/patientauth/register",
        {
          firstName,
          lastName,
          phoneNo: phone,
        }
      );
      res.data &&
        window.location.replace(`/patients/patientInfo/${res.data._id}`);
    } catch (err) {
      setError(true);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="patient-register">
        <div className="patient-register-wrapper">
          <img
            src="http://localhost:3000/assets/images/medwin-cares.png"
            alt="website logo"
          />
          <form className="patient-register-form" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="First name"
              required
              onChange={(e) => setFirstName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Last name"
              required
              onChange={(e) => setLastName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Phone number"
              required
              onChange={(e) => setPhone(e.target.value)}
            />
            <button type="submit">REGISTER</button>
            {error && (
              <p className="errorMsg">Somthing went wrong! Please try again.</p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default PatientRegister;
