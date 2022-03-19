import React, { useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setStartIndex } from '../../features/table'
import { selectEmployeeList, selectTable } from '../../utils/selectors'
import styled from 'styled-components'

const PagingContainer = styled.div`
    display: flex;
    justify-content: space-between;
`
const PagingButton = styled.button`
    ${(props) =>
        props.$active === true ? 'background: red' : 'background: transparent'};
`

function Paging() {
    const entries = useSelector(selectTable).entries
    const numberOfEmployees = useSelector(selectEmployeeList).employees.length
    const numberOfFilteredEmployees =
        useSelector(selectTable).filteredEmployees.length
    const entriesPage = useSelector(selectTable).entriesPage
    const startIndex = useSelector(selectTable).startIndex
    const dispatch = useDispatch()
    const [buttons, setButtons] = useState([])
    const handleClick = useCallback(
        (index) => () => {
            dispatch(setStartIndex(index * entries))
        },
        [dispatch, entries]
    )
    const handleNextClick = () => {
        dispatch(setStartIndex(startIndex + entries))
    }
    const handlePreviousClick = () => {
        dispatch(setStartIndex(startIndex - entries))
    }
    useEffect(() => {
        setButtons([])
        for (let i = 0; i < entriesPage; i++) {
            setButtons((buttons) => [
                ...buttons,
                <PagingButton
                    $active={i * entries === startIndex ? true : false}
                    key={'page' + i}
                    onClick={handleClick(i)}
                >
                    {i + 1}
                </PagingButton>,
            ])
        }
    }, [entriesPage, setButtons, handleClick, entries, startIndex])

    return (
        <PagingContainer>
            <div>
                <p>
                    Showing {startIndex + 1} to{' '}
                    {startIndex + entries > numberOfFilteredEmployees
                        ? numberOfFilteredEmployees
                        : startIndex + entries}{' '}
                    of {numberOfFilteredEmployees} entries{' '}
                    {numberOfEmployees !== numberOfFilteredEmployees &&
                        `(filtered from ${numberOfEmployees} total entries)`}
                </p>
            </div>
            <div>
                {startIndex === 0 ? (
                    <button disabled>Previous</button>
                ) : (
                    <button onClick={handlePreviousClick}>Previous</button>
                )}
                {buttons.length > 0 && buttons.map((button) => button)}
                {startIndex + entries >= numberOfFilteredEmployees ? (
                    <button disabled>Next</button>
                ) : (
                    <button onClick={handleNextClick}>Next</button>
                )}
            </div>
        </PagingContainer>
    )
}

export default Paging
