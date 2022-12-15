import { PayloadAction } from '@reduxjs/toolkit';
import { AnyAction } from 'redux';
import { call, CallEffect, put, PutEffect, takeEvery } from 'redux-saga/effects';
import { EmployeeFields } from '../../components/Employee/Employee';

const deleteApiUrl = `http://localhost:5000/deleteEmployee`;
