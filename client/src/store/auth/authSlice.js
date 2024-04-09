import { createSlice } from "@reduxjs/toolkit";
import * as actions from './asyncActions'

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isLogged: false,
    token: null,
    msg: '',
    isLoading: false
  },
  reducers: {
    // login: (state, action) => {
    //   state.isLoggedIn = action.payload.isLoggedIn
    //   state.token = action.payload.token
    // },
    logout: (state, action) => {
      state.isLogged = false
      state.token = null
      state.isLoading = false
      state.msg = ''
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
    builder.addCase(actions.loginUser.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(actions.loginUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isLogged = true;
      state.msg = action.payload.msg
      state.token = action.payload.token
    });

    builder.addCase(actions.loginUser.rejected, (state, action) => {
      state.isLoading = false;
      state.isLogged = false;
      state.token = null
      state.msg = action.payload.msg
    });
  },
})

export const { logout } = authSlice.actions

export default authSlice.reducer

