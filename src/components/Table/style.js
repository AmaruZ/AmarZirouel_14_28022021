import styled from 'styled-components'

export const TableContainer = styled.table`
    margin-bottom: 10px;
`
export const TableHeaderCell = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`
export const TableRow = styled.tr`
    &:nth-child(2n) {
        background: #f4f4f4;
    }
    &:hover {
        background: #e8f2ff;
    }
`
export const TableCell = styled.td`
    padding: 5px 0 5px 10px;
`
