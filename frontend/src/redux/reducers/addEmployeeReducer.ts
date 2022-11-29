import { EmployeeFields } from "../../components/Employee/Employee"
import { Add } from "../actions/employeeAction"

interface EmployeeState {
  employees: EmployeeFields[]
}
const initialState = {
  employees: [],
}

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