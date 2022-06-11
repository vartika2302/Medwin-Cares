import React, { useEffect, useState } from "react";
import "./patientInfo.scss";
import Navbar from "../../components/navbar/Navbar";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";

const PatientInfo = () => {
  const [patient, setPatient] = useState({});
  const location = useLocation();
  const path = location.pathname.split("/")[3];
  const [updateMode, setUpdateMode] = useState(false);
  const [phone, setPhone] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchPatient = async () => {
      try {
        const res = await axios.get(
          `http://localhost:5000/patientauth/patientInfo/${path}`
        );
        setPatient(res.data);
        setPhone(res.data.phoneNo);
      } catch (err) {}
    };
    fetchPatient();
  }, [path]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    setError(false);
    try {
      await axios.put(`http://localhost:5000/patientauth/update/${path}`, {
        phoneNo: phone,
      });

      setUpdateMode(false);
    } catch (err) {
      setError(true);
    }
  };

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
            {updateMode ? (
              <input
                type="text"
                placeholder="Phone number"
                value={phone}
                required
                autoFocus={true}
                onChange={(e) => setPhone(e.target.value)}
              />
            ) : (
              <p>{phone}</p>
            )}
          </div>
          <div className="patient-info-item">
            <Link to={`/patient/${path}/create_report`}>
              <button>CREATE A REPORT</button>
            </Link>
            {updateMode ? (
              <button onClick={handleUpdate}>CLICK TO UPDATE</button>
            ) : (
              <button onClick={(e) => setUpdateMode(true)}>
                UPDATE PATIENT
              </button>
            )}
            <Link to="/allReports">
              <button>VIEW REPORTS</button>
            </Link>
          </div>
          {error && (
            <p className="errorMsg">Something went wrong! Please try again.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default PatientInfo;
