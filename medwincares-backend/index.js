// Note: For libraries, we don't need anything but if we are using import statement in express we have to write extension.
// Add type "module" in package.json file
const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const doctorAuthRoute = require("./routes/doctorauth");
const patientAuthRoute = require("./routes/patientauth");
const reportsRoute = require("./routes/reports");
const cors = require("cors");
const app = express();

dotenv.config();

// middleware
app.use(cors());

app.use(express.json());


// Initial connection of mongoDB
const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("MongoDB is connected!");
  } catch (error) {
    throw error;
  }
};

// MongoDB disconnected listener
mongoose.connection.on("disconnected", () => {
  console.log("MongoDB disconnected!");
});

// MongoDB connected listener
mongoose.connection.on("connected", () => {
  console.log("MongoDB connected!");
});

//middlewares
app.use("/doctor", doctorAuthRoute);
app.use("/patientauth", patientAuthRoute);
app.use("/patients", reportsRoute);

// error handling middleware
app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something went wrong";
  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack,
  });
});

app.listen(process.env.PORT || 5000, () => {
  connect();
  console.log(`Server listening at port ${process.env.PORT || 5000}!`);
});
