import { configureStore } from '@reduxjs/toolkit'
import employeeReducer from '../features/employee'
import employeeListReducer from '../features/employeelist'

export default configureStore({
    reducer: {
        employee: employeeReducer,
        employeelist: employeeListReducer,
    },
})
