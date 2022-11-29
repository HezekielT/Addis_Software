 import React, { useState } from "react";
import styled from "styled-components";
import { EmployeeFields, ResetFunction } from "./Employee";
import { v4 as uuidV4 } from "uuid";
import { CancelIcon, SaveIcon, TableData, TableRow } from "./Employee.style";

const Input = styled.input`
  padding: 5px;
  margin-right: 10px;
  &:onFocus {
    border: 2px solid hsl(222,47%,11%);

  }
`

const Select = styled.select`
  background: white;
  color: gray;
  border:2px solid gray;
  margin-right: 10px;
  margin-left: 10px;
  padding: 10px;
  option {
    color: black;
    background: white;
    border:2px solid gray;
    display: flex;
    white-space: pre;
    min-height: 20px; 
    padding: 0px 2px 1px;
  }
`

export const ManageEmployee: React.FC<EmployeeFields & ResetFunction | never> = ({id, name, dob, gender, salary, resetRow}) => {

  const [employeeData, setEmployeeData] = useState({
    nameField: name !== undefined ? name : '',
    dobField: dob !== undefined ? dob : '',
    genderField: gender !== undefined ? gender : '',
    salaryField: salary !== undefined ? salary : 0,
  });



  function updateForm (value: string | number) {
    return setEmployeeData((prev) => {
      return { ...prev, value};
    });
  }
  const saveEmployeeData = () => {
    if(id !== undefined) {
      // this is where i call update action
      console.log(name," -", dob, " -",gender, "-", salary)
    } else {
      const eid = uuidV4();
      // console.log(eid,"-",employeeData.nameField," -", employeeData.dobField, " -",employeeData.genderField, "-", employeeData.salaryField)

    }
  }

  return (
    <TableRow>
      <TableData><Input type="text" value={employeeData.nameField} placeholder={name ? name : "name"} onChange={(e) => updateForm(employeeData.nameField = e.target.value)}/></TableData>
      <TableData><Input type="date" value={employeeData.dobField} placeholder={dob ? dob : "dob"} onChange={(e) => updateForm(employeeData.dobField = e.target.value)}/></TableData>
      <TableData>
        <Select onChange={(e) => updateForm(employeeData.genderField = e.target.value)}>
          <option value="male" selected={gender && gender==='male' ? true : false}>MALE</option>
          <option value="female" selected={gender && gender==='female' ? true : false}>FEMALE</option>
        </Select>
      </TableData>
      <TableData><Input type="Number" placeholder={salary?.toString()} value={employeeData.salaryField} onChange={(e) => updateForm(employeeData.salaryField = Number(e.target.value))}/></TableData>
      <TableData><SaveIcon onClick={() => saveEmployeeData()}/></TableData>
      <TableData><CancelIcon onClick={() => {resetRow(false) }}/></TableData>
    </TableRow>
  )
}