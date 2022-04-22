import PropTypes from 'prop-types'
import React from 'react'
import { useDispatch } from 'react-redux'
import * as employeeAction from '../../features/employee'
import { InputContainer, StyledInput, StyledLabel } from './style'

/**
 * Input component
 * @param {Object} props
 * @param {String} props.name
 * @param {String} props.field
 * @param {String} props.children
 * @param {String} props.type
 * @param {Ref} props._ref
 * @returns
 */

function Input({ name, field, children, type, _ref }) {
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
                required
            />
        </InputContainer>
    )
}

Input.propTypes = {
    name: PropTypes.string,
    field: PropTypes.string,
    children: PropTypes.string,
    type: PropTypes.string,
    _ref: PropTypes.object,
    error: PropTypes.bool,
}

Input.defaultProps = {
    type: 'text',
}

export default Input
