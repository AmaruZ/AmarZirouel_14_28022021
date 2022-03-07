import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    firstName: '',
    lastName: '',
    birthDate: '',
    startDate: '',
    street: '',
    city: '',
    zipCode: '',
}

const { actions, reducer } = createSlice({
    name: 'employee',
    initialState,
    reducers: {
        changeField: {
            prepare: (field, value) => ({
                payload: { field, value },
            }),
            reducer: (draft, action) => {
                draft[action.payload.field] = action.payload.value
            },
        },
    },
})

export const { changeField } = actions

export default reducer
