import { createSlice } from "@reduxjs/toolkit";

export const appSlice = createSlice({
  name: 'app',
  initialState: {
    isLoading: false,
    isShowModal: false,
    modalChildren: null
  },
  reducers: {
    showModal: (state, action) => {
      state.isShowModal = action.payload.isShowModal
      state.modalChildren = action.payload.modalChildren
    },
      
  },
//   extraReducers: (builder) => {
//     builder.addCase(actions.loginUser.pending, (state) => {
//       state.isLoading = true;
//     });

//     builder.addCase(actions.loginUser.fulfilled, (state, action) => {
//       state.isLoading = false;
//       state.isLogged = true;
//       state.token = action.payload.token
//     });

//     builder.addCase(actions.loginUser.rejected, (state, action) => {
//       state.isLoading = false;
//       state.isLogged = false;
//       state.token = null
//       state.msg = action.payload.msg
//     });
//   },
})

export const { logout } = appSlice.actions

export default appSlice.reducer

