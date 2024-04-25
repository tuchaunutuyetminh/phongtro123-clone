import { createAsyncThunk } from "@reduxjs/toolkit";
import * as apis from '../../services/app'

export const getPrices = createAsyncThunk('price/all', async(data, {rejectWithValue}) => {
    const response = await apis.apiGetPrices()
    if(response?.err === 0)  return response.response
    // return response.rs
    return rejectWithValue(response)
})

