import { createAsyncThunk } from "@reduxjs/toolkit";
import { message } from "antd";
import Auth from "../../../models/Authenticate";
import authCreateUserThunk from "./auth.create_user.thunk";

const authSignUpThunk = createAsyncThunk(
  "auth/signup",
  async ({formData, navigate}, { dispatch, fulfillWithValue, rejectWithValue }) => {
    return Auth.signUpWithEmailAndPassword(formData.email, formData.password)
    .then( userCredential => {
      const user = {email: userCredential.user.email, username: formData.username, fullname: formData.fullname}
      dispatch(authCreateUserThunk({user, navigate}))
      return fulfillWithValue()
    })
    .catch( error  => {
      if(error.code === 'auth/email-already-in-use'){
        message.error('Email has already be taken, Try another email')
      }
      else if(error.code === 'auth/weak-password'){
        message.error('Password should be at least 6 characters')
      }
      else if(error.code === 'auth/too-many-requests'){
        message.error('Too many attempts, please try again in a few minutes time')
      }
      else if(error.code === 'auth/network-request-failed'){
        message.error('Something went wrong, Please check your internet connectivity')
      }else{
        message.error('Something went wrong. Please try again.')
      }
      // message.error(error.code)
      return rejectWithValue(error)
    })
  }
);

export default authSignUpThunk
