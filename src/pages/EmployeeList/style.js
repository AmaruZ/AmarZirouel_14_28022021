import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const EmployeeListContainer = styled.main`
    display: flex;
    @media screen and (max-width: 1550px) {
        flex-direction: column;
    }
`
export const LeftPannel = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 20vw;
    min-height: 100vh;
    background: #0053b8;
    @media screen and (max-width: 1550px) {
        flex-direction: row;
        width: 100vw;
        justify-content: space-between;
        height: 50px;
        min-height: 0;
    }
`
export const EmployeeListTitle = styled.h1`
    color: white;
    margin-top: 50px;
    @media screen and (max-width: 1550px) {
        margin-top: 0;
        margin-left: 20px;
    }
`
export const StyledLink = styled(Link)`
    color: white;
    margin-top: 100px;
    &:hover {
        text-decoration: none;
    }
    @media screen and (max-width: 1550px) {
        margin-top: 0;
        margin-right: 20px;
    }
`
export const EmployeeListSubTitle = styled.h2`
    margin-bottom: 20px;
`
export const RightPannel = styled.div`
    display: flex;
    flex-direction: column;
    margin: 50px 0 0 30px;
    @media screen and (max-width: 1550px) {
        margin: 20px auto 0 auto;
    }
`
