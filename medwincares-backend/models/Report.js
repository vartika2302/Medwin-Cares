const mongoose = require("mongoose");

const ReportSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
    },
    age: {
      type: Number,
      required: true,
    },
    dob: {
      type: Date,
      required: true,
    },
    sex: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    doctor: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
    },
    phoneNum: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Report", ReportSchema);
