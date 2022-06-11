import React, { useRef } from "react";
import "./createReport.scss";
import Navbar from "../../components/navbar/Navbar";
import axios from "axios";
import { useLocation } from "react-router-dom";

const CreateReport = () => {
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const ageRef = useRef();
  const dobRef = useRef();
  const genderRef = useRef();
  const addressRef = useRef();
  const doctorRef = useRef();
  const statusRef = useRef();
  const phoneRef = useRef();
  const location = useLocation();
  const path = location.pathname.split("/")[2];

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("clicked");
    try {
      const res = await axios.post(
        `http://localhost:5000/patients/${path}/create_report`,
        {
          firstName: firstNameRef.current.value,
          lastName: lastNameRef.current.value,
          age: ageRef.current.value,
          dob: dobRef.current.value,
          sex: genderRef.current.value,
          address: addressRef.current.value,
          doctor: doctorRef.current.value,
          status: statusRef.current.value,
          phoneNum: phoneRef.current.value,
        }
      );
      console.log(res.data);
      res.data && window.location.replace("/allReports");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="create-report">
        <h2>CREATE A REPORT</h2>
        <div className="create-report-wrapper">
          <form className="create-report-form" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="First name"
              required
              ref={firstNameRef}
            />
            <input
              type="text"
              placeholder="Last name"
              required
              ref={lastNameRef}
            />
            <input
              type="number"
              placeholder="Enter age"
              required
              ref={ageRef}
            />
            <input type="date" placeholder="Enter DOB" ref={dobRef} />
            <select ref={genderRef}>
              <option disabled selected>
                Gender
              </option>
              <option>Male</option>
              <option>Female</option>
              <option>Others</option>
            </select>
            <input
              type="text"
              placeholder="Enter address"
              required
              ref={addressRef}
            />
            <input
              type="text"
              placeholder="Doctor's name"
              required
              ref={doctorRef}
            />
            <select ref={statusRef}>
              <option disabled selected>
                Status
              </option>
              <option>Negative</option>
              <option>Travelled-Quarantine</option>
              <option>Symptoms-Quarantine</option>
              <option>Positive-Admit</option>
            </select>
            <input
              type="text"
              placeholder="Phone number"
              required
              ref={phoneRef}
            />
            <button type="submit">CREATE</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateReport;
