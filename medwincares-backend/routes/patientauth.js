const express = require("express");
const patientsController = require("../controllers/patientsController");
const router = express.Router();

router.get("/", patientsController.getPatients);
router.post("/register", patientsController.register);
router.put("/update/:id", patientsController.update);
router.get("/patientInfo/:id",patientsController.getPatientInfo)

module.exports = router;
