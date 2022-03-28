import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import chevron from '../../assets/chevron-down-icon.svg'
import * as employeeAction from '../../features/employee'
import { selectEmployee } from '../../utils/selectors'
import {
    DropdownChevron,
    DropdownContainer,
    DropdownHeader,
    DropdownList,
    DropdownListContainer,
    ListItem,
    StyledLabel,
} from './style'

/**
 * Dropdown component
 * @param {Object} props
 * @param {String} props.label
 * @param {String} props.field
 * @param {Array} props.data
 * @returns
 */

function Dropdown({ label, field, data }) {
    const [isOpen, setOpen] = useState(false)
    const dispatch = useDispatch()
    const employee = useSelector(selectEmployee)

    const toggle = () => {
        setOpen(!isOpen)
    }

    const onOptionClicked = (option) => () => {
        dispatch(employeeAction.changeField(field, option))
        toggle()
    }

    useEffect(() => {
        dispatch(employeeAction.changeField(field, data[0].name))
    }, [data, dispatch, field])

    return (
        <DropdownContainer>
            <StyledLabel htmlFor={label}>{label}</StyledLabel>
            <DropdownHeader name={label} onClick={toggle}>
                {employee[field]}
                <DropdownChevron src={chevron} alt="" $isOpen={isOpen} />
            </DropdownHeader>
            {isOpen && (
                <DropdownListContainer>
                    <DropdownList>
                        {data.map((option) => {
                            return (
                                <ListItem
                                    onClick={onOptionClicked(option.name)}
                                    key={option.name}
                                >
                                    {option.name}
                                </ListItem>
                            )
                        })}
                    </DropdownList>
                </DropdownListContainer>
            )}
        </DropdownContainer>
    )
}

export default Dropdown
