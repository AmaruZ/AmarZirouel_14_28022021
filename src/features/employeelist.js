import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    employees: [],
}

const { actions, reducer } = createSlice({
    name: 'employeelist',
    initialState,
    reducers: {
        addEmployee: (draft, action) => {
            draft.employees.push(action.payload)
        },
    },
})

export const { addEmployee } = actions

export default reducer
