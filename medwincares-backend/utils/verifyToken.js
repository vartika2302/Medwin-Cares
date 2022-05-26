const jwt = require("jsonwebtoken");
const { createError } = require("../utils/error");

const verifyToken = (req, res, next) => {
  const token = req.cookies.access_token;
  if (!token) {
    return next(createError(401, "You are not authenticated!"));
  }

  jwt.verify(token, process.env.JWT, (err, doctor) => {
    if (err) {
      return next(createError(403, "Token is not valid!"));
    }
    req.doctor = doctor;
    next();
  });
};

const verifyDoctor = (req, res, next) => {
  verifyToken(req, res, next, () => {
    if (req.doctor.id === req.params.id) {
      next();
    } else {
      return next(createError(403, "You are not authorized!"));
    }
  });
};

module.exports = { verifyToken, verifyDoctor };
