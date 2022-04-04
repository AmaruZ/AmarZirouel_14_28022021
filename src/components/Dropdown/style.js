import styled from 'styled-components'

export const DropdownContainer = styled.div`
    margin-bottom: 10px;
`
export const StyledLabel = styled.label`
    display: flex;
    font-weight: bold;
    margin-bottom: 10px;
`
export const DropdownHeader = styled.div`
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
export const DropdownChevron = styled.img`
    width: 24px;
    height: 24px;
    margin-right: 10px;
    ${(props) => props.$isOpen && `transform: rotate(180deg);`}
`
export const DropdownListContainer = styled.div`
    width: 250px;
`
export const DropdownList = styled.ul`
    margin: 0;
    padding: 0;
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
`
