import React from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import * as employeeAction from '../../features/employee'

const StyledLabel = styled.label`
    display: flex;
    flex-direction: column;
    margin: 10px 0px;
`

function Input({ name, field, children }) {
    const dispatch = useDispatch()
    const handleChange = (e) => {
        dispatch(employeeAction.changeField(field, e.target.value))
    }
    return (
        <div>
            <StyledLabel htmlFor={name}>{children}</StyledLabel>
            <input type={'text'} id={name} onChange={handleChange} />
        </div>
    )
}

export default Input
