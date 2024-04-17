import { createAsyncThunk } from "@reduxjs/toolkit";
import * as apis from '../../services/post'

export const getPosts = createAsyncThunk('post/all', async(data, {rejectWithValue}) => {
    const response = await apis.apiGetPosts()
    console.log(response)
    if(response?.err === 0)  return response
    // return response.rs
    return rejectWithValue(response)
})
