import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Filter from '../../components/Filter'
import Paging from '../../components/Paging'
import Table from '../../components/Table'
import { setFilter } from '../../features/table'
import { selectEmployeeList } from '../../utils/selectors'
import {
    EmployeeListContainer,
    EmployeeListSubTitle,
    EmployeeListTitle,
    LeftPannel,
    RightPannel,
    StyledLink,
} from './style'

function EmployeeList() {
    const employeeList = useSelector(selectEmployeeList).employees
    const dispatch = useDispatch()
    dispatch(setFilter(employeeList))

    return (
        <EmployeeListContainer>
            <LeftPannel>
                <EmployeeListTitle>HRnet</EmployeeListTitle>
                <StyledLink to={'/'}>Home</StyledLink>
            </LeftPannel>
            <RightPannel>
                <EmployeeListSubTitle>Current Employees</EmployeeListSubTitle>
                <Filter />
                <Table />
                <Paging />
            </RightPannel>
        </EmployeeListContainer>
    )
}

export default EmployeeList
