const express = require("express");
const patientsController = require("../controllers/patientsController");
const { verifyToken, verifyDoctor } = require("../utils/verifyToken.js");
const router = express.Router();

router.get("/", patientsController.getPatients);
router.post("/register", verifyDoctor, patientsController.register);
router.put("/update/:id", verifyDoctor, patientsController.update);

module.exports = router;
