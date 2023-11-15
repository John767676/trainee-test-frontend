import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {userReducer} from "./userSlice/user-slice";
import {filterReducer} from "./filterSlice/filter-slice";

const rootReducer = combineReducers({
    user: userReducer,
    filter: filterReducer
})

export const store = configureStore({
    reducer: rootReducer,
    devTools: true
})

export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch
