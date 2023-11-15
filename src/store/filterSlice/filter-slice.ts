import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IFilterTypes} from "./filter-types";

const initialState: IFilterTypes = {
    filter: 'all',
    filterSearch: ''
}

const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setFilter(state,action: PayloadAction<string>) {
            state.filter = action.payload
        },
        setFilterSearch(state,action: PayloadAction<string>) {
            state.filterSearch = action.payload
        }
    }
})

export const filterReducer = filterSlice.reducer
export const {setFilter, setFilterSearch} = filterSlice.actions