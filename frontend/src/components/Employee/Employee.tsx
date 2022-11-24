import React from 'react';
import { Button, Container, Table, 
  TableData, TableHeader, TableRow, DeleteIcon,EditIcon } from './Employee.style';
import { ManageEmployee } from './ManageEmployee';


type EmployeeProps = {
  id: string,
  name: string,
  dob: Date,
  gender: string,
  salary: number
}

const Employee:React.FC = () => {
  // const employees = useSelector<EmployeeState, EmployeeState["employees"]>((state) => state.employees)
  // const dispatch = useDispatch()

  // const onEditEmployee = (employee: EmployeeProps) => {
  //   dispatch(editEmployee(employee))
  // }

  return (
    <Container>
      <Table>
        <TableRow>
          <TableHeader>Name</TableHeader>
          <TableHeader>Date of Birth</TableHeader>
          <TableHeader>Gender</TableHeader>
          <TableHeader>Salary</TableHeader>
        </TableRow>
        {/* {employees.map((employee) => {
          return (
            <TableRow id={employee.id}>
              <TableData>{employee.name}</TableData>
              <TableData>{employee.dob}</TableData>
              <TableData>{employee.gender}</TableData>
              <TableData>{employee.salary}</TableData>
              <TableData onClick={() => onEditEmployee(employee)}><Edit /></TableData>
              <TableData onClick={() => console.log("clicked by you")}><Delete /></TableData>
            </TableRow>
          )
        })} */}
        {/* <NewEmployee /> */}
        <TableRow>
          <TableData>employee.name</TableData>
          <TableData>employee.dob</TableData>
          <TableData>employee.gender</TableData>
          <TableData>employee.salary</TableData>
          <TableData><EditIcon /></TableData>
          <TableData onClick={() => console.log("clicked by you")}><DeleteIcon /></TableData>
        </TableRow>
        <TableRow>
          <TableData>employee.name</TableData>
          <TableData>employee.dob</TableData>
          <TableData>employee.gender</TableData>
          <TableData>employee.salary</TableData>
          <TableData><EditIcon /></TableData>
          <TableData onClick={() => console.log("clicked by you")}><DeleteIcon /></TableData>
        </TableRow>
      </Table>
    </Container>
  )
  
  };

export default Employee;