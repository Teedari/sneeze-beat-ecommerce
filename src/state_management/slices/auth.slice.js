import { createSlice } from "@reduxjs/toolkit";
import authCreateUserThunk from "../thunks/auth/auth.create_user.thunk";
import authFetchUserThunk from "../thunks/auth/auth.fetch_user.thunk";
import authFetchUsersThunk from "../thunks/auth/auth.fetch_users.thunk";
import authSignInThunk from "../thunks/auth/auth.signin.thunk";
import authSignUpThunk from "../thunks/auth/auth.signup.thunk";
import { HttpStatus } from "../types";


const initialState = {
  userInfo: {
    email: "",
    username: "",
    user_role: "",
    isEmailVerified: false
  },
  users: {
    count: 0,
    list: []
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
    },
    setEmailVerification: (state, {payload}) => {
      state.userInfo.isEmailVerified = payload
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
    [authFetchUsersThunk.pending.type]: (state, actions) =>{
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
      state.emailVerified = payload?.emailVerified
      state.isAuthenticated = true
      state.fetchingState = HttpStatus.FULFILLED
    },
    [authFetchUsersThunk.fulfilled.type]: (state, {payload}) => {
      state.users.list  = payload
      state.users.count = payload.length
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
    [authFetchUsersThunk.rejected.type]: (state, actions) => {
      state.fetchingState = HttpStatus.REJECTED
    },
  }
})

export const { deactivateUser, setEmailVerification } = authSlice.actions 
export default authSlice.reducer