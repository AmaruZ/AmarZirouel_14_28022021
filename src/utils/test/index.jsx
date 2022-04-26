import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import { MemoryRouter } from 'react-router-dom'
import employeeReducer from '../../features/employee'
import employeeListReducer from '../../features/employeelist'
import tableReducer from '../../features/table'
import { render as rtlRender } from '@testing-library/react'

export function render(ui, options) {
    const store = configureStore({
        reducer: {
            employee: employeeReducer,
            employeeList: employeeListReducer,
            table: tableReducer,
        },
    })

    function Wrapper({ children }) {
        return (
            <MemoryRouter {...options}>
                <Provider store={store}>{children}</Provider>
            </MemoryRouter>
        )
    }
    rtlRender(ui, { wrapper: Wrapper })
}
