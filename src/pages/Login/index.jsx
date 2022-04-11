import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { signIn } from '../../services'

const HomeContainer = styled.main`
    display: flex;
    height: 100vh;
`
const LeftPannel = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 25vw;
    background: #0053b8;
`

const StyledTitle = styled.h1`
    color: white;
    margin-top: 50px;
`
const StyledLink = styled(Link)`
    color: white;
    margin-top: 100px;
    &:hover {
        text-decoration: none;
    }
`
const RightPannel = styled.div`
    display: flex;
    flex-direction: column;
    margin: 50px 0 0 100px;
`

function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(e)
        try {
            signIn({ email, password })
        } catch (error) {}
    }
    return (
        <HomeContainer>
            <LeftPannel>
                <StyledTitle>HRnet</StyledTitle>
                <StyledLink to={'/'}>Home</StyledLink>
                <StyledLink to={'/employee-list'}>
                    View Current Employees
                </StyledLink>
            </LeftPannel>
            <RightPannel>
                <h2>Login</h2>
                <form>
                    <label>
                        Email
                        <input
                            type={'text'}
                            name={'email'}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </label>
                    <label>
                        Password
                        <input
                            type={'password'}
                            name={'password'}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </label>
                    <button onClick={handleSubmit}>Se connecter</button>
                </form>
            </RightPannel>
        </HomeContainer>
    )
}

export default Login
