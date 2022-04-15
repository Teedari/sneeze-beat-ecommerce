import { createSlice } from "@reduxjs/toolkit";
import authCreateUserThunk from "../thunks/auth/auth.create_user.thunk";
import authSignUpThunk from "../thunks/auth/auth.signup.thunk";
import { HttpStatus } from "../types";


const initialState = {
  userInfo: {
    email: "",
    username: "",
  },
  isAuthenticated: false,
  fetchingState: HttpStatus.IDLE,
}
const authSlice = createSlice({
  name: 'authSlice',
  initialState,
  extraReducers: {
    /** PENDING REQUESTS */
    [authSignUpThunk.pending.type]: (state, actions) =>{
      state.fetchingState = HttpStatus.PENDING
    },
    [authCreateUserThunk.pending.type]: (state, actions) =>{
      state.fetchingState = HttpStatus.PENDING
    },
    /** FULFILLED REQUESTS */
    [authSignUpThunk.fulfilled.type]: (state, {payload}) => {
      state.fetchingState = HttpStatus.REJECTED
    },
    [authCreateUserThunk.fulfilled.type]: (state, {payload}) =>{
      // state.userInfo.email = payload.email
      // state.userInfo.username = payload.username
      state.fetchingState = HttpStatus.FULFILLED
    },
    /** REJECTED REQUESTS */
    [authSignUpThunk.rejected.type]: (state, actions) => {
      state.fetchingState = HttpStatus.REJECTED
    },
    [authCreateUserThunk.rejected.type]: (state, actions) => {
      state.fetchingState = HttpStatus.REJECTED
    },
  }
})


export default authSlice.reducer