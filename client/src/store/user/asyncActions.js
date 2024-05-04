import { createAsyncThunk } from "@reduxjs/toolkit";
import { apiGetCurrent } from "../../services/user";

export const getCurrent = createAsyncThunk('user/current', async(data, {rejectWithValue}) => {
    const response = await apiGetCurrent()
    if(response?.err === 0)  return response.response
    // return response.rs
    return rejectWithValue(response)
})