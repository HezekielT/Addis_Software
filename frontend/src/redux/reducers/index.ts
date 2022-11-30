import { combineReducers } from "redux";
import processEmployeeData from "./employeeReducer"

const rootReducer = combineReducers({
  processEmployeeData: processEmployeeData,
})

export default rootReducer;