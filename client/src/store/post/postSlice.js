import { createSlice } from "@reduxjs/toolkit";
import * as actions from './asyncActions'

export const postSlice = createSlice({
    name: 'auth',
    initialState: {
        posts: [],
        msg: ''
    },
    reducers: {
        // login: (state, action) => {
        //   state.isLoggedIn = action.payload.isLoggedIn
        //   state.token = action.payload.token
        // }
    },
    extraReducers: (builder) => {
        builder.addCase(actions.getPosts.pending, (state) => {
            state.isLoading = true;
            state.msg = ''
        });

        builder.addCase(actions.getPosts.fulfilled, (state, action) => {
            state.isLoading = false;
            state.posts = action.payload.response;
            state.msg = action.payload.msg
        });

        builder.addCase(actions.getPosts.rejected, (state, action) => {
            state.isLoading = false;
            state.posts = [];
            state.msg = ''
        });
    },
})

// export const { logout } = postSlice.actions

export default postSlice.reducer

