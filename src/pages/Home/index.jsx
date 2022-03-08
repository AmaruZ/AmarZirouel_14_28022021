import Modal from 'modal-p14-amarz/dist/components/Modal'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Form from '../../components/Form'

function Home() {
    const [isOpen, setOpen] = useState(false)
    return (
        <main>
            <h1>HRnet</h1>
            <Link to={'/employee-list'}>View Current Employees</Link>
            <h2>Create Employee</h2>
            <Form setOpen={setOpen} />
            <Modal isOpen={isOpen} setOpen={setOpen}>
                <p>Employee Created</p>
            </Modal>
        </main>
    )
}

export default Home
