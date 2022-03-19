import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import chevron from '../../assets/chevron-down-icon.svg'
import * as employeeAction from '../../features/employee'
import { selectEmployee } from '../../utils/selectors'

const DropdownContainer = styled.div``
const StyledLabel = styled.label`
    display: flex;
    margin: 10px 0px;
`
const DropdownHeader = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #f4f4f4;
    cursor: pointer;
`
const DropdownListContainer = styled.div``
const DropdownList = styled.ul`
    margin: 0;
    padding: 0;
`
const ListItem = styled.li`
    list-style: none;
    cursor: pointer;
    &:hover {
        background: blue;
        color: white;
    }
`

function Dropdown({ label, field, data }) {
    const [isOpen, setOpen] = useState(false)
    const dispatch = useDispatch()
    const employee = useSelector(selectEmployee)
    const toggle = () => {
        setOpen(!isOpen)
    }
    const onOptionClicked = (option) => () => {
        dispatch(employeeAction.changeField(field, option))
        toggle()
    }
    useEffect(() => {
        dispatch(employeeAction.changeField(field, data[0].name))
    }, [data, dispatch, field])
    return (
        <DropdownContainer>
            <StyledLabel htmlFor={label}>{label}</StyledLabel>
            <DropdownHeader name={label} onClick={toggle}>
                {employee[field]}
                <img src={chevron} alt="" />
            </DropdownHeader>
            {isOpen && (
                <DropdownListContainer>
                    <DropdownList>
                        {data.map((option) => {
                            return (
                                <ListItem
                                    onClick={onOptionClicked(option.name)}
                                    key={option.name}
                                >
                                    {option.name}
                                </ListItem>
                            )
                        })}
                    </DropdownList>
                </DropdownListContainer>
            )}
        </DropdownContainer>
    )
}

export default Dropdown
