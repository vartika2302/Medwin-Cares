const Doctor = require("../models/Doctor");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { createError } = require("../utils/error");

// REGISTER DOCTOR
module.exports.register = async (req, res, next) => {
  if (req.body.passcode === process.env.PASSCODE) {
    try {
      // Generating hashed password
      const salt = bcrypt.genSaltSync(10);
      const hash = bcrypt.hashSync(req.body.password, salt);
      const newDoctor = new Doctor({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: hash,
        specialization: req.body.specialization,
        phone: req.body.phone,
        passcode: req.body.passcode,
      });

      const savedDoctor = await newDoctor.save();
      return res.status(201).json(savedDoctor);
    } catch (err) {
      return next(err);
    }
  } else {
    return next(
      createError(401, "You are not authorized to register as doctor!")
    );
  }
};

// DOCTOR LOGIN
module.exports.login = async (req, res, next) => {
  try {
    const doctor = await Doctor.findOne({ email: req.body.email });
    if (!doctor) {
      return next(
        createError(
          404,
          "You are not yet registered. Please register yourself!"
        )
      );
    }

    //For comparing objects, used bcrypt compare method
    const isPasswordCorrect = await bcrypt.compare(
      req.body.password,
      doctor.password
    );

    if (!isPasswordCorrect) {
      return next(createError(400, "Incorrect email or password!"));
    }

    //We don't want to send password with our react application, so we will use destructuring.
    const { password, passcode, ...otherInfo } = doctor._doc;
    return res.status(200).json(otherInfo);
  } catch (err) {
    next(err);
  }
};

module.exports.update = async (req, res, next) => {
  if (req.body.doctorId === req.params.id) {
    let hash;
    if (req.body.password) {
      const salt = bcrypt.genSaltSync(10);
      hash = bcrypt.hashSync(req.body.password, salt);
    }
    const doctorExists = await Doctor.findOne({ phone: req.body.phone });

    if (doctorExists && doctorExists.id !== req.params.id) {
      return next(createError(400, "This phone number already exists!"));
    }
    try {
      const updatedDoctor = await Doctor.findByIdAndUpdate(
        req.params.id,
        {
          $set: {
            email: req.body.email,
            password: hash,
            phone: req.body.phone,
          },
        },
        { new: true }
      );
      return res.status(200).json(updatedDoctor);
    } catch (err) {
      return next(err);
    }
  } else {
    return next(createError(401, "You can update only your account!"));
  }
};
