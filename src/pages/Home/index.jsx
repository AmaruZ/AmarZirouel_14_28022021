import Modal from 'modal-p14-amarz/dist/components/Modal'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Form from '../../components/Form'
import styled from 'styled-components'

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

function Home() {
    const [isOpen, setOpen] = useState(false)
    return (
        <HomeContainer>
            <LeftPannel>
                <StyledTitle>HRnet</StyledTitle>
                <StyledLink to={'/employee-list'}>
                    View Current Employees
                </StyledLink>
                <StyledLink to={'/login'}>Login</StyledLink>
            </LeftPannel>
            <RightPannel>
                <h2>Create Employee</h2>
                <Form setOpen={setOpen} />
            </RightPannel>

            <Modal isOpen={isOpen} setOpen={setOpen}>
                <p>Employee Created</p>
            </Modal>
        </HomeContainer>
    )
}

export default Home
