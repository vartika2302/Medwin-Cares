import React, { useEffect, useState } from "react";
import "./patientInfo.scss";
import Navbar from "../../components/navbar/Navbar";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";

const PatientInfo = () => {
  const [patient, setPatient] = useState({});
  const location = useLocation();
  const path = location.pathname.split("/")[3];

  useEffect(() => {
    const fetchPatient = async () => {
      try {
        const res = await axios.get(
          `http://localhost:5000/patientauth/patientInfo/${path}`
        );
        setPatient(res.data);
      } catch (err) {}
    };
    fetchPatient();
  }, [path]);

  return (
    <div>
      <Navbar />
      <div className="patient-info">
        <div className="patient-info-wrapper">
          <div className="patient-info-item">
            <span>First name: </span>
            <p>{patient.firstName}</p>
          </div>
          <div className="patient-info-item">
            <span>Last name: </span>
            <p>{patient.lastName}</p>
          </div>
          <div className="patient-info-item">
            <span>Phone number: </span>
            <p>{patient.phoneNo}</p>
          </div>
          <div className="patient-info-item">
            <Link to={`/patient/${path}/create_report`}>
              <button>CREATE A REPORT</button>
            </Link>
            <button>UPDATE PATIENT</button>
            <Link to="/allReports">
              <button>VIEW REPORTS</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientInfo;
