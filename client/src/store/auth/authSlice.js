import { createSlice } from "@reduxjs/toolkit";
import * as actions from './asyncActions'

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isLogged: false,
    token: 'mynh',
    msg: ''
  },
  reducers: {
    // login: (state, action) => {
    //   state.isLoggedIn = action.payload.isLoggedIn
    //   state.token = action.payload.token
    // },
    // logout: (state, action) => {
    //   state.isLoggedIn = false
    //   state.current = null
    //   state.token = null
    //   state.isLoading = false
    //   state.mes = ''
    // },
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
    builder.addCase(actions.registerUser.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(actions.registerUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isLogged = true;
      state.token = action.payload.token
    });

    builder.addCase(actions.registerUser.rejected, (state, action) => {
      state.isLoading = false;
      state.isLogged = false;
      state.token = null
      state.msg = action.payload.msg
    });
  },
})

// export const { } = userSlice.actions

export default authSlice.reducer

