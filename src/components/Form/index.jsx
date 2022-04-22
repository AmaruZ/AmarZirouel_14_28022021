import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { departements } from '../../utils/departements'
import { selectEmployee } from '../../utils/selectors'
import { states } from '../../utils/states'
import Dropdown from '../Dropdown'
import Input from '../Input'
import DatePicker from '../DatePicker'
import { addEmployee } from '../../features/employeelist'
import { FormContainer, InputsWrapper, SaveButton } from './style'
import { resetFields } from '../../features/employee'

/**
 *
 * @param {Object} props
 * @param {Function} props.setOpen
 * @returns
 */

function Form({ setOpen }) {
    const employee = useSelector(selectEmployee)
    const dispatch = useDispatch()
    const firstNameRef = useRef()
    const formRef = useRef()
    const handleSubmit = (e) => {
        if (formRef.current.checkValidity()) {
            e.preventDefault()
            setOpen(true)
            dispatch(addEmployee(employee))
            dispatch(resetFields())
            firstNameRef.current.value = ''
        } else formRef.current.reportValidity()
    }
    return (
        <FormContainer ref={formRef}>
            <InputsWrapper>
                <Input
                    name={'first-name'}
                    field={'firstName'}
                    _ref={firstNameRef}
                >
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
        </FormContainer>
    )
}

export default Form
