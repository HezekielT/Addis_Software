import { Add } from "../actions/employeeAction"

interface EmployeeState {
  employees: string[]
}
const initialState = {
  employees: [],
}

type Action = {type: "ADD_EMPLOYEE"}
const GET_EMPLOYEES = 'Get_EMPLOYEE'

export default function addEmployee(state:EmployeeState = initialState, action:Add) {
  switch(action.type) {
    case "ADD_EMPLOYEE":
      return {
        ...state,
        employees: action.payload
      }
    default:
      return state
  }
}