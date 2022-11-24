import React from "react";
import styled from "styled-components";
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
  color: gray
  border:none;
  margin-right: 10px;
  margin-left: 10px;
  padding: 10px;
  option {
    color: black;
    background: white;
    display: flex;
    white-space: pre;
    min-height: 20px; 
    padding: 0px 2px 1px;
  }
`

export const ManageEmployee = () => {
  return (
    <TableRow>
      <TableData><Input placeholder="name"/></TableData>
      <TableData><Input type="date" placeholder="dob"/></TableData>
      <TableData><Select>
        <option value="1">MALE</option>
        <option value="2">FEMALE</option>
      </Select></TableData>
      <TableData><Input type="Number" placeholder="salary"/></TableData>
      <TableData><SaveIcon /></TableData>
      <TableData><CancelIcon /></TableData>
    </TableRow>
  )
}