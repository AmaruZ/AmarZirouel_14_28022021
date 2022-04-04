import React, { useCallback, useEffect, useRef, useState } from 'react'
import DatePickerBody from './DatePickerBody'
import DatePickerHeader from './DatePickerHeader'
import { DateInput, DatePickerContainer, StyledLabel } from './style'
import { getMonthDays } from './utils'
import PropTypes from 'prop-types'

/**
 * Date picker component
 * @param {Object} props
 * @param {String} props.name
 * @param {String} props.field
 * @param {String} props.children
 * @returns
 */

function DatePicker({ name, field, children }) {
    const [showDatePicker, setShowDatePicker] = useState(false)
    const inputRef = useRef()
    const datePickerRef = useRef()
    const date = new Date()
    const [selectedYear, setSelectedYear] = useState(date.getFullYear())
    const [selectedMonth, setSelectedMonth] = useState(date.getMonth())
    const [monthDays, setMonthDays] = useState([])

    const handleFocus = () => {
        setShowDatePicker(true)
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
        <div ref={datePickerRef} onFocus={handleFocus}>
            <StyledLabel htmlFor={name}>{children}</StyledLabel>
            <DateInput type="text" name={name} id={name} ref={inputRef} />
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
                        inputRef={inputRef}
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
    children: PropTypes.string,
}

export default DatePicker
