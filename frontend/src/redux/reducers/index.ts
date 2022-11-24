import { combineReducers } from "redux";
import addEmployee from './addEmployeeReducer';
import deleteEmployee from "./deleteEmployeeReducer";
import getEmployees from "./getEmployeesReducer";
import updateEmployee from "./updateEmployeeReducer";

const rootReducer = combineReducers({
  addEmployees: addEmployee,
  updateEmployee: updateEmployee,
  deleteEmployee: deleteEmployee,
  getEmployees: getEmployees
})

export default rootReducer;