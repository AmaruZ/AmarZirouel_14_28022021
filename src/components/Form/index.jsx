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

const StyledForm = styled.form`
    margin-top: 30px;
`

const InputsWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    width: 550px;
`
const SaveButton = styled.button`
    width: 150px;
    height: 40px;
    font-size: 1.05em;
    color: white;
    background: #0575ff;
    margin-top: 28px;
    margin-right: 50px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    &:hover {
        background: #0063dd;
    }
`
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
            <InputsWrapper>
                <Input name={'first-name'} field={'firstName'}>
                    First Name
                </Input>
                <Input name={'last-name'} field={'lastName'}>
                    Last Name
                </Input>
            </InputsWrapper>
            <InputsWrapper>
                <DatePicker name={'date-of-birth'} field={'birthDate'}>
                    Date of Birth
                </DatePicker>
                <DatePicker name={'start-date'} field={'startDate'}>
                    Start Date
                </DatePicker>
            </InputsWrapper>
            <fieldset style={{ border: 'none' }}>
                <legend style={{ fontWeight: 'bold', marginBottom: '10px' }}>
                    Address
                </legend>
                <Input name={'street'} field={'street'} width={'long'}>
                    Street
                </Input>
                <InputsWrapper>
                    <Input name={'city'} field={'city'}>
                        City
                    </Input>
                    <Input name={'zip-code'} field={'zipCode'}>
                        Zip Code
                    </Input>
                </InputsWrapper>
                <Dropdown label={'State'} field={'state'} data={states} />
            </fieldset>
            <InputsWrapper>
                <Dropdown
                    label={'Departement'}
                    field={'departement'}
                    data={departements}
                />
                <SaveButton type="submit" onClick={handleSubmit}>
                    Save
                </SaveButton>
            </InputsWrapper>
        </StyledForm>
    )
}

export default Form
