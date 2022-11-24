export type Add = {type: "ADD_EMPLOYEE", payload: string};
export type Delete = {type: "DELETE_EMPLOYEE", payload: string}
export type Update = {type: "UPDATE_EMPLOYEE", payload: string}
export type Get = {type: "GET_EMPLOYEES", payload: string}

export const addEmployees = (employee: string): Add => ({
  type: "ADD_EMPLOYEE",
  payload: employee,
})

export const deleteEmployee = (employee: string): Delete => ({
  type: "DELETE_EMPLOYEE",
  payload: employee,
})

export const updateEmployee = (employee: string): Update => ({
  type: "UPDATE_EMPLOYEE",
  payload: employee,
})

export const getEmployees = (employees: string): Get => ({
  type: "GET_EMPLOYEES",
  payload: employees,
})