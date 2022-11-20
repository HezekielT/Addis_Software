const express = require("express");
const Employee = require("../models/employee.model");

const router = express.Router();

// Add / Create New Employee
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

});

router.route('/getEmployees').get(async function(req, res) {
  try {
    const employees = await Employee.find();
    res.status(201).send(JSON.stringify(employees));
  } catch(err) {
    res.status(400).json({ message: err.message });
  }
})