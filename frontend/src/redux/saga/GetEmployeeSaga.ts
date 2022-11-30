import { call, put, takeEvery } from 'redux-saga/effects';
import { EmployeeFields } from '../../components/Employee/Employee';

const fetchApiUrl = `http://localhost:5000/getEmployees`;
const deleteApiUrl = `http://localhost:5000/deleteEmployee`;

// Fetch employees
const getEmployeesList = () => {
  return fetch(fetchApiUrl, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(response => response.json())
  .catch((error) => {throw error})
}

export function* fetchEmployees() {
  try{
    const employees: EmployeeFields[] = yield call(getEmployeesList);
    yield put({type: 'GET_EMPLOYEES', employees: employees})
  } catch(e: any) {
    yield put({ type: 'GET_EMPLOYEES_FAILED', message: e.message})
  }
}

export function* watchFetchEmployee() {
  yield takeEvery('GET_EMPLOYEES', fetchEmployees)
}

