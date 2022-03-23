import React, { useEffect, useMemo, useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { changeField } from '../../features/employee'
import { days, months } from '../../utils/datepicker'

const StyledLabel = styled.label`
    display: flex;
    flex-direction: column;
    font-weight: 700;
    margin-bottom: 10px;
`
const DateInput = styled.input`
    width: 250px;
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
const DatePickerContainer = styled.div`
    width: 250px;
    height: 250px;
    border-radius: 10px;
    box-shadow: 0px 2px 5px lightgrey;
`
const MonthDaysWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(7, 1fr);
`
const DayTitle = styled.span`
    width: 32px;
    height: 20px;
    font-weight: 700;
    text-align: center;
`
const DaySpan = styled.span`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 32px;
    height: 32px;
    cursor: pointer;
    color: ${(props) =>
        props.$offmonth === true
            ? 'lightgrey'
            : props.$today
            ? 'white'
            : 'black'};
    background: ${(props) => (props.$today === true ? '#0575FF' : 'none')};
    border-radius: 50%;
    &:hover {
        background: lightgrey;
    }
`
const DatePickerHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 38px;
`
const DatePickerButton = styled.button`
    height: 30px;
    font-size: 1.2em;
    margin: 0 2px;
    color: #0575ff;
    background: transparent;
    border: none;
    cursor: pointer;
`
const DatePickerSelect = styled.select`
    font-size: 1.01em;
    border: none;
    cursor: pointer;
`
function DatePicker({ name, field, children }) {
    const [showDatePicker, setShowDatePicker] = useState(false)
    const date = new Date()
    const inputRef = useRef()
    const dispatch = useDispatch()
    const [selectedYear, setSelectedYear] = useState(date.getFullYear())
    const [selectedMonth, setSelectedMonth] = useState(date.getMonth())
    const [monthDetails, setMonthDetails] = useState([])
    const todayTimestamp =
        Date.now() -
        (Date.now() % (60 * 60 * 24 * 1000)) +
        new Date().getTimezoneOffset() * 1000 * 60

    const allYears = useMemo(() => [], [])
    useEffect(() => {
        for (let i = 1900; i <= new Date().getFullYear(); i++) {
            allYears.push(i)
        }
    }, [allYears])

    const handleFocus = () => {
        setShowDatePicker(true)
    }

    useEffect(() => {
        setMonthDetails(getMonthDetails(selectedYear, selectedMonth))
    }, [selectedYear, selectedMonth])

    const handleClick = (day) => {
        inputRef.current.value = `${
            day.date < 10 ? '0' + day.date : day.date
        }/${
            selectedMonth + 1 + day.month < 10
                ? '0' + (selectedMonth + 1 + day.month)
                : selectedMonth + 1 + day.month
        }/${selectedYear}`
        dispatch(changeField(field, inputRef.current.value))
        setShowDatePicker(false)
    }
    const PrevMonth = (e) => {
        e.preventDefault()
        if (selectedMonth === 0) {
            setSelectedMonth(11)
            setSelectedYear(selectedYear - 1)
        } else {
            setSelectedMonth(selectedMonth - 1)
        }
    }

    const NextMonth = (e) => {
        e.preventDefault()
        if (selectedMonth === 11) {
            setSelectedMonth(0)
            setSelectedYear(selectedYear + 1)
        } else {
            setSelectedMonth(selectedMonth + 1)
        }
    }
    const PrevYear = (e) => {
        e.preventDefault()
        setSelectedYear(selectedYear - 1)
    }
    const NextYear = (e) => {
        e.preventDefault()
        setSelectedYear(selectedYear + 1)
    }
    return (
        <div onFocus={handleFocus}>
            <StyledLabel htmlFor={name}>{children}</StyledLabel>
            <DateInput type="text" name={name} id="" ref={inputRef} />
            {showDatePicker && (
                <DatePickerContainer>
                    <DatePickerHeader>
                        <DatePickerButton onClick={PrevYear}>
                            {' '}
                            {'<<'}{' '}
                        </DatePickerButton>
                        <DatePickerButton onClick={PrevMonth}>
                            {' '}
                            {'<'}{' '}
                        </DatePickerButton>
                        <DatePickerSelect
                            value={months[selectedMonth]}
                            onChange={(e) =>
                                setSelectedMonth(months.indexOf(e.target.value))
                            }
                        >
                            {months.map((month) => (
                                <option key={month}>{month}</option>
                            ))}
                        </DatePickerSelect>
                        <DatePickerSelect
                            value={selectedYear}
                            onChange={(e) =>
                                setSelectedYear(parseInt(e.target.value))
                            }
                        >
                            {allYears.map((year) => (
                                <option key={name + year}>{year}</option>
                            ))}
                        </DatePickerSelect>
                        <DatePickerButton onClick={NextMonth}>
                            {' '}
                            {'>'}{' '}
                        </DatePickerButton>
                        <DatePickerButton onClick={NextYear}>
                            {' '}
                            {'>>'}{' '}
                        </DatePickerButton>
                    </DatePickerHeader>
                    <MonthDaysWrapper>
                        {days.map((d) => (
                            <DayTitle key={d}>{d}</DayTitle>
                        ))}
                        {monthDetails.map((day, i) => (
                            <DaySpan
                                key={i}
                                tabIndex={0}
                                onClick={() => {
                                    handleClick(day)
                                }}
                                $offmonth={day.month !== 0 ? true : false}
                                $today={
                                    day.timestamp === todayTimestamp
                                        ? true
                                        : false
                                }
                            >
                                {day.date}
                            </DaySpan>
                        ))}
                    </MonthDaysWrapper>
                </DatePickerContainer>
            )}
        </div>
    )
}

const getDayDetails = (args) => {
    let date = args.index - args.firstDay + 1
    let day = (args.index % 7) + 1 > 6 ? 0 : (args.index % 7) + 1
    let prevMonth = args.month - 1
    let prevYear = args.year
    if (prevMonth < 0) {
        prevMonth = 11
        prevYear--
    }
    let prevMonthNumberOfDays = getNumberOfDays(prevYear, prevMonth)
    let _date =
        date < 0
            ? prevMonthNumberOfDays + date + 1
            : (date % args.numberOfDays) + 1
    let month = date < 0 ? -1 : date >= args.numberOfDays ? 1 : 0
    let timestamp = new Date(args.year, args.month, _date).getTime()
    return {
        date: _date,
        day,
        month,
        timestamp,
    }
}
const getNumberOfDays = (year, month) => {
    return 42 - new Date(year, month, 42).getDate()
}
const getMonthDetails = (year, month) => {
    let firstDay = new Date(year, month).getDay()
    let numberOfDays = getNumberOfDays(year, month)
    let rows = 6
    let currentDay = null
    let index = firstDay === 0 ? -7 : 0
    let cols = 7
    let monthArray = []
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
