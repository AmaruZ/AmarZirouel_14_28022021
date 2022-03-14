import React, { useEffect, useMemo, useState } from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { selectTable } from '../../utils/selectors'
import Sort from '../Sort'

const TableRow = styled.tr`
    &:nth-child(2n) {
        background: #f4f4f4;
    }
`
const TableCell = styled.td`
    padding: 5px 0;
`

function Table() {
    const entries = useSelector(selectTable).entries
    const startIndex = useSelector(selectTable).startIndex
    const filter = useSelector(selectTable).filteredEmployees
    const [listSorted, setListSorted] = useState([])
    const [listSliced, setListSliced] = useState([])
    useEffect(() => {
        setListSorted(
            filter.slice().sort((a, b) => {
                if (a.firstName.toLowerCase() > b.firstName.toLowerCase())
                    return 1
                else if (a.firstName.toLowerCase() < b.firstName.toLowerCase())
                    return -1
                else {
                    return 0
                }
            })
        )
    }, [filter, setListSorted])
    useEffect(() => {
        setListSliced(listSorted.slice(startIndex, startIndex + entries))
    }, [setListSliced, startIndex, entries, listSorted, filter])
    const rows = useMemo(
        () =>
            listSliced.map((employee, index) => {
                return (
                    <TableRow key={index}>
                        <TableCell>{employee.firstName}</TableCell>
                        <TableCell>{employee.lastName}</TableCell>
                        <TableCell>{employee.startDate}</TableCell>
                        <TableCell>{employee.departement}</TableCell>
                        <TableCell>{employee.birthDate}</TableCell>
                        <TableCell>{employee.street}</TableCell>
                        <TableCell>{employee.city}</TableCell>
                        <TableCell>{employee.state}</TableCell>
                        <TableCell>{employee.zipCode}</TableCell>
                    </TableRow>
                )
            }),
        [listSliced]
    )
    return (
        <table>
            <thead>
                <tr>
                    {
                        <Header
                            listSorted={listSorted}
                            setListSorted={setListSorted}
                        />
                    }
                </tr>
            </thead>
            <tbody>{rows}</tbody>
        </table>
    )
}

function Header({ listSorted, setListSorted }) {
    const headers = [
        { name: 'First Name', field: 'firstName' },
        { name: 'Last Name', field: 'lastName' },
        { name: 'Start Date', field: 'startDate' },
        { name: 'Departement', field: 'departement' },
        { name: 'Date of Birth', field: 'birthDate' },
        { name: 'Street', field: 'street' },
        { name: 'City', field: 'city' },
        { name: 'State', field: 'state' },
        { name: 'Zip Code', field: 'zipCode' },
    ]
    return headers.map((header) => (
        <th key={header.name}>
            {header.name}{' '}
            <Sort
                attribute={header.field}
                type={'ascendant'}
                array={listSorted}
                setListSorted={setListSorted}
            />
            <Sort
                attribute={header.field}
                type={'descendant'}
                array={listSorted}
                setListSorted={setListSorted}
            />
        </th>
    ))
}

export default Table
