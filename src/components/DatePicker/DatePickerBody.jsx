import React from 'react'
import { useDispatch } from 'react-redux'
import { changeField } from '../../features/employee'
import { DatePickerBodyContainer, DayCell, DayTitle } from './style'
import { days } from '../../utils/datepicker'

/**
 * Date picker's part with the table of days
 * @param {Object} props
 * @param {Number} props.selectedMonth
 * @param {Number} props.selectedYear
 * @param {React.Ref} props.inputRef
 * @param {Function} props.setShowDatePicker
 * @param {Array} props.monthDays
 * @param {String} props.field
 * @returns
 */

function DatePickerBody({
    selectedMonth,
    selectedYear,
    inputRef,
    setShowDatePicker,
    monthDays,
    field,
}) {
    const dispatch = useDispatch()
    const todayTimestamp =
        Date.now() -
        (Date.now() % (60 * 60 * 24 * 1000)) +
        new Date().getTimezoneOffset() * 1000 * 60

    const handleClick = (day) => {
        const date =
            day.date < 10 ? '0' + day.date.toString() : day.date.toString()
        const month =
            selectedMonth === 0
                ? '12'
                : selectedMonth + 1 + day.month < 10
                ? '0' + (selectedMonth + 1 + day.month).toString()
                : selectedMonth + 1 + day.month === 13
                ? '01'
                : (selectedMonth + 1 + day.month).toString()
        const year =
            selectedMonth === 0
                ? selectedYear - 1
                : selectedMonth + 1 + day.month === 13
                ? selectedYear + 1
                : selectedYear
        inputRef.current.value = `${date}/${month}/${year}`
        dispatch(changeField(field, inputRef.current.value))
        setShowDatePicker(false)
    }

    return (
        <DatePickerBodyContainer>
            {days.map((d) => (
                <DayTitle key={d}>{d}</DayTitle>
            ))}
            {monthDays.map((day, i) => (
                <DayCell
                    key={i}
                    tabIndex={0}
                    onClick={() => {
                        handleClick(day)
                    }}
                    $offmonth={day.month !== 0 ? true : false}
                    $today={day.timestamp === todayTimestamp ? true : false}
                >
                    {day.date}
                </DayCell>
            ))}
        </DatePickerBodyContainer>
    )
}

export default DatePickerBody