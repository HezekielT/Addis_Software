import React from 'react';
import { Button,PlusIcon, Container, Table, TableData, TableHeader, TableRow } from './Employee.style';
import {Edit } from '@styled-icons/boxicons-solid'
import { Delete} from '@styled-icons/material-outlined'

type EmployeeProps = {
  id: string,
  name: string,
  dob: Date,
  gender: string,
  salary: number
}

const Employee:React.FC = () => {
  return (
    <Container>
      <Table>
        <TableRow>
          <TableHeader>Name</TableHeader>
          <TableHeader>Date of Birth</TableHeader>
          <TableHeader>Gender</TableHeader>
          <TableHeader>Salary</TableHeader>
        </TableRow>
        <TableRow>
          <TableData>Name</TableData>
          <TableData>Date of Birth</TableData>
          <TableData>Gender</TableData>
          <TableData>Salary</TableData>
          <TableData><Edit /></TableData>
          <TableData><Delete /></TableData>
        </TableRow>
        <TableRow>
          <TableData>Name</TableData>
          <TableData>Date of Birth</TableData>
          <TableData>Gender</TableData>
          <TableData>Salary</TableData>
          <TableData><Edit /></TableData>
          <TableData><Delete /></TableData>
        </TableRow>
        <TableRow>
          <TableData>Name</TableData>
          <TableData>Date of Birth</TableData>
          <TableData>Gender</TableData>
          <TableData>Salary</TableData>
          <TableData><Edit /></TableData>
          <TableData><Delete /></TableData>
        </TableRow>
      </Table>
      <Button><PlusIcon />ADD Employee</Button>
    </Container>
  );
};

export default Employee;