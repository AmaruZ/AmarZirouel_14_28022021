import React, { useEffect, useRef, useState } from 'react'
import DatePickerBody from './DatePickerBody'
import DatePickerHeader from './DatePickerHeader'
import { DateInput, DatePickerContainer, StyledLabel } from './style'

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
            <DateInput type="text" name={name} id="" ref={inputRef} />
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

/**
 * Get details of a day
 * @param {Object} args
 * @param {Number} args.index
 * @param {Number} args.firstDay
 * @param {Number} args.month
 * @param {Number} args.year
 * @param {Number} args.numberOfDays
 * @returns
 */

const getDayDetails = (args) => {
    const date = args.index - args.firstDay + 1
    const day = (args.index % 7) + 1 > 6 ? 0 : (args.index % 7) + 1
    let prevMonth = args.month - 1
    let prevYear = args.year
    if (prevMonth < 0) {
        prevMonth = 11
        prevYear--
    }
    const prevMonthNumberOfDays = getNumberOfDays(prevYear, prevMonth)
    const _date =
        date < 0
            ? prevMonthNumberOfDays + date + 1
            : (date % args.numberOfDays) + 1
    const month = date < 0 ? -1 : date >= args.numberOfDays ? 1 : 0
    const timestamp = new Date(args.year, args.month + month, _date).getTime()
    return {
        date: _date,
        day,
        month,
        timestamp,
    }
}

/**
 * Allow us to know how many days there are in a month
 * @param {Number} year
 * @param {Number} month
 * @returns
 */
const getNumberOfDays = (year, month) => {
    return 42 - new Date(year, month, 42).getDate()
}

/**
 * Return an array with all days in a 6-weeks range
 * @param {Number} year
 * @param {Number} month
 * @returns
 */

const getMonthDays = (year, month) => {
    const firstDay = new Date(year, month).getDay()
    const numberOfDays = getNumberOfDays(year, month)
    const rows = 6
    let currentDay = null
    let index = firstDay === 0 ? -7 : 0
    const cols = 7
    const monthArray = []
    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            currentDay = getDayDetails({
                index,
                numberOfDays,
                firstDay,
                year,
                month,
            })
            monthArray.push(currentDay)
            index++
        }
    }

    return monthArray
}

export default DatePicker
