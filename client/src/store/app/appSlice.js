import { createSlice } from "@reduxjs/toolkit";
import * as actions from './asyncActions'

export const appSlice = createSlice({
  name: 'app',
  initialState: {
    categoriesData: []
  },
  reducers: {
    // showModal: (state, action) => {
    //   state.isShowModal = action.payload.isShowModal
    //   state.modalChildren = action.payload.modalChildren
    // },
      
  },
  extraReducers: (builder) => {
    builder.addCase(actions.getCategories.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(actions.getCategories.fulfilled, (state, action) => {
      state.isLoading = false;
      state.categoriesData = action.payload
    });

    builder.addCase(actions.getCategories.rejected, (state, action) => {
      state.isLoading = false;
      state.categoriesData = [];
    });
  },
})

// export const { logout } = appSlice.actions

export default appSlice.reducer

