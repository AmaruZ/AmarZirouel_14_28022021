import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    entries: 10,
    startIndex: 0,
    filteredEmployees: [],
    entriesPage: 1,
}

const { actions, reducer } = createSlice({
    name: 'table',
    initialState,
    reducers: {
        setEntries: (draft, action) => {
            draft.entries = action.payload
            draft.entriesPage = Math.ceil(
                draft.filteredEmployees.length / draft.entries
            )
        },
        setStartIndex: (draft, action) => {
            draft.startIndex = action.payload
        },
        setFilter: (draft, action) => {
            draft.filteredEmployees = action.payload
            draft.entriesPage = Math.ceil(
                draft.filteredEmployees.length / draft.entries
            )
        },
    },
})

export const { setEntries, setStartIndex, setFilter } = actions

export default reducer
