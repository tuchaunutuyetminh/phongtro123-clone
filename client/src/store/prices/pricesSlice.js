import { createSlice } from "@reduxjs/toolkit";
import * as actions from './asyncActions'

export const pricesSlice = createSlice({
  name: 'prices',
  initialState: {
    prices: [],
    isLoading: ''
  },
  reducers: {
    // showModal: (state, action) => {
    //   state.isShowModal = action.payload.isShowModal
    //   state.modalChildren = action.payload.modalChildren
    // },
      
  },
  extraReducers: (builder) => {
    builder.addCase(actions.getPrices.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(actions.getPrices.fulfilled, (state, action) => {
      state.isLoading = false;
      state.prices = action.payload.sort((a,b) => {
        return +a.order - +b.order
      })
    });

    builder.addCase(actions.getPrices.rejected, (state, action) => {
      state.isLoading = false;
      state.prices = [];
    });
  },
})

// export const { logout } = appSlice.actions

export default pricesSlice.reducer

