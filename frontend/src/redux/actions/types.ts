import { EmployeeFields } from "../../components/Employee/Employee"

export type GET_EMPLOYEES ={type: "GET_EMPLOYEES", payload?: EmployeeFields[]}
export type UPDATE_EMPLOYEES ={type: "UPDATE_EMPLOYEE", payload: EmployeeFields}
export type ADD_EMPLOYEES ={type: "ADD_EMPLOYEE", payload: EmployeeFields}
export type DELETE_EMPLOYEE = { type: "DELETE_EMPLOYEE", payload: string}

