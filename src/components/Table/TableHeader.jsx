import React from 'react'
import Sort from '../Sort'
import { TableHeaderCell } from './style'

function TableHeader({ listSorted, setListSorted }) {
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
            <TableHeaderCell>
                {header.name}{' '}
                <div>
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
                </div>
            </TableHeaderCell>
        </th>
    ))
}

export default TableHeader
