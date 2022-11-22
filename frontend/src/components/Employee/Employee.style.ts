import styled from "styled-components";

export const Container = styled.div`
  max-width: 976px;
  margin: auto;
  padding-top: 50px;
`

export const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
`

export const TableHeader = styled.th`
  text-align: left;
  padding: 8px;
`

export const TableData = styled.td`
  text-align: left;
  padding: 8px;
`

export const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: hsl(215, 20%, 65%);
  }
`