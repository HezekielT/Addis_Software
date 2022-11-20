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
});

router.route('/updateEmployee/:id').post(async function (req, response) {
  let id =req.params.id;
  let newvalues = {
    $set: {
      name: req.body.name,
      dateOfBirth: req.body.dateOfBirth,
      gender: req.body.gender,
      salary: req.body.salary,
    }
  }

  try {
    await (await Employee.updateOne({id: id}, newvalues)).then(function(err, res){
      response.status(200).json(res)
    })
  } catch(err) {
    response.status(400).json({ message: err.message });
  }
})