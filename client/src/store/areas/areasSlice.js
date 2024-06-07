import { createSlice } from "@reduxjs/toolkit";
import * as actions from './asyncActions'

export const areaSLice = createSlice({
  name: 'area',
  initialState: {
    areas: [],
    isLoading: ''
  },
  reducers: {
    // showModal: (state, action) => {
    //   state.isShowModal = action.payload.isShowModal
    //   state.modalChildren = action.payload.modalChildren
    // },
      
  },
  extraReducers: (builder) => {
    builder.addCase(actions.getAreas.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(actions.getAreas.fulfilled, (state, action) => {
      state.isLoading = false;
      state.areas = action.payload.sort((a,b) => {
        return +a.order - +b.order
      })
    });

    builder.addCase(actions.getAreas.rejected, (state, action) => {
      state.isLoading = false;
      state.areas = [];
    });
  },
})

// export const { logout } = appSlice.actions

export default areaSLice.reducer

