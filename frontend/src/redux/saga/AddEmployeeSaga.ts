import { PayloadAction } from '@reduxjs/toolkit';
import { AnyAction } from 'redux';
import { call, CallEffect, put, PutEffect, takeEvery } from 'redux-saga/effects';
import { EmployeeFields } from '../../components/Employee/Employee';

const addApiUrl = `http://localhost:5000/addEmployee`;

// Add employee

const addEmployeeData = (data: EmployeeFields) => {
  return fetch(addApiUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  }).then(response => response.json())
  .catch((error) => {throw error})
}

export function* addEmployee(action: PayloadAction<EmployeeFields>): 
Generator<CallEffect<EmployeeFields> | PutEffect<AnyAction>, void, EmployeeFields > {
  const { payload } = action;
  try{
    const employees = yield call(addEmployeeData, payload);
    yield put({type: 'ADD_EMPLOYEES', payload: employees})
  } catch(e: any) {
    yield put({ type: 'ADD_EMPLOYEE_FAILED', message: e.message})
  }
}

export function* watchAddEmployee() {
  yield takeEvery('ADD_EMPLOYEE', addEmployee)
}