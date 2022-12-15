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
  dob: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    enum: ['male', 'female'],
    required: [true]
  },
  salary: {
    type: Number,
    required: [true]
  }
})

module.exports = mongoose.model('Employee', employeeSchema);