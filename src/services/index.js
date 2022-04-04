import axios from 'axios'

export async function fetchEmployees() {
    try {
        const response = await axios.get('http://localhost:3001/api/employee')
        return response.data
    } catch (error) {
        console.log(error)
    }
}

export async function addEmployee(employee) {
    try {
        await axios.post('http://localhost:3001/api/employee', employee)
    } catch (error) {
        console.log(error)
    }
}
