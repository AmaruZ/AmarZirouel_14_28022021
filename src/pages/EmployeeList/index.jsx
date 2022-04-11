import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Filter from '../../components/Filter'
import Paging from '../../components/Paging'
import Table from '../../components/Table'
import { setFilter } from '../../features/table'
import { selectEmployeeList } from '../../utils/selectors'
import styled from 'styled-components'
import { fetchEmployees } from '../../services'
import { addEmployee } from '../../features/employeelist'

const EmployeeListContainer = styled.main`
    display: flex;
    height: 100vh;
`
const LeftPannel = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 25vw;
    background: #0053b8;
`
const StyledLink = styled(Link)`
    color: white;
    margin-top: 100px;
    &:hover {
        text-decoration: none;
    }
`
const EmployeeListTitle = styled.h1`
    color: white;
    margin-top: 50px;
`
const EmployeeListSubTitle = styled.h2`
    margin-bottom: 20px;
`
const RightPannel = styled.div`
    display: flex;
    flex-direction: column;
    margin: 50px 0 0 100px;
`
function EmployeeList() {
    const dispatch = useDispatch()

    useEffect(() => {
        const getEmployees = async () => {
            const employeesList = await fetchEmployees()
            dispatch(setFilter(employeesList))
            employeesList.map((employee) => dispatch(addEmployee(employee)))
        }
        getEmployees()
    }, [dispatch])
    return (
        <EmployeeListContainer>
            <LeftPannel>
                <EmployeeListTitle>HRnet</EmployeeListTitle>
                <StyledLink to={'/'}>Home</StyledLink>
                <StyledLink to={'/login'}>Login</StyledLink>
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
