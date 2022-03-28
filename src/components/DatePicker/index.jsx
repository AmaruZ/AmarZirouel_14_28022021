import React, { useEffect, useRef, useState } from 'react'
import DatePickerBody from './DatePickerBody'
import DatePickerHeader from './DatePickerHeader'
import { DateInput, DatePickerContainer, StyledLabel } from './style'
import { getMonthDays } from './utils'

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
    const date = new Date()
    const [selectedYear, setSelectedYear] = useState(date.getFullYear())
    const [selectedMonth, setSelectedMonth] = useState(date.getMonth())
    const [monthDays, setMonthDays] = useState([])
    const handleFocus = () => {
        setShowDatePicker(true)
    }
    useEffect(() => {
        setMonthDays(getMonthDays(selectedYear, selectedMonth))
    }, [selectedYear, selectedMonth])

    return (
        <div onFocus={handleFocus}>
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

export default DatePicker
