import React, { useCallback, useEffect, useRef, useState } from 'react'
import DatePickerBody from './DatePickerBody'
import DatePickerHeader from './DatePickerHeader'
import { DateInput, DatePickerContainer, StyledLabel } from './style'
import { getMonthDays } from './utils'
import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'
import { changeField } from '../../features/employee'

/**
 * Date picker component
 * @param {Object} props
 * @param {String} props.name
 * @param {String} props.field
 * @param {Object} props._ref
 * @param {RegExp} props.pattern
 * @param {String} props.children
 * @returns
 */

function DatePicker({ name, field, _ref, pattern, children }) {
    const [showDatePicker, setShowDatePicker] = useState(false)
    const datePickerRef = useRef()
    const date = new Date()
    const [selectedYear, setSelectedYear] = useState(date.getFullYear())
    const [selectedMonth, setSelectedMonth] = useState(date.getMonth())
    const [monthDays, setMonthDays] = useState([])
    const dispatch = useDispatch()

    const handleFocus = () => {
        setShowDatePicker(true)
    }

    const handleChange = () => {
        dispatch(changeField(field, _ref.current.value))
    }

    const handleKeyDown = (e) => {
        if (e.key === 'Escape') {
            setShowDatePicker(false)
        }
    }

    const handleClickOutside = useCallback((e) => {
        if (!datePickerRef.current.contains(e.target)) {
            setShowDatePicker(false)
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [])

    useEffect(() => {
        if (showDatePicker) {
            document.addEventListener('mousedown', handleClickOutside)
        }
    }, [showDatePicker, handleClickOutside])

    useEffect(() => {
        setMonthDays(getMonthDays(selectedYear, selectedMonth))
    }, [selectedYear, selectedMonth])

    return (
        <div
            ref={datePickerRef}
            onFocus={handleFocus}
            onKeyDown={handleKeyDown}
        >
            <StyledLabel htmlFor={name}>{children}</StyledLabel>
            <DateInput
                type="text"
                name={name}
                id={name}
                ref={_ref}
                onChange={handleChange}
                required
                pattern={pattern}
            />
            {showDatePicker && (
                <DatePickerContainer>
                    <DatePickerHeader
                        selectedMonth={selectedMonth}
                        setSelectedMonth={setSelectedMonth}
                        selectedYear={selectedYear}
                        setSelectedYear={setSelectedYear}
                    />
                    <DatePickerBody
                        selectedMonth={selectedMonth}
                        selectedYear={selectedYear}
                        inputRef={_ref}
                        setShowDatePicker={setShowDatePicker}
                        monthDays={monthDays}
                        field={field}
                    />
                </DatePickerContainer>
            )}
        </div>
    )
}

DatePicker.propTypes = {
    field: PropTypes.string,
    name: PropTypes.string,
    _ref: PropTypes.object,
    pattern: PropTypes.string,
    children: PropTypes.string,
}

export default DatePicker
