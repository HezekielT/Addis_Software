import { Delete } from "../actions/employeeAction"

interface EmployeeState {
  employees: string[]
}
const initialState = {
  employees: ["string"],
}

export default function deleteEmployee(state:EmployeeState = initialState, action:Delete) {
  switch(action.type) {
    case "DELETE_EMPLOYEE":
      return {
        ...state,
        employees: action.payload
      }
    default:
      return state
  }
}