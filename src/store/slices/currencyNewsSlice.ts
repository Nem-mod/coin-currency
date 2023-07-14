import {createAsyncThunk, createSlice, Reducer, Slice} from "@reduxjs/toolkit";
import {axiosBingApi} from "../../axios";


export const fetchNews = createAsyncThunk('news/',
    async ({newsCategory, count}: { newsCategory: string, count: number }) => {
        const response = await axiosBingApi.get(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`);
        return response.data;
    })

export interface currencyNewsValue {
    about: [],
    category: string,
    dataPublished: string,
    description: string,
    image: {
        thumbnail: {
            contentUrl: string,
            height: number
            width: number
        }
        _type: string
    }
    name: string,
    url: string,
    _type: string
}

export interface currencyNewsInterface {
    data: {
        "_type": string,
        "readLink": string,
        "queryContext": {
            "_type": string,
            "originalQuery": string
        },
        "value": currencyNewsValue[]
    }

}

let initialState: currencyNewsInterface = {
    data: {
        "_type": '',
        "readLink": '',
        "queryContext": {
            "_type": "",
            "originalQuery": ""
        },
        "value": []
    }
}

let currencyListSlice: Slice = createSlice({
    name: 'currency-news',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchNews.fulfilled, (state, action) => {
            state.data = action.payload;
        })
    }
})

export const currencyNewsReducer: Reducer = currencyListSlice.reducer;