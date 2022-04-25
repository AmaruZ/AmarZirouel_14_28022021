import Modal from 'modal-p14-amarz/dist/components/Modal'
import React, { useState } from 'react'
import Form from '../../components/Form'
import {
    HomeContainer,
    LeftPannel,
    RightPannel,
    StyledLink,
    HomeTitle,
} from './style'

function Home() {
    const [isOpen, setOpen] = useState(false)
    return (
        <HomeContainer>
            <LeftPannel>
                <HomeTitle>HRnet</HomeTitle>
                <StyledLink to={'/employee-list'}>
                    View Current Employees
                </StyledLink>
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
