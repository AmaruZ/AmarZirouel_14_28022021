import React from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import * as employeeAction from '../../features/employee'

const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
`
const StyledLabel = styled.label`
    margin-bottom: 10px;
    font-weight: 600;
`
const StyledInput = styled.input`
    width: ${(props) => (props.$width === 'long' ? '100%' : '250px')};
    height: 40px;
    margin-bottom: 10px;
    padding-left: 10px;
    font-size: 1.1em;
    border-radius: 5px;
    border: solid 1px lightgrey;
    &:focus-visible {
        outline: solid 2px #c9deff;
    }
`

function Input({ name, field, children, type = 'text', width }) {
    const dispatch = useDispatch()
    const handleChange = (e) => {
        dispatch(employeeAction.changeField(field, e.target.value))
    }
    return (
        <InputContainer>
            <StyledLabel htmlFor={name}>{children}</StyledLabel>
            <StyledInput
                type={type}
                id={name}
                onChange={handleChange}
                $width={width}
            />
        </InputContainer>
    )
}

export default Input
