import { useEffect, useState } from 'react'
import { months } from '../../utils/datepicker'
import PropTypes from 'prop-types'
import {
    DatePickerButton,
    DatePickerHeaderContainer,
    DatePickerSelect,
} from './style'

/**
 * Buttons and selects part of the date picker
 * @param {Object} props
 * @param {Number} props.selectedYear
 * @param {Number} props.selectedMonth
 * @param {Function} props.setSelectedMonth
 * @param {Function} props.setSelectedYear
 * @returns
 */

function DatePickerHeader({
    selectedYear,
    selectedMonth,
    setSelectedMonth,
    setSelectedYear,
}) {
    const [allYears, setAllYears] = useState([])
    useEffect(() => {
        const years = []
        for (let i = 1900; i <= new Date().getFullYear(); i++) {
            years.push(i)
        }
        setAllYears(years)
    }, [])

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
        if (selectedYear !== 1900) {
            setSelectedYear(selectedYear - 1)
        }
    }
    const NextYear = (e) => {
        e.preventDefault()
        const date = new Date()
        if (selectedYear !== date.getFullYear()) {
            setSelectedYear(selectedYear + 1)
        }
    }
    return (
        <DatePickerHeaderContainer>
            <DatePickerButton onClick={PrevYear}> {'<<'} </DatePickerButton>
            <DatePickerButton onClick={PrevMonth}> {'<'} </DatePickerButton>
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
                onChange={(e) => setSelectedYear(parseInt(e.target.value))}
            >
                {allYears.map((year) => (
                    <option key={year}>{year}</option>
                ))}
            </DatePickerSelect>
            <DatePickerButton onClick={NextMonth}> {'>'} </DatePickerButton>
            <DatePickerButton onClick={NextYear}> {'>>'} </DatePickerButton>
        </DatePickerHeaderContainer>
    )
}

DatePickerHeader.propTypes = {
    selectedMonth: PropTypes.number,
    selectedYear: PropTypes.number,
    setSelectedMonth: PropTypes.func,
    setSelectedYear: PropTypes.func,
}

export default DatePickerHeader
