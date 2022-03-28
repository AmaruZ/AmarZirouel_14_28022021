import styled from 'styled-components'

export const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
`
export const FilterInput = styled.input`
    height: 20px;
    margin-left: 10px;
    padding-left: 10px;
    font-size: 1.05em;
    border-radius: 5px;
    border: solid 1px lightgrey;
    &:focus-visible {
        outline: solid 2px #c9deff;
    }
`
