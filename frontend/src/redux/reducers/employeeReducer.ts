import { EmployeeFields } from "../../components/Employee/Employee"
import { ADD_EMPLOYEES, DELETE_EMPLOYEE, GET_EMPLOYEES, UPDATE_EMPLOYEES } from '../actions/types'

export interface EmployeesState {
  employees: EmployeeFields[]
}
const initialState = {
  employees: [],
}

export default function processEmployeeData(
  state:EmployeesState = initialState, 
  action:GET_EMPLOYEES | ADD_EMPLOYEES | UPDATE_EMPLOYEES | 
  DELETE_EMPLOYEE) {
  
  switch(action.type) {
    case "GET_EMPLOYEES":
      return {
        ...state,
        employees: action.payload 
      }
    case "ADD_EMPLOYEE":
      return {
        ...state,
        employees: [...state.employees, action.payload]
      }
    case "UPDATE_EMPLOYEE":
      return {
        ...state,
        employees: state.employees.map((employee: EmployeeFields) => 
        {
          
        })
      }
    case "DELETE_EMPLOYEE":
      return {
        ...state,
        employees: state.employees.filter((employee: EmployeeFields) => employee.id !== action.payload)
      }
    default:
      return state
  }
}