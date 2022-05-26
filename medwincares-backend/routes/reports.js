const express = require("express");
const reportsController = require("../controllers/reportController");
const { verifyToken, verifyDoctor } = require("../utils/verifyToken.js");
const router = express.Router();


router.get("/allReports",reportsController.reports);
router.get("/reports/:status",reportsController.statusReports);

router.post("/:id/create_report", verifyDoctor, reportsController.createReport);
router.get("/:phone/all_reports", reportsController.allReports);

module.exports = router;
