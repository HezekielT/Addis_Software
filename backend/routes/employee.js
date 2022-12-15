const { Router } = require("express");
const Employee = require("../models/employee");

const router = Router();

// Add / Create New Employee
router.route('/addEmployee').post(async function(req, res){
  console.log(req.body,"reques")
  const { id, name, dob, gender, salary } = req.body;
  try {
    await Employee.create({
      id,
      name,
      dob,
      gender,
      salary
    });
    res.status(201).send({
      success: true,
      data: "Employee Successfully Created!"
    });
  } catch(err) {
    res.status(400).json({ message: err.message });
  }

});

router.route('/getEmployees').get(async function(req, res) {
  console.log("kjoon")
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
      dob: req.body.dob,
      gender: req.body.gender,
      salary: req.body.salary,
    }
  }

  try {
    await Employee.updateOne({id: id}, newvalues).then(function(err, res){
      response.status(200).json(res)
    })
  } catch(err) {
    response.status(400).json({ message: err.message });
  }
})

router.route('/deleteEmployee/:id').delete(async (req, response) => {
  let id = req.params.id;
  try {
    await Employee.deleteOne({id: id}).then(function() {
      response.status(200).send({ message: "Successfully Deleted!"})
    });
  } catch (err) {
    response.status(400).json({ message: err.message })
  }
})

module.exports = router;