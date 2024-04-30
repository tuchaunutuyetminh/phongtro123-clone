import { createAsyncThunk } from "@reduxjs/toolkit";
import * as apis from '../../services/app'

export const getProvinces = createAsyncThunk('province/all', async(data, {rejectWithValue}) => {
    const response = await apis.apiGetProvinces()
    if(response?.err === 0)  return response.response
    // return response.rs
    return rejectWithValue(response)
})

