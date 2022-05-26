import React from "react";
import "./createReport.scss";
import Navbar from "../../components/navbar/Navbar";

const CreateReport = () => {
  return (
    <div>
      <Navbar />
      <div className="create-report">
      <h2>CREATE A REPORT</h2>
        <div className="create-report-wrapper">
          <form className="create-report-form">
            <input type="text" placeholder="First name" required />
            <input type="text" placeholder="Last name" required />
            <input type="number" placeholder="Enter age" required />
            <input type="date" placeholder="Enter DOB" />
            <select>
              <optgroup label="Select gender">
                <option>Male</option>
                <option>Female</option>
                <option>Others</option>
              </optgroup>
            </select>
            <input type="text" placeholder="Enter address" required />
            <input type="text" placeholder="Doctor's name" required />
            <select>
              <optgroup label="Select gender">
                <option>Negative</option>
                <option>Travelled-Quarantine</option>
                <option>Symptoms-Quarantine</option>
                <option>Positive-Admit</option>
              </optgroup>
            </select>
            <button type="submit">CREATE</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateReport;