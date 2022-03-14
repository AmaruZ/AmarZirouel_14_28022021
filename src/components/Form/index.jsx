import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { departements } from '../../utils/departements'
import { selectEmployee } from '../../utils/selectors'
import { states } from '../../utils/states'
import Dropdown from '../Dropdown'
import Input from '../Input'
import * as EmployeeListActions from '../../features/employeelist'

const StyledForm = styled.form``

function Form({ setOpen }) {
    const employee = useSelector(selectEmployee)
    const dispatch = useDispatch()
    const handleSubmit = (e) => {
        e.preventDefault()
        setOpen(true)
        dispatch(EmployeeListActions.addEmployee(employee))
    }
    return (
        <StyledForm>
            <Input name={'first-name'} field={'firstName'}>
                First Name
            </Input>
            <Input name={'last-name'} field={'lastName'}>
                Last Name
            </Input>
            <Input name={'date-of-birth'} field={'birthDate'} type="date">
                Date of Birth
            </Input>
            <Input name={'start-date'} field={'startDate'} type="date">
                Start Date
            </Input>
            <fieldset>
                <legend>Address</legend>
                <Input name={'street'} field={'street'}>
                    Street
                </Input>
                <Input name={'city'} field={'city'}>
                    City
                </Input>
                <Dropdown label={'State'} field={'state'} data={states} />
                <Input name={'zip-code'} field={'zipCode'}>
                    Zip Code
                </Input>
            </fieldset>
            <Dropdown
                label={'Departement'}
                field={'departement'}
                data={departements}
            />
            <button type="submit" onClick={handleSubmit}>
                Save
            </button>
        </StyledForm>
    )
}

export default Form
