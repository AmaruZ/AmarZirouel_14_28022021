import styled from 'styled-components'

export const DropdownContainer = styled.div`
    margin-bottom: 10px;
`
export const DropdownLabel = styled.span`
    display: flex;
    font-weight: bold;
    margin-bottom: 10px;
`
export const DropdownButton = styled.button`
    position: relative;
    display: flex;
    width: 250px;
    height: 40px;
    font-size: 16px;
    border: none;
    justify-content: space-between;
    align-items: center;
    padding-left: 10px;
    background: #f4f4f4;
    cursor: pointer;
`
export const DropdownChevron = styled.img`
    width: 24px;
    height: 24px;
    margin-right: 10px;
    ${(props) => props.$isOpen && `transform: rotate(180deg);`}
`
export const DropdownList = styled.ul`
    width: 250px;
    max-height: 340px;
    overflow: auto;
`
export const ListItem = styled.li`
    list-style: none;
    padding: 1px 0 1px 10px;
    cursor: pointer;
    &:hover {
        background: #0575ff;
        color: white;
    }
    &:focus {
        background: #0575ff;
        color: white;
    }
`
