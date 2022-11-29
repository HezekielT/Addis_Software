import { call, put, takeEvery } from 'redux-saga/effects';
import { Add } from '../actions/employeeAction';

const apiUrl = `http://localhost:5000/addEmployee`

const addApi = () => {
  return fetch(apiUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    // body: employee
  }).then(response => response.json())
  .catch((error) => {throw error})
}

function* fetchEmployees(action: Add) {
  try{
    const employees:string = yield call(addApi);
    yield put({type: 'GET_EMPLOYEES', Employees: employees})
  } catch(e: any) {
    yield put({ type: 'GET_EMPLOYEES_FAILED', message: e.message})
  }
}

function* employeeSaga() {
  yield takeEvery('GET_EMPLOYEES_REQUESTED', fetchEmployees)
}

export default employeeSaga;