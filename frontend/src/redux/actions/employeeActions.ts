import { EmployeeFields } from "../../components/Employee/Employee"
import { ADD_EMPLOYEES, DELETE_EMPLOYEE, GET_EMPLOYEES, UPDATE_EMPLOYEES } from "./types"

export const getEmployees = () => ({
  type: "GET_EMPLOYEES",
})

export const addEmployees = (employee: EmployeeFields): ADD_EMPLOYEES => ({
  type: "ADD_EMPLOYEE",
  payload: employee,
})

export const deleteEmployee = (employee: string): DELETE_EMPLOYEE => ({
  type: "DELETE_EMPLOYEE",
  payload: employee,
})

export const updateEmployee = (employee: EmployeeFields): UPDATE_EMPLOYEES => ({
  type: "UPDATE_EMPLOYEE",
  payload: employee,
})