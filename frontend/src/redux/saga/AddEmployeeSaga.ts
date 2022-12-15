import { PayloadAction } from '@reduxjs/toolkit';
import { AnyAction } from 'redux';
import { call, CallEffect, fork, ForkEffect, put, PutEffect, takeEvery } from 'redux-saga/effects';
import { EmployeeFields } from '../../components/Employee/Employee';

import axios, { AxiosPromise } from 'axios';
const addApiUrl = "http://localhost:5000/addEmployee"; 


// Add employee xaiAqAWJgyVaK91N

// const addData = async (data: EmployeeFields) => {
//   // axios.request, {
//   //   url: `${addApiUrl}`,
//   //   method: "post",
//   //   data: data
//   // }
//   console.log("Just so you know", data)
//   await axios.post("http://localhost:5000/addEmployee", data)
//     .then(response => {console.log(response.data.data)})
// }

function* addEmployee(action: PayloadAction<EmployeeFields>):
 Generator<CallEffect<any> | void | void>{
  const { payload } = action;
  try {

    console.log("typeof",typeof payload);
    const res: any = yield addData(payload)
    console.log(res.next())
    console.log("Hahaha")
    // yield put({type: 'ADD_EMPLOYEE', payload: payload})
  } catch(e){
    console.log("error")
  }

}

function* watchAddEmployee() {
  yield takeEvery('ADD_EMPLOYEE', addEmployee)
}


export default watchAddEmployee;

function* addData(payload: EmployeeFields) {
  // throw new Error('Function not implemented.');
  axios.post("http://localhost:5000/addEmployee", payload)
    .then(response => {console.log(response.data.data)})
}
