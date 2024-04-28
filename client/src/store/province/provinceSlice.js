import { createSlice } from "@reduxjs/toolkit";
import * as actions from './asyncActions'

export const provinceSlice = createSlice({
  name: 'province',
  initialState: {
    provinces: []
  },
  reducers: {
    // showModal: (state, action) => {
    //   state.isShowModal = action.payload.isShowModal
    //   state.modalChildren = action.payload.modalChildren
    // },
      
  },
  extraReducers: (builder) => {
    builder.addCase(actions.getProvinces.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(actions.getProvinces.fulfilled, (state, action) => {
      state.isLoading = false;
      state.provinces = action.payload
    });

    builder.addCase(actions.getProvinces.rejected, (state, action) => {
      state.isLoading = false;
      state.provinces = [];
    });
  },
})

// export const { logout } = provinceSlice.actions

export default provinceSlice.reducer

