import { createAsyncThunk } from "@reduxjs/toolkit";
import * as apis from '../../services/auth'

export const registerUser = createAsyncThunk('auth/register', async(data, {rejectWithValue}) => {
    const response = await apis.apiRegister(data)
    if(response?.err === 0)  return response
    // return response.rs
    return rejectWithValue(response)
})


export const loginUser = createAsyncThunk('auth/login', async(data, {rejectWithValue}) => {
    const response = await apis.apiLogin(data)
    if(response?.err === 0)  return response
    // // return response.rs
    return rejectWithValue(response)
})