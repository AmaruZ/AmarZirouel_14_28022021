import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Filter from '../../components/Filter'
import Paging from '../../components/Paging'
import Table from '../../components/Table'
import { setFilter } from '../../features/table'
import { selectEmployeeList } from '../../utils/selectors'

function EmployeeList() {
    const employeeList = useSelector(selectEmployeeList).employees
    const dispatch = useDispatch()
    dispatch(setFilter(employeeList))

    return (
        <main>
            <h1>Current Employees</h1>
            <Filter />
            <Table />
            <Paging />
            <Link to={'/'}>Home</Link>
        </main>
    )
}

export default EmployeeList
