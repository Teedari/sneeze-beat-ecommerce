import { createAsyncThunk } from "@reduxjs/toolkit";
import { message } from "antd";
import Auth from "../../../models/Authenticate";
import { setEmailVerification } from "../../slices/auth.slice";
import authFetchUserThunk from "./auth.fetch_user.thunk";

const authSignInThunk = createAsyncThunk(
  'auth/signin',
  async ({formData, navigate}, {dispatch, fulfillWithValue, rejectWithValue}) => {
    return Auth.signInWithEmail(formData?.email, formData?.password)
    .then( res => {
      dispatch(setEmailVerification(res.user?.emailVerified))
      dispatch(authFetchUserThunk({uid:res.user.uid, emailVerified: res.user.emailVerified, navigate}))
      return fulfillWithValue()
    })
    .catch( error  => {
      if(error.code === 'auth/auth/null-user'){
        message.error('Email and password is incorrect')
      }
      else if(error.code === 'auth/auth/user-not-found'){
        message.error('User does not exist')
      }
      else if(error.code === 'auth/too-many-requests'){
        message.error('Too many attempts, please try again in a few minutes time')
      }
      else if(error.code === 'auth/timeout'){
        message.error('Something went wrong, timeout')
      }
      else if(error.code === 'auth/network-request-failed'){
        message.error('Something went wrong, Please check your internet connectivity')
      }else{
        message.error('Something went wrong. Please try again.')
      }
      // me
    })
  }
)


export default authSignInThunk;