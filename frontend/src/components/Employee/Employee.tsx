import React from 'react';
import { Container, Table, TableData, TableHeader, TableRow } from './Employee.style';

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
          <TableData>Gender</TableData>
          <TableData>Salary</TableData>
        </TableRow>
        <TableRow>
          <TableData>Name</TableData>
          <TableData>Date of Birth</TableData>
          <TableData>Gender</TableData>
          <TableData>Salary</TableData>
        </TableRow>
        <TableRow>
          <TableData>Name</TableData>
          <TableData>Date of Birth</TableData>
          <TableData>Gender</TableData>
          <TableData>Salary</TableData>
        </TableRow>
      </Table>
    </Container>
  );
};

export default Employee;