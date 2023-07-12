import { configureStore } from "@reduxjs/toolkit";
import {currencyListReducer} from "./slices/currencyListSlice";

export const store = configureStore({
    reducer: {
        currencyList: currencyListReducer,
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;