import { Update } from "../actions/employeeAction"

interface EmployeeState {
  employees: string[]
}
const initialState = {
  employees: [],
}

export default function updateEmployee(state:EmployeeState = initialState, action:Update) {
  switch(action.type) {
    case "UPDATE_EMPLOYEE":
      return {
        ...state,
        employees: action.payload
      }
    default:
      return state
  }
}