import { createAsyncThunk } from "@reduxjs/toolkit";
import * as apis from '../../services/post'

export const getPostsLimit = createAsyncThunk('post/all', async(data, {rejectWithValue}) => {
    const response = await apis.apiGetPostsLimit(data)
    console.log(data)
    if(response?.err === 0)  return response
    // return response.rs
    return rejectWithValue(response)
})
