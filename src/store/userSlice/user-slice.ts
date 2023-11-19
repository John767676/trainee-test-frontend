import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {IItmes, IUser} from "./user-types";
import axios from "axios";


const initialState: IItmes = {
    items: [],
    isLoading: false,
    error: ''
}

export const getUsers = createAsyncThunk<IUser[], string, {rejectValue: string}>(
    'user/getUsers',
    async (filterName, {rejectWithValue}) => {
        try {
            const res = await axios.get(`https://stoplight.io/mocks/kode-frontend-team/koder-stoplight/86566464/users?__example=${filterName}`)
            return res.data.items
        } catch (e) {
            return rejectWithValue('critical-error')
        }
    }
)

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: builder =>
        builder
            .addCase(getUsers.pending, state => {
                state.isLoading = true
                state.error = ''
            })
            .addCase(getUsers.fulfilled, (state, action) => {
                state.items = action.payload
                state.isLoading = false
                localStorage.setItem('items', JSON.stringify(action.payload))
            })
            .addCase(getUsers.rejected, (state, action) => {
                state.isLoading = false
                if (action.payload) {
                    state.error = action.payload
                }
            })
})

export const userReducer = userSlice.reducer
