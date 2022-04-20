import { createSlice } from "@reduxjs/toolkit";
import authCreateUserThunk from "../thunks/auth/auth.create_user.thunk";
import authFetchUserThunk from "../thunks/auth/auth.fetch_user.thunk";
import authSignInThunk from "../thunks/auth/auth.signin.thunk";
import authSignUpThunk from "../thunks/auth/auth.signup.thunk";
import { HttpStatus } from "../types";


const initialState = {
  userInfo: {
    email: "",
    username: "",
    user_role: ""
  },
  isAuthenticated: false,
  fetchingState: HttpStatus.IDLE,
  creatingUserState: HttpStatus.IDLE
}
const authSlice = createSlice({
  name: 'authSlice',
  initialState,
  reducers: {
    deactivateUser: (state, actions) => {
      state.isAuthenticated = false
    }
  },
  extraReducers: {
    /** PENDING REQUESTS */
    [authSignUpThunk.pending.type]: (state, actions) =>{
      state.fetchingState = HttpStatus.PENDING
    },
    [authCreateUserThunk.pending.type]: (state, actions) =>{
      state.creatingUserState = HttpStatus.PENDING
    },
    [authSignInThunk.pending.type]: (state, actions) =>{
      state.fetchingState = HttpStatus.PENDING
    },
    [authFetchUserThunk.pending.type]: (state, actions) =>{
      state.fetchingState = HttpStatus.PENDING
    },
    /** FULFILLED REQUESTS */
    [authSignUpThunk.fulfilled.type]: (state, {payload}) => {
      state.fetchingState = HttpStatus.FULFILLED
    },
    [authCreateUserThunk.fulfilled.type]: (state, {payload}) =>{
      state.userInfo.email = payload?.email
      state.userInfo.username = payload?.username
      state.user_role = payload?.user_role
      state.isAuthenticated = true
      state.creatingUserState = HttpStatus.FULFILLED
    },
    [authSignInThunk.fulfilled.type]: (state, {payload}) => {
      state.fetchingState = HttpStatus.FULFILLED
    },
    [authFetchUserThunk.fulfilled.type]: (state, {payload}) => {
      state.userInfo.email = payload?.email
      state.userInfo.username = payload?.username
      state.isAuthenticated = true
      state.fetchingState = HttpStatus.FULFILLED
    },
    /** REJECTED REQUESTS */
    [authSignUpThunk.rejected.type]: (state, actions) => {
      state.fetchingState = HttpStatus.REJECTED
    },
    [authSignInThunk.rejected.type]: (state, actions) => {
      state.fetchingState = HttpStatus.REJECTED
    },
    [authCreateUserThunk.rejected.type]: (state, actions) => {
      state.creatingUserState = HttpStatus.REJECTED
    },
    [authFetchUserThunk.rejected.type]: (state, actions) => {
      state.fetchingState = HttpStatus.REJECTED
    },
  }
})

export const { deactivateUser } = authSlice.actions 
export default authSlice.reducer