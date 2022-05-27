const Patient = require("../models/Patient");
const { createError } = require("../utils/error");

//REGISTER PATIENT
module.exports.register = async (req, res, next) => {
  const patient = await Patient.findOne({ phoneNo: req.body.phoneNo });
  if (!patient) {
    try {
      const newPatient = await Patient(req.body);
      const savedPatient = await newPatient.save();
      return res.status(201).json(savedPatient);
    } catch (err) {
      return next(err);
    }
  } else {
    return res.status(200).json(patient);
  }
};

//UPDATE PATIENT
module.exports.update = async (req, res, next) => {
  const patient = await Patient.findById(req.params.id);
  if (patient) {
    const phone = await Patient.findOne({ phoneNo: req.body.phone });
    if (phone) {
      return res
        .status(500)
        .json("Patient with same phone number is already registered!");
    } else {
      try {
        const updatedPatient = await Patient.findByIdAndUpdate(
          req.params.id,
          {
            $set: req.body,
          },
          { new: true }
        );
        return res.status(200).json(updatedPatient);
      } catch (err) {
        return next(err);
      }
    }
  } else {
    return res.status(404).json("Patient doesn't exist!");
  }
};

// GET ALL PATIENTS
module.exports.getPatients = async (req, res, next) => {
  try {
    const patients = await Patient.find();
    return res.status(200).json(patients);
  } catch (err) {
    return next(err);
  }
};

// GET A SINGLE PATIENT INFO
module.exports.getPatientInfo = async (req, res, next) => {
  try {
    const patientInfo = await Patient.findById(req.params.id);
    return res.status(200).json(patientInfo);
  } catch (err) {
    return next(err);
  }
};
