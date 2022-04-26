import styled from 'styled-components'

export const PagingContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
`
export const PagingNumbersButton = styled.button`
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
export const PagingButton = styled.button`
    margin: 0 5px;
    padding: 2px 5px;
`
