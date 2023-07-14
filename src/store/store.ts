import { configureStore } from "@reduxjs/toolkit";
import {currencyListReducer} from "./slices/currencyListSlice";
import {currencyNewsReducer} from "./slices/currencyNewsSlice";

export const store = configureStore({
    reducer: {
        currencyList: currencyListReducer,
        currencyNews: currencyNewsReducer,
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;