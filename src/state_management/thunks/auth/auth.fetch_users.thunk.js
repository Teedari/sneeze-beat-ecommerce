import { createAsyncThunk } from "@reduxjs/toolkit";
import { message } from "antd";
import UserProfile from "../../../models/User";

const authFetchUsersThunk = createAsyncThunk(
  "auth/fetch/users",
  async (_, { fulfillWithValue, rejectWithValue }) => {
    return UserProfile.getUsers()
    .then( snaphots => {
      
      return fulfillWithValue(UserProfile.convert(snaphots))
    })
    .catch( error  => {
      message.error('Something went wrong. Please try again.')
      return rejectWithValue(error)
    })
  }
);

export default authFetchUsersThunk
