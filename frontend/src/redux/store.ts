import { configureStore } from '@reduxjs/toolkit'
import employees from './reducers/employeeReducer';

const store = configureStore({ employees });

export default store;