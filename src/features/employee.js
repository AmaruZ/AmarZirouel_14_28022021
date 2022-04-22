import { createSlice } from '@reduxjs/toolkit'
import { departements } from '../utils/departements'
import { states } from '../utils/states'

const initialState = {
    firstName: '',
    lastName: '',
    birthDate: '',
    startDate: '',
    street: '',
    city: '',
    state: states[0].abbreviation,
    zipCode: '',
    departement: departements[0].name,
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
        resetFields: () => {
            return initialState
        },
    },
})

export const { changeField, resetFields } = actions

export default reducer
