import React, { useEffect, useMemo, useState } from 'react'
import { useSelector } from 'react-redux'
import { selectTable } from '../../utils/selectors'
import { TableCell, TableContainer, TableRow } from './style'
import TableHeader from './TableHeader'

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
                        <TableCell>{employee.zipcode}</TableCell>
                    </TableRow>
                )
            }),
        [listSliced]
    )
    return (
        <TableContainer>
            <thead>
                <tr>
                    {
                        <TableHeader
                            listSorted={listSorted}
                            setListSorted={setListSorted}
                        />
                    }
                </tr>
            </thead>
            <tbody>{rows}</tbody>
        </TableContainer>
    )
}

export default Table
