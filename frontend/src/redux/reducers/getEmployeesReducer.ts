import { Get } from "../actions/employeeAction"

interface EmployeeState {
  employees: string[]
}
const initialState = {
  employees: [],
}

export default function getEmployees(state:EmployeeState = initialState, action:Get) {
  switch(action.type) {
    case "GET_EMPLOYEES":
      return {
        ...state,
        employees: action.payload
      }
    default:
      return state
  }
}