import React, { useEffect, useState } from 'react';
import { Button, Container, Table, 
  TableData, TableHeader, TableRow, 
  DeleteIcon, EditIcon, PlusIcon } from './Employee.style';
import { useSelector, useDispatch } from 'react-redux';
import { ManageEmployee } from './ManageEmployee';
import { deleteEmployee, getEmployees } from '../../redux/actions/employeeActions';
import { EmployeesState } from '../../redux/reducers/employeeReducer';


export type EmployeeFields = {
  id?: string,
  name?: string,
  dob?: string,
  gender?: string,
  salary?: number,
  
}
export type ResetFunction = {
  resetRow(val: boolean): void,
}

const Employee:React.FC = () => {
  const [editRow, setEditRow] = useState(false)
  const [addRow, setAddRow] = useState(false)
  const [eid, setEid] = useState('')

  const changeRow = (empid: string) => {
    setEditRow(true);
    setEid(empid);
  }

  const resetRow = (val : boolean) => {
    setEditRow(false);
    setAddRow(false);
  }
  const dispatch = useDispatch();
  const employees = useSelector<EmployeesState, EmployeesState["employees"]>((state) => state.employees)


  useEffect(() => {
    dispatch(getEmployees())
  },[])

  console.log(employees,"Employees")

  return (
    <Container>
      <Table>
        <TableRow>
          <TableHeader>Name</TableHeader>
          <TableHeader>Date of Birth</TableHeader>
          <TableHeader>Gender</TableHeader>
          <TableHeader>Salary</TableHeader>
        </TableRow>
        {(employees !== undefined) ? (
          employees.map((employee: EmployeeFields) => {
            return (
              (editRow && employee.id === eid) ? (
                <ManageEmployee id={employee.id} name={employee.name} 
                dob={employee.dob} gender={employee.gender} 
                salary={employee.salary} resetRow={resetRow}
                />
               ) : (
                <TableRow id={employee.id}>
                  <TableData>{employee.name}</TableData>
                  <TableData>{employee.dob}</TableData>
                  <TableData>{employee.gender}</TableData>
                  <TableData>{employee.salary}</TableData>
                  <TableData onClick={() => employee.id ? changeRow(employee.id) : null}><EditIcon /></TableData>
                  <TableData onClick={() => dispatch(deleteEmployee(employee.id))}><DeleteIcon /></TableData>
                </TableRow>
               )
            )
          })
        ) : (<label>No Employees found, Please add a new employee</label>)}
        {/*  */}
        {(addRow) ? (<ManageEmployee resetRow={resetRow}/>) : (<></>)}
      </Table>
      <Button onClick={() => { setAddRow(true)}}><PlusIcon />ADD Employee</Button>
    </Container>
  )
  
  };

export default Employee;