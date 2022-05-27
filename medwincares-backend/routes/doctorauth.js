const express = require("express");
const doctorsController = require("../controllers/doctorsController.js");
const router = express.Router();

router.post("/register", doctorsController.register);

router.post("/login", doctorsController.login);
router.put("/update/:id",doctorsController.update);

/* Checking for verification middlewares */
// router.get("/checkauth", verifyToken, (req, res, next) => {
//   res.send("You are logged in!");
// });

// router.get("/checkdoctor/:id", verifyDoctor, (req, res, next) => {
//   res.send("Hello doctor, you are logged in and you can perform operations.");
// });

module.exports = router;
