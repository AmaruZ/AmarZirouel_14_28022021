import React from 'react'
import { Link } from 'react-router-dom'
import Form from '../../components/Form'

function Home() {
    return (
        <main>
            <h1>HRnet</h1>
            <Link to={'/employee-list'}>View Current Employees</Link>
            <h2>Create Employee</h2>
            <Form />
        </main>
    )
}

export default Home
