import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import chevron from '../../assets/chevron-down-icon.svg'
import * as employeeAction from '../../features/employee'
import PropTypes, { objectOf, string } from 'prop-types'
import {
    DropdownChevron,
    DropdownContainer,
    DropdownButton,
    DropdownList,
    ListItem,
    DropdownLabel,
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
    const [selectedOption, setSelectedOption] = useState(data[0].name)

    const toggle = () => {
        setOpen(!isOpen)
    }

    const handleButtonClick = (e) => {
        e.preventDefault()
        toggle()
    }

    const handleOptionClick = (option) => () => {
        setSelectedOption(option.name)
        dispatch(
            employeeAction.changeField(
                field,
                option.abbreviation ? option.abbreviation : option.name
            )
        )
        toggle()
    }

    const handleKeyDown = (option) => (e) => {
        if (e.key === 'Enter' || e.key === 'Space') {
            e.preventDefault()
            setSelectedOption(option.name)
            dispatch(
                employeeAction.changeField(
                    field,
                    option.abbreviation ? option.abbreviation : option.name
                )
            )
            toggle()
        }
    }

    const optionsList = data.map((option) => {
        return (
            <ListItem
                onClick={handleOptionClick(option)}
                onKeyDown={handleKeyDown(option)}
                key={option.name}
                role={'option'}
                tabIndex={0}
                aria-selected={option.name === selectedOption}
            >
                {option.name}
            </ListItem>
        )
    })

    useEffect(() => {
        dispatch(employeeAction.changeField(field, data[0].name))
    }, [data, dispatch, field])

    return (
        <DropdownContainer>
            <DropdownLabel id={label.toLowerCase()}>{label}</DropdownLabel>
            <DropdownButton
                onClick={handleButtonClick}
                type={'button'}
                aria-labelledby={`${label.toLowerCase()}`}
                aria-haspopup={'listbox'}
                aria-expanded={isOpen ? true : false}
            >
                {selectedOption}
                <DropdownChevron src={chevron} alt="" $isOpen={isOpen} />
            </DropdownButton>
            {isOpen && (
                <DropdownList role={'listbox'} tabIndex={-1}>
                    {optionsList}
                </DropdownList>
            )}
        </DropdownContainer>
    )
}

Dropdown.propTypes = {
    label: PropTypes.string,
    field: PropTypes.string,
    data: PropTypes.arrayOf(objectOf(string)),
}

Dropdown.defaultProps = {
    data: [],
}

export default Dropdown
