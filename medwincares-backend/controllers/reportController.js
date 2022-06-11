const Patient = require("../models/Patient");
const Report = require("../models/Report");
const { createError } = require("../utils/error");
//connect to db, create new collection, make new document, that's why making it async as the above things will take time.

// CREATE REPORT
module.exports.createReport = async (req, res, next) => {
  const patient = await Patient.findById(req.params.id);
  if (patient) {
    if (patient.phoneNo === req.body.phoneNum) {
      try {
        const newReport = await Report(req.body);
        const savedReport = await newReport.save();
       
        return res.status(201).json(savedReport);
      } catch (err) {
        return next(err);
      }
    } else {
      return next(
        createError(
          400,
          "Phone number with which the patient is registered is entered wrong!"
        )
      );
    }
  } else {
    return next(
      createError(404, "Patient doesn't exist. Please register the patient!")
    );
  }
};

// GET ALL REPORTS
module.exports.reports = async (req, res, next) => {
  try {
    const reports = await Report.find().sort("-createdAt");
    return res.status(200).json(reports);
  } catch (err) {
    return next(err);
  }
};

// GET ALL REPORTS OF A PATIENT
module.exports.allReports = async (req, res, next) => {
  // try {
  //   const patient = await Patient.findById(req.params.id);
  //   const reports = patient.reports;
  //   return res.status(200).json(reports);
  // } catch (err) {
  //   return next(err);
  // }

  try {
    const patient = await Patient.findOne({ phoneNo: req.params.phone });
    const reports = await Report.find({ phoneNum: patient.phoneNo }).sort(
      "-createdAt"
    );
    return res.status(200).json(reports);
  } catch (err) {
    return next(err);
  }
};

// GET ALL REPORTS OF ALL PATIENTS FILTERED BY A SPECIFIC STATUS
module.exports.statusReports = async (req, res, next) => {
  // CUSTOMISED ERRORS
  // const failed = true;
  // if(failed) {
  //   return next(errorPage.createError(401,"Not authenticated"));
  // }

  try {
    const reports = await Report.find({ status: req.params.status }).sort(
      "-createdAt"
    );
    return res.status(200).json(reports);
  } catch (err) {
    next(err);
  }
};
