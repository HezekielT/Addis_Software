import styled from "styled-components";
import { Edit } from '@styled-icons/boxicons-solid'
import { Delete} from '@styled-icons/material-outlined'
import { Save } from '@styled-icons/boxicons-regular';
import { Cancel } from '@styled-icons/material-outlined'


export const Container = styled.div`
  max-width: 976px;
  margin: auto;
  padding-top: 50px;
`
export const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
  margin-bottom: 10px;
  overflow-x: auto;
`

export const TableHeader = styled.th`
  text-align: left;
  padding: 8px;
`

export const TableData = styled.td`
  text-align: left;
  padding: 15px;
  &:hover {
    cursor: pointer;
  }
`

export const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: hsl(215, 20%, 65%);
  }
`
export const Button = styled.button`
  display: flex;
  margin: auto;
  padding: 10px;
  width: auto;
  color: white;
  background-color: hsl(222,47%,11%);
  &:hover {
    cursor: pointer;
  }

`
export const EditIcon = styled(Edit)`
width: 25px;
margin: auto;
`
export const DeleteIcon = styled(Delete)`
width: 25px;
margin: auto;
`

export const SaveIcon = styled(Save)`
width: 25px;
margin: auto;
`
export const CancelIcon = styled(Cancel)`
width: 25px;
margin: auto;
`

// export const PlusIcon = styled(Plus)`
//   padding: 2px;
// `

// export const EditIcon = styled(Edit)`
//   width: 5%;
// `