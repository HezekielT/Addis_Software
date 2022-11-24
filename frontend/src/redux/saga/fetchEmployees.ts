import { call, put, takeEvery } from 'redux-saga/effects';
import { Get } from '../actions/employeeAction';

const apiUrl = `http://localhost:5000/getEmployees`

const getApi = () => {
  return fetch(apiUrl, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(response => response.json())
  .catch((error) => {throw error})
}

function* fetchEmployees(action: Get) {
  try{
    const employees:string = yield call(getApi);
    yield put({type: 'GET_EMPLOYEES', Employees: employees})
  } catch(e: any) {
    yield put({ type: 'GET_EMPLOYEES_FAILED', message: e.message})
  }
}

function* employeeSaga() {
  yield takeEvery('GET_EMPLOYEES_REQUESTED', fetchEmployees)
}

export default employeeSaga;