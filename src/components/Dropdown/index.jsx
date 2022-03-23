import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import chevron from '../../assets/chevron-down-icon.svg'
import * as employeeAction from '../../features/employee'
import { selectEmployee } from '../../utils/selectors'

const DropdownContainer = styled.div`
    margin-bottom: 10px;
`
const StyledLabel = styled.label`
    display: flex;
    font-weight: bold;
    margin-bottom: 10px;
`
const DropdownHeader = styled.div`
    position: relative;
    display: flex;
    width: 250px;
    height: 40px;
    justify-content: space-between;
    align-items: center;
    padding-left: 10px;
    background: #f4f4f4;
    cursor: pointer;
`
const DropdownListContainer = styled.div`
    width: 250px;
`
const DropdownList = styled.ul`
    margin: 0;
    padding: 0;
`
const ListItem = styled.li`
    list-style: none;
    padding: 1px 0 1px 10px;
    cursor: pointer;
    &:hover {
        background: #0575ff;
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
