import { createAsyncThunk } from "@reduxjs/toolkit";
import * as apis from '../../services/app'

export const getAreas = createAsyncThunk('area/all', async(data, {rejectWithValue}) => {
    const response = await apis.apiGetAreas()
    if(response?.err === 0)  return response.response
    // return response.rs
    return rejectWithValue(response)
})

