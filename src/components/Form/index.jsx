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
import { resetFormFields } from './utils'

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
    const lastNameRef = useRef()
    const birthDateRef = useRef()
    const startDateRef = useRef()
    const streetRef = useRef()
    const cityRef = useRef()
    const zipCodeRef = useRef()
    const formRef = useRef()

    const handleSubmit = (e) => {
        if (formRef.current.checkValidity()) {
            e.preventDefault()
            setOpen(true)
            dispatch(addEmployee(employee))
            dispatch(resetFields())
            resetFormFields(
                firstNameRef,
                lastNameRef,
                birthDateRef,
                startDateRef,
                streetRef,
                cityRef,
                zipCodeRef
            )
        } else formRef.current.reportValidity()
    }

    return (
        <FormContainer ref={formRef}>
            <InputsWrapper>
                <Input
                    name={'first-name'}
                    field={'firstName'}
                    _ref={firstNameRef}
                    pattern={'[A-Z]+[a-z]+'}
                >
                    First Name
                </Input>
                <Input
                    name={'last-name'}
                    field={'lastName'}
                    _ref={lastNameRef}
                    pattern={'[A-Z]+[a-z]+'}
                >
                    Last Name
                </Input>
            </InputsWrapper>
            <InputsWrapper>
                <DatePicker
                    name={'date-of-birth'}
                    field={'birthDate'}
                    _ref={birthDateRef}
                    pattern={'[0-9]{2}/[0-9]{2}/[0-9]{4}'}
                >
                    Date of Birth
                </DatePicker>
                <DatePicker
                    name={'start-date'}
                    field={'startDate'}
                    _ref={startDateRef}
                    pattern={'[0-9]{2}/[0-9]{2}/[0-9]{4}'}
                >
                    Start Date
                </DatePicker>
            </InputsWrapper>
            <fieldset style={{ border: 'none' }}>
                <legend style={{ fontWeight: 'bold', marginBottom: '10px' }}>
                    Address
                </legend>
                <Input
                    name={'street'}
                    field={'street'}
                    width={'long'}
                    _ref={streetRef}
                >
                    Street
                </Input>
                <InputsWrapper>
                    <Input name={'city'} field={'city'} _ref={cityRef}>
                        City
                    </Input>
                    <Input
                        name={'zip-code'}
                        field={'zipCode'}
                        _ref={zipCodeRef}
                        pattern={'[0-9]+'}
                    >
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
