interface EmployeeState {
  employees: string[]
}
const initialState = {
  employees: [],
}

type Action = {type: "ADD_EMPLOYEE"}
const GET_EMPLOYEES = 'Get_EMPLOYEE'

export default function employees(state:EmployeeState = initialState, action) {
  switch(action.type) {
    case type.GET_EMPLOYEES:
      return {
        ...state,
        employees: action.payload
      }
    default:
      return state
  }
}