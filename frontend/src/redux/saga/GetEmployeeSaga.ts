import { AnyAction } from 'redux';
import { call, CallEffect, put, PutEffect, takeEvery } from 'redux-saga/effects';
import { EmployeeFields } from '../../components/Employee/Employee';

const fetchApiUrl = `http://localhost:5000/getEmployees`;

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

function* getEmployees():
Generator<CallEffect<EmployeeFields[]> | PutEffect<AnyAction>, void, EmployeeFields > {
  try{
    const employees = yield call(getEmployeesList);
    console.log("This is a call", employees)
    yield put({type: 'GET_EMPLOYEES', employees: employees})
  } catch(e: any) {
    yield put({ type: 'GET_EMPLOYEES_FAILED', message: e.message})
  }
}

function* watchFetchEmployee() {
  yield takeEvery('GET_EMPLOYEES', getEmployees)
}

export default watchFetchEmployee;