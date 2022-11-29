// import { EmployeeFields } from "../../components/Employee/Employee";

// export type Add = {type: "ADD_EMPLOYEE", payload: EmployeeFields};
// export type Delete = {type: "DELETE_EMPLOYEE", payload: string}
// export type Update = {type: "UPDATE_EMPLOYEE", payload: EmployeeFields}

// export const addEmployees = (employee: EmployeeFields): Add => ({
//   type: "ADD_EMPLOYEE",
//   payload: employee,
// })

// export const deleteEmployee = (employee: string): Delete => ({
//   type: "DELETE_EMPLOYEE",
//   payload: employee,
// })

// export const updateEmployee = (employee: EmployeeFields): Update => ({
//   type: "UPDATE_EMPLOYEE",
//   payload: employee,
// })


import { EmployeeFields } from "../../components/Employee/Employee";
import { GET_EMPLOYEES, ADD_EMPLOYEE, 
  UPDATE_EMPLOYEE, DELETE_EMPLOYEE } from "./types";

export const fetchEmployees = () => {
  return function(dispatch) {
    fetch()
  }
}