import React from "react";
import "./singleReport.scss";

const SingleReport = ({ report }) => {
  return (
    <div className="report-item">
      <div className="report-item-row">
        <span>Patient's name: </span>
        <p>
          {report.firstName} {report.lastName}
        </p>
      </div>
      <div className="report-item-row">
        <span>Age: </span>
        <p>{report.age}</p>
      </div>
      <div className="report-item-row">
        <span>DOB: </span>
        <p>{report.dob}</p>
      </div>
      <div className="report-item-row">
        <span>Sex: </span>
        <p>{report.sex}</p>
      </div>
      <div className="report-item-row">
        <span>Address: </span>
        <p>{report.address}</p>
      </div>
      <div className="report-item-row">
        <span>Status: </span>
        <p>{report.status}</p>
      </div>
      <div className="report-item-row">
        <span>Treatment By: </span>
        <p>
          {report.doctor} 
        </p>
      </div>
      <div className="report-item-row">
        <span>Date: </span>
        <p>{report.createdAt}</p>
      </div>
    </div>
  );
};

export default SingleReport;
