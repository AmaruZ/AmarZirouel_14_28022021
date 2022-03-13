import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    firstName: '',
    lastName: '',
    birthDate: '',
    startDate: '',
    street: '',
    city: '',
    state: '',
    zipCode: '',
    departement: '',
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
        setValue: {},
    },
})

export const { changeField } = actions

export default reducer
