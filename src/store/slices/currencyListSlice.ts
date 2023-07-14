import {createAsyncThunk, createSlice, Reducer, Slice} from "@reduxjs/toolkit";
import {axiosCoinApi} from "../../axios";

export const fetchCoins = createAsyncThunk('exchanges/fetchExchanges', async (arg, thunkAPI) => {
    const { data } = await axiosCoinApi.get(
        '/coins'
    )
    return data.data;
})

export interface CoinDataInterface {
    '24hVolume': string,
    btcPrice: number,
    change: number,
    color: string,
    iconUrl: string,
    listedAt: number,
    lowVolume: boolean,
    marketCap: string,
    name: string,
    price: number,
    rank: number,
    symbol: string,
    tier: number,
    uuid: string,
}
export interface CurrencyListInterface {
    data: {
        coins: CoinDataInterface[],
        status: Object,
    },
}

let initialState:CurrencyListInterface = {
    data: {
        coins: [],
        status: {}
    }
}

let currencyListSlice: Slice = createSlice({
    name: 'currency-list',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchCoins.fulfilled, (state, action) => {
            state.data = action.payload;
        })
    }
})

export const currencyListReducer: Reducer = currencyListSlice.reducer;