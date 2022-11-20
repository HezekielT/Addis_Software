const mongoose = require('mongoose')

const employeeSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: [true, "Please Provide name"]
  },
  dateOfBirth: {
    type: Date,
    required: true,
    trim: true,
  },
  gender: {
    type: String,
    enum: ["male", "female"],
    required: [true]
  },
  salary: {
    type: Number,
    required: [true]
  }
})

module.exports = mongoose.model("Event", employeeSchema);