import styled from 'styled-components'

export const StyledLabel = styled.label`
    display: flex;
    flex-direction: column;
    font-weight: 700;
    margin-bottom: 10px;
`
export const DateInput = styled.input`
    width: 250px;
    height: 40px;
    margin-bottom: 10px;
    padding-left: 10px;
    font-size: 1.1em;
    border-radius: 5px;
    border: solid 1px lightgrey;
    &:focus-visible {
        outline: solid 2px #c9deff;
    }
`
export const DatePickerContainer = styled.div`
    width: 250px;
    height: 250px;
    border-radius: 10px;
    box-shadow: 0px 2px 5px lightgrey;
`
export const DatePickerBodyContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(7, 1fr);
`
export const DayTitle = styled.span`
    width: 32px;
    height: 20px;
    font-weight: 700;
    text-align: center;
`
export const DayCell = styled.span`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 32px;
    height: 32px;
    cursor: pointer;
    color: ${(props) =>
        props.$offmonth === true
            ? 'lightgrey'
            : props.$today
            ? 'white'
            : 'black'};
    background: ${(props) => (props.$today === true ? '#0575FF' : 'none')};
    border-radius: 50%;
    &:hover {
        background: lightgrey;
    }
`
export const DatePickerHeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 38px;
`
export const DatePickerButton = styled.button`
    height: 30px;
    font-size: 1.2em;
    margin: 0 2px;
    color: #d1d1d1;
    background: transparent;
    border: none;
    cursor: pointer;
    &:hover {
        color: #0575ff;
    }
`
export const DatePickerSelect = styled.select`
    font-size: 1.01em;
    border: none;
    cursor: pointer;
`
