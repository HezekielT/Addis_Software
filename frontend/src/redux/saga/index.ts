import { all, fork } from 'redux-saga/effects'
import watchFetchEmployee from './GetEmployeeSaga'
import watchAddEmployee from './AddEmployeeSaga'

export default function* rootSaga() {
  yield all([
    watchFetchEmployee(),
    watchAddEmployee()
  ])
}