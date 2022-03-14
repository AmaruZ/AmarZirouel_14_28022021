import { configureStore } from '@reduxjs/toolkit'
import employeeReducer from '../features/employee'
import employeeListReducer from '../features/employeelist'
import tableReducer from '../features/table'

export default configureStore({
    reducer: {
        employee: employeeReducer,
        employeelist: employeeListReducer,
        table: tableReducer,
    },
})
