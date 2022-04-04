import styled from 'styled-components'

export const FormContainer = styled.form`
    margin-top: 30px;
`
export const InputsWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    width: 550px;
`
export const SaveButton = styled.button`
    width: 150px;
    height: 40px;
    font-size: 1.05em;
    color: white;
    background: #0053b8;
    margin-top: 28px;
    margin-right: 50px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    &:hover {
        background: #0063dd;
    }
`
