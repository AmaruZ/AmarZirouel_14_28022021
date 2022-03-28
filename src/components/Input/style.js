import styled from 'styled-components'

export const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
`
export const StyledLabel = styled.label`
    margin-bottom: 10px;
    font-weight: 600;
`
export const StyledInput = styled.input`
    width: ${(props) => (props.$width === 'long' ? '100%' : '250px')};
    height: 40px;

    padding-left: 10px;
    font-size: 1.1em;
    border-radius: 5px;
    border: solid 1px lightgrey;
    &:focus-visible {
        outline: solid 2px #c9deff;
    }
`
export const ErrorText = styled.p`
    color: red;
    font-size: 0.8rem;
`