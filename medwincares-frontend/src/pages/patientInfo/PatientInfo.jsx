import React from "react";
import "./patientInfo.scss";
import Navbar from "../../components/navbar/Navbar";
import {Link, useLocation} from "react-router-dom";

const PatientInfo = () => {

  const location = useLocation();
  console.log()

  return (
    <div>
      <Navbar />
      <div className="patient-info">
        <div className="patient-info-wrapper">
          <div className="patient-info-item">
            <span>First name: </span>
            <p>Lalita</p>
          </div>
          <div className="patient-info-item">
            <span>Last name: </span>
            <p>Sharma</p>
          </div>
          <div className="patient-info-item">
            <span>Phone number: </span>
            <p>9876543210</p>
          </div>
          <div className="patient-info-item">
            <Link to="/patient/id/create_report"><button>CREATE A REPORT</button></Link>
            <button>UPDATE INFO</button>
            <button>VIEW REPORTS</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientInfo;
