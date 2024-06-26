import { createAsyncThunk } from "@reduxjs/toolkit";
import * as apis from '../../services/category'

export const getCategories = createAsyncThunk('auth/category', async(data, {rejectWithValue}) => {
    const response = await apis.apiGetCategories()
    if(response?.err === 0)  return response.response
    // return response.rs
    return rejectWithValue(response)
})

