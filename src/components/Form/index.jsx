import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { selectEmployee } from '../../utils/selectors'
import Input from '../Input'

const StyledForm = styled.form``

function Form({ setOpen }) {
    const employee = useSelector(selectEmployee)
    const handleSubmit = (e) => {
        e.preventDefault()
        setOpen(true)
    }
    return (
        <form>
            <Input name={'first-name'} field={'firstName'}>
                First Name
            </Input>
            <Input name={'last-name'} field={'lastName'}>
                Last Name
            </Input>
            <Input name={'date-of-birth'} field={'birthDate'}>
                Date of Birth
            </Input>
            <Input name={'start-date'} field={'startDate'}>
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
                <Input name={'zip-code'} field={'zipCode'}>
                    Zip Code
                </Input>
            </fieldset>
            <button type="submit" onClick={handleSubmit}>
                Save
            </button>
        </form>
    )
}

export default Form
