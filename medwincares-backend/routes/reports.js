const express = require("express");
const reportsController = require("../controllers/reportController");
const router = express.Router();


router.get("/allReports",reportsController.reports);
router.get("/reports/:status",reportsController.statusReports);

router.post("/:id/create_report", reportsController.createReport);
router.get("/:phone/all_reports", reportsController.allReports);

module.exports = router;
