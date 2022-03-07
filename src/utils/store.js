import { configureStore } from '@reduxjs/toolkit'
import employeeReducer from '../features/employee'

export default configureStore({
    reducer: {
        employee: employeeReducer,
    },
})
