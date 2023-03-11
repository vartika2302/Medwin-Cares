import React, { useEffect, useState } from "react";
import "./reports.scss";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import SingleReport from "../../components/singleReport/SingleReport";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

const Reports = () => {
  const [reports, setReports] = useState([]);
  const [patients, setPatients] = useState([]);
  const [currP, setCurrP] = useState("ALL");
  let history = useNavigate();
  const location = useLocation();

  const arr = [
    "Negative",
    "Travelled-Quarantine",
    "Symptoms-Quarantine",
    "Positive-Admit",
  ];

  // Fetch all reports
  useEffect(() => {
    const fetchReports = async () => {
      const res = await axios.get("http://localhost:5000/patients/allReports");

      setReports(res.data);
    };
    fetchReports();
  }, []);

  // Fetch patients
  useEffect(() => {
    const fetchPatients = async () => {
      const res = await axios.get("http://localhost:5000/patientauth");
      setPatients(res.data);
    };
    fetchPatients();
  }, []);

  // const handleFilters = (e) => {
  //   let value;

  //   if (e.target.name === "status") {
  //     value = e.target.value;
  //   } else if (e.target.name === "patient") {
  //     value = e.target.value.split(",")[1].trim();
  //   }
  //   setFilters({
  //     [e.target.name]: value,
  //   });
  // };

  const handleFilters = (e) => {
    let value;
    let nameOfPatient;
    if (e.target.name === "status") {
      value = e.target.value;
      history(`/reports/${value}`);
    } else if (e.target.name === "patient") {
      nameOfPatient = e.target.value.split(",")[0].trim();
      value = e.target.value.split(",")[1].trim();
      setCurrP(nameOfPatient);

      history(`/reports/${value}/${nameOfPatient}`);
    }
  };
  console.log(currP);

  useEffect(() => {
    const fetchFilteredReports = async () => {
      try {
        let res;

        const path = location.pathname.split("/")[2];

        if (arr.includes(path)) {
          res = await axios.get(
            `http://localhost:5000/patients/reports/${path}`
          );
        } else {
          res = await axios.get(
            `http://localhost:5000/patients/${path}/all_reports`
          );
        }
        setReports(res.data);
      } catch (err) {}
    };
    fetchFilteredReports();
  }, [location.pathname]);

  const handleRefreshClick = async (e) => {
    e.preventDefault();
    const res = await axios.get("http://localhost:5000/patients/allReports");
    setReports(res.data);
    history("/allReports");
  };

  return (
    <div>
      <Navbar />
      <div className="reports">
        <div className="reports-wrapper">
          <h3>{currP === "ALL" ? "ALL" : currP + "'s"} REPORTS</h3>
          <div>
            <img
              src="https://icons.veryicon.com/png/o/miscellaneous/basic-monochrome-icon/refresh-149.png"
              alt="refresh-icon"
              className="refresh-icon"
              onClick={handleRefreshClick}
            />
          </div>
          <div className="reports-top">
            <div className="reports-top-left">
              <label>Patient's status: </label>
              <select name="status" onChange={handleFilters}>
                <option selected disabled>
                  Status
                </option>
                <option>Negative</option>
                <option>Travelled-Quarantine</option>
                <option>Symptoms-Quarantine</option>
                <option>Positive-Admit</option>
              </select>
            </div>
            <div className="reports-top-right">
              <label>Patients: </label>
              <select name="patient" onChange={handleFilters}>
                <option disabled selected>
                  Patient
                </option>
                {patients.map((patient) => (
                  <option key={patient._id}>
                    {patient?.firstName} {patient?.lastName}, {patient?.phoneNo}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="reports-bottom">
            {reports.map((report) => (
              <SingleReport key={report._id} report={report} />
            ))}
            <p className="no-results">{reports.length===0 && "No results found"}</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Reports;
