import styled from "styled-components";
import { Plus } from '@styled-icons/bootstrap'

export const Container = styled.div`
  max-width: 976px;
  margin: auto;
  padding-top: 50px;
`

export const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
  margin-bottom: 10px;
`

export const TableHeader = styled.th`
  text-align: left;
  padding: 8px;
`

export const TableData = styled.td`
  text-align: left;
  padding: 8px;
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
export const PlusIcon = styled(Plus)`
  padding: 2px;
`