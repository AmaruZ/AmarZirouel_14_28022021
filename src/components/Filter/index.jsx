import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setEntries, setFilter, setStartIndex } from '../../features/table'
import { selectEmployeeList } from '../../utils/selectors'
import { FilterContainer, FilterInput } from './style'

/**
 * Filter table component
 * @returns
 */

function Filter() {
    const dispatch = useDispatch()
    const employees = useSelector(selectEmployeeList).employees
    const options = [10, 25, 50, 100]
    const handleSelect = (e) => {
        dispatch(setEntries(parseInt(e.target.value)))
        dispatch(setStartIndex(0))
    }
    const filter = (array, string) => {
        return array.filter(
            (el) =>
                el.firstName.toLowerCase().indexOf(string.toLowerCase()) !==
                    -1 ||
                el.lastName.toLowerCase().indexOf(string.toLowerCase()) !==
                    -1 ||
                el.state.toLowerCase().indexOf(string.toLowerCase()) !== -1 ||
                el.departement.toLowerCase().indexOf(string.toLowerCase()) !==
                    -1 ||
                el.street.toLowerCase().indexOf(string.toLowerCase()) !== -1 ||
                el.startDate.toLowerCase().indexOf(string.toLowerCase()) !==
                    -1 ||
                el.city.toLowerCase().indexOf(string.toLowerCase()) !== -1 ||
                el.zipCode.toLowerCase().indexOf(string.toLowerCase()) !== -1 ||
                el.birthDate.toLowerCase().indexOf(string.toLowerCase()) !== -1
        )
    }
    const handleChange = (e) => {
        dispatch(setFilter(filter(employees, e.target.value)))
        dispatch(setStartIndex(0))
    }
    return (
        <FilterContainer>
            <div>
                Show{' '}
                <select onChange={(e) => handleSelect(e)}>
                    {options.map((option) => (
                        <option key={'option' + option} value={option}>
                            {option}
                        </option>
                    ))}
                </select>{' '}
                entries
            </div>
            <div>
                <label htmlFor="search-input">Search</label>{' '}
                <FilterInput
                    id="search-input"
                    onChange={(e) => handleChange(e)}
                />
            </div>
        </FilterContainer>
    )
}

export default Filter
