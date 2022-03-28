import React from 'react'
import { useDispatch } from 'react-redux'
import * as employeeAction from '../../features/employee'
import { ErrorText, InputContainer, StyledInput, StyledLabel } from './style'

/**
 * Input component
 * @param {Object} props
 * @param {String} props.name
 * @param {String} props.field
 * @param {String} props.children
 * @param {String} props.type
 * @param {Ref} props._ref
 * @param {Boolean} props.error
 * @returns
 */

function Input({ name, field, children, type = 'text', _ref, error }) {
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
                $width={name === 'street' ? 'long' : 'normal'}
                ref={_ref}
            />
            {error && (
                <ErrorText>
                    Please check that the {children.toLowerCase()} is correct
                </ErrorText>
            )}
        </InputContainer>
    )
}

export default Input
