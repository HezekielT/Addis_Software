
export function getEmployees(employees) {
  return {
    type: type.GET_EMPLOYEES,
    payload: employees,
  }
}