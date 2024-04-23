import { createSlice } from "@reduxjs/toolkit";
import * as actions from './asyncActions'

export const postSlice = createSlice({
    name: 'auth',
    initialState: {
        allPost: [],
        count: 0,
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
            state.count = 0
        });

        builder.addCase(actions.getPosts.fulfilled, (state, action) => {
            state.isLoading = false;
            state.allPost = action.payload.response.rows;
            state.msg = action.payload.msg
            state.count = action.payload.response.count
        });

        builder.addCase(actions.getPosts.rejected, (state, action) => {
            state.isLoading = false;
            state.allPost = [];
            state.msg = ''
            state.count = 0
        });
    },
})

// export const { logout } = postSlice.actions

export default postSlice.reducer

