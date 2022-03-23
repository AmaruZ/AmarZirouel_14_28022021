import React, { useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setStartIndex } from '../../features/table'
import { selectEmployeeList, selectTable } from '../../utils/selectors'
import styled from 'styled-components'

const PagingContainer = styled.div`
    display: flex;
    justify-content: space-between;
`
const PagingNumbersButton = styled.button`
    width: 23px;
    height: 23px;
    margin: 0 2px;
    border-radius: 5px;
    border: none;
    cursor: pointer;
    ${(props) =>
        props.$active === true
            ? `background: #0575FF;
            color: white;`
            : 'background: transparent;'}
    &:hover {
        background: lightgrey;
    }
`
const PagingButton = styled.button`
    margin: 0 5px;
    padding: 2px 5px;
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
                <PagingNumbersButton
                    $active={i * entries === startIndex ? true : false}
                    key={'page' + i}
                    onClick={handleClick(i)}
                >
                    {i + 1}
                </PagingNumbersButton>,
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
                    <PagingButton disabled>Previous</PagingButton>
                ) : (
                    <PagingButton onClick={handlePreviousClick}>
                        Previous
                    </PagingButton>
                )}
                {buttons.length > 0 && buttons.map((button) => button)}
                {startIndex + entries >= numberOfFilteredEmployees ? (
                    <PagingButton disabled>Next</PagingButton>
                ) : (
                    <PagingButton onClick={handleNextClick}>Next</PagingButton>
                )}
            </div>
        </PagingContainer>
    )
}

export default Paging
