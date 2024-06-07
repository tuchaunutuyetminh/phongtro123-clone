import { createSlice } from "@reduxjs/toolkit";
import * as actions from './asyncActions'

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    currentData: {},
    msg: ''
  },
  reducers: {
    // login: (state, action) => {
    //   state.currentData = 
    // },
    resetCurrent: (state, action) => {
      state.currentData = {}
    },
    // clearMessage: (state) => {
    //   state.mes = ''
    // },
    // updateCart: (state, action) => {
    //   const {pid, color, quantity} = action.payload
    //   const updatingCart = JSON.parse(JSON.stringify(state.currentCart))
    //   console.log([...updatingCart])
    //   state.currentCart = updatingCart.map(el => {
    //     if(el.color === color && el.product?._id === pid) {
    //       return {...el, quantity}
    //     } else return el
    //   })
      
    // }
  },
  extraReducers: (builder) => {
    builder.addCase(actions.getCurrent.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(actions.getCurrent.fulfilled, (state, action) => {
      state.isLoading = false;
      state.currentData = action.payload
    });

    builder.addCase(actions.getCurrent.rejected, (state, action) => {
      state.isLoading = false;
      state.currentData = null;
      state.msg = action.payload.msg

    });
  },
})

export const { resetCurrent } = userSlice.actions

export default userSlice.reducer

