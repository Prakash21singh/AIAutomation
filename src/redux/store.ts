"use client"

import {combineReducers, configureStore} from "@reduxjs/toolkit"
import AutomationReducer from "./slices/automation"
import {useSelector,TypedUseSelectorHook} from "react-redux"
const rootReducer = combineReducers({
    AutomationReducer
});


export const store = configureStore({
    reducer:rootReducer,
    middleware:(getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck:false
    })
});


export type RootState = ReturnType<typeof store.getState>
export type RootDispatch = typeof store.dispatch
export const useAppSelector:TypedUseSelectorHook<RootState> = useSelector