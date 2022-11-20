const express = require("express");
const Employee = require("../models/employee.model");

const router = express.Router();

router.route('/addEmployee').post(async function(req, res) {
  const { id, name, dateOfBirth, gender, salary } = req.body;

  try {
    await Employee.create({
      id,
      name,
      dateOfBirth,
      gender,
      salary
    });
    res.status(201).send();
  } catch(err) {
    res.status(400).json({ message: err.message });
  }
  
})