import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { departements } from '../../utils/departements'
import { selectEmployee } from '../../utils/selectors'
import { states } from '../../utils/states'
import Dropdown from '../Dropdown'
import Input from '../Input'
import * as EmployeeListActions from '../../features/employeelist'
import DatePicker from '../DatePicker'

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
            <DatePicker name={'date-of-birth'} field={'birthDate'}>
                Date of Birth
            </DatePicker>
            <DatePicker name={'start-date'} field={'startDate'}>
                Start Date
            </DatePicker>
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
